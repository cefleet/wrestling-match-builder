function calculateAgePoints(age1,age2){
  return Math.abs(age1-age2) * Math.abs(age1-age2);
}

function calculateWeightPoints(weight1,weight2){
  return Math.abs(weight1 - weight2);
}

function calculateExpPoints(exp1,exp2){
  return Math.abs(exp1-exp2)*3;
}

function buildPointsForWrestler(wrestler,otherWrestlers){
  let comparrisons = otherWrestlers.map(otherWrestler=> {
    //we are looking for the least amount of points. 
    const weightPoints = calculateWeightPoints(wrestler.weight,otherWrestler.weight);
    const agePoints = calculateAgePoints(wrestler.age,otherWrestler.age);
    const expPoints = calculateExpPoints(wrestler.exp, otherWrestler.exp)
    const points = weightPoints + agePoints + expPoints;
    return {...otherWrestler, points}
  });
  return {wrestler,comparrisons};
}

function buildAllPointsForTeam(teams, idx){
  const team = teams[idx]
  const otherTeamsWrestlers = teams.reduce((notCurrentTeams,team,index)=>index != idx ? [...notCurrentTeams, ...team.wrestlers] : notCurrentTeams,[]);
  return team.wrestlers.map(wrestler=>buildPointsForWrestler(wrestler, otherTeamsWrestlers))
}

function createBestMatchForWrestler(wrestlerWithPotentialMatches){
  return [wrestlerWithPotentialMatches.wrestler, 
    wrestlerWithPotentialMatches.comparrisons.reduce((best,wrestler)=>{
    return wrestler.points < best.points ? wrestler : best
  },{points:10000})];
}

function createBestMatchesForTeam(wrestlers){
  return wrestlers.map(wrestler=>createBestMatchForWrestler(wrestler));
}

export function generateBestMatchesForAllTeams(teams){
//This build every match with points itis probably an overkill but we can stick with it for now.
  const AllPotentialMatchesWithPoints = teams.map(((_team,idx)=>buildAllPointsForTeam(teams,idx)));
  const allBestMatches = AllPotentialMatchesWithPoints.map(team=>createBestMatchesForTeam(team));
  return allBestMatches;
}
