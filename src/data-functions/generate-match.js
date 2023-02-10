import {buildAllMatchesForTeam} from "./generate-points.js";
const POINT_CUTOFF = 20;
export function createBestMatchForWrestler(wrestlerWithPotentialMatches){
  return [wrestlerWithPotentialMatches.wrestler, 
    wrestlerWithPotentialMatches.comparrisons.reduce((best,wrestler)=>{
    return wrestler.points < best.points ? wrestler : best
  },{points:10000})];
}

export function createBestMatchesForTeam(wrestlers){
  return wrestlers.map(wrestler=>createBestMatchForWrestler(wrestler));
}

export function generateAllMatchesForAllTeams(teams){
  return teams
  .flatMap((_team,idx)=>buildAllMatchesForTeam(teams,idx))
  .sort((a,b)=>a.points-b.points)
  .reduce((matches, current)=>{
    if(matches.find(match=>checkIfMatchExists(match,current))) return matches;
    return [...matches, current]
  },[])
}

export function generateBestNumberOfMatchesForAllTeams(teams,targetNumber = 3 ){
  const allPossibleMatches = generateAllMatchesForAllTeams(teams);

  const {matches, names, unused} = allPossibleMatches.reduce(({matches, names, unused}, current)=>{
    const {wrestler1:{name:name1},wrestler2:{name:name2}} = current;
    if(current.points > POINT_CUTOFF  || 
      [name1,name2]
      .map(name=>names.filter(n=>n===name).length)
      .find(v=>v >= targetNumber)) return {matches, names, unused:current.points <= POINT_CUTOFF ? [...unused, current]:unused};

    return {matches:[...matches, current], names:[...names, name1, name2], unused}

  },{names:[],matches:[], unused:[]});

  const needsMatches = names.reduce((results, name)=>{
    const needs = targetNumber - names.filter(n=>n===name).length;
    //no need to repeat
    if(needs == 0 || results.find(r=>r.name === name)) return results;
    return [...results, {needs,name}]
  },[]);

  const sortedUnused = unused.sort((a,b)=>a.points-b.points)
  //some of these kids are going to have additional matches
  const {matchesToAdd, names:namesAdjustment} = needsMatches.reduce(({matchesToAdd,names}, {name, needs}) => {
    let popIdx;
    for(let i = 0; i < needs; i++){
      const match = sortedUnused.find((m,idx)=>{
        if(m.wrestler1.name === name || m.wrestler2.name === name){
          popIdx = idx;
          return true;
        }
      });
      if(match) {
        names.push(name);
        matchesToAdd.push(match);
        sortedUnused.splice(popIdx, 1);

      }
    }
    return {matchesToAdd, names};
  },{matchesToAdd:[], names:[]})

  console.log(matchesToAdd, [...namesAdjustment,...names].sort())

  return [...matches, ...matchesToAdd];
}


function checkIfMatchExists(match1, match2) {
  const target = [match1.wrestler1.name, match1.wrestler2.name];
  const arr = [match2.wrestler1.name, match2.wrestler2.name];

  return target.every(v => arr.includes(v))
}