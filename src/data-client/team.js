import {useQuery, useMutation} from "react-query";
import {v4 as uuid} from "uuid";
import {getItem,setItem} from "./store-functions";

export function useGetTeam({team_id}){
  return useQuery(['team', team_id],async ()=>{
    const team = getItem('teams').find(t=>t.id === team_id);
    if(!team) return null;

    const wrestlers = getItem('wrestlers').filter(wrestler=>wrestler.team_id === team_id);

    return {team, wrestlers}
  })
}

export function useGetMyTeam(){
  return useQuery(['myTeam'],async ()=>{
    const team = getItem('teams').find(t=>t.myTeam);    
    if(!team) return null;

    const wrestlers = getItem('wrestlers').filter(wrestler=>wrestler.team_id === team.id);
    return {team, wrestlers}
  })
}

export function useGetAllTeams(){
  return useQuery(['teams'], async ()=>{
    const wrestlers = getItem('wrestlers');
    const teams = getItem('teams');
    return teams.map(team=>{
      return {team, wrestlers:wrestlers.filter(wrestler=>wrestler.team_id === team.id)}
    })
  })
}

export function usePostTeam(options){
  return useMutation(async team => {
    const teams = getItem('teams');
    team.id = uuid();
    setItem('teams', [...teams, team]);
    return team;
  }, options)
}

export function usePatchTeam(options){
  return useMutation(async team => {
    const teams = getItem('teams');
    setItem('teams', [...teams.filter(t=>t.id !== team.id), team]);
    return team;
  }, options)
}

export function useDeleteTeam(options){
  return useMutation(async team_id => {
    const teams = getItem('teams');
    setItem('teams', [...teams.filter(t=>t.id !== team_id)]);
    return team_id;
  }, options)
}