import {buildAllPointsForTeam,buildAllMatchesForTeam} from "./generate-points.js";

export function createBestMatchForWrestler(wrestlerWithPotentialMatches){
  return [wrestlerWithPotentialMatches.wrestler, 
    wrestlerWithPotentialMatches.comparrisons.reduce((best,wrestler)=>{
    return wrestler.points < best.points ? wrestler : best
  },{points:10000})];
}

export function createBestMatchesForTeam(wrestlers){
  return wrestlers.map(wrestler=>createBestMatchForWrestler(wrestler));
}

export function generateBestMatchesForAllTeams(teams){
  const AllPossibleMatches = teams
  .flatMap((_team,idx)=>buildAllMatchesForTeam(teams,idx))
  .sort((a,b)=>a.points-b.points)
  .reduce((matches, current)=>{
    if(matches.find(match=>checkIfMatchExists(match,current))) return matches;
    return [...matches, current]
  },[])

  console.log(AllPossibleMatches)

 return []
}


function checkIfMatchExists(match1, match2) {
  const target = [match1.wrestler1.name, match1.wrestler2.name];
  const arr = [match2.wrestler1.name, match2.wrestler2.name];

  return target.every(v => arr.includes(v))
}