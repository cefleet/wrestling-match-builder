import {createWrestler} from "./generate-wrestlers";

export function createTeam(name,wrestlersCount){
  const wrestlers = [];
  for(let i = 0; i <= wrestlersCount; i++) wrestlers.push({...createWrestler(), team:name});

  return {name, wrestlers:wrestlers.sort((a,b)=>a.weight-b.weight)}
}
