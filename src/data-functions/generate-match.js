import {buildAllPointsForTeam} from "./generate-points.js";

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
//This build every match with points itis probably an overkill but we can stick with it for now.
  const AllPotentialMatchesWithPoints = teams.map(((_team,idx)=>buildAllPointsForTeam(teams,idx)));
  const allBestMatches = AllPotentialMatchesWithPoints.flatMap(team=>createBestMatchesForTeam(team));

  //remove duplicates
  //w = wrestler
  //c = current
  return allBestMatches.reduce((matches, current)=>{
    if(matches.find((match)=>checkIfMatchExists(match,current))) return matches;

    return [...matches, current]
  },[])
}

function checkIfMatchExists(match1, match2) {
  const target = [match1[0].name, match1[1].name];
  const arr = [match2[0].name, match2[1].name];

  return target.every(v => arr.includes(v))
}