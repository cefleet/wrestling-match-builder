function sortAllWrestlers(teams){
  return teams
    .flatMat(team=>team.wrestlers.map(wrestler=>({...wrestler,name:team.name })))
    .sort((a,b)=>{
      const diff = a.weight - b.weight;
      if(Math.abs(diff) > 5) return diff;
      
    })
}