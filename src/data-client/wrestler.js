//  const wrestlers = getItem('wrestlers');
//const teamWrestlers = wrestlers.filter(wrestler=>wrestler.team_id === team_id);
import {useQuery, useMutation} from "react-query";
import {v4 as uuid} from "uuid";
import {getItem,setItem} from "./store-functions";

export function useGetAllWrestlers(){
  return useQuery(['wrestlers'], async () => getItem('wrestlers'))
}

export function useGetWrestler({wrestler_id}){
  return useQuery(['wrestler', wrestler_id],async ()=>{
    const wrestlers = getItem('wrestlers');
    return wrestlers.find(w=>w.id === wrestler_id)
  })
}


export function usePostWrestler(options){
  return useMutation(async wrestler => {
    const wrestlers = getItem('wrestlers');
    wrestler.id = uuid();
    setItem('wrestlers', [...wrestlers, wrestler]);
    return wrestler;
  }, options)
}

export function usePatchWrestler(options){  
  return useMutation(async wrestler => {
    const wrestlers = getItem('wrestlers');
    setItem('wrestlers', [...wrestlers.filter(w=>w.id !== wrestler.id), wrestler]);
    return wrestler;
  }, options)
}

export function useDeleteWrestler(options){  
  return useMutation(async wrestler_id => {
    const wrestlers = getItem('wrestlers');
    setItem('wrestlers', [...wrestlers.filter(w=>w.id !== wrestler_id)]);
    return wrestler_id;
  }, options)
}


export function usePostAddWrestlerToTeam(options) {
  return useMutation(async ({wrestler_id, team_id}) => {

    const wrestlers = getItem('wrestlers');
    const wrestler = wrestlers[wrestler_id];
    
    wrestler.team_id = team_id;

    setItem('wrestlers', [...wrestlers.filter(w=>w.id !== wrestler.id), wrestler])
    return wrestler;

  }, options)
    
}