import {useState} from "react";
import { generateBestNumberOfMatchesForAllTeams} from "../data-functions/generate-match";
// import {FlexBox} from "./components/FlexBox";
// import {Box} from "./components/Box";
// import Team from "./features/Team";
// import Match from "./features/Match";
// import CreateTeamForm from "./features/CreateTeamForm";
//import { Button } from "./components/Button";


export default function Generate(){
  const [teams, setTeams] = useState([]);
  const [matches, setMatches] = useState([]);


  function createMatches(){
    const allMatches = generateBestNumberOfMatchesForAllTeams(teams);
    setMatches(allMatches)
  } 

  return (<></>)
  /*
  <FlexBox style={{alignItems:"center"}}>
         <Box style={{margin:'1.5rem'}}><CreateTeamForm addTeamToList={(team)=>setTeams([...teams, team])}/></Box>
         <Box style={{margin:'1.5rem'}}>{teams.length > 1 &&<Box><Button onClick={createMatches}>Generate Matches</Button></Box>} </Box>
  </FlexBox>
               
  {<FlexBox>{matches.map((match, idx)=><Match key={idx} match={match} idx={idx}/>)}</FlexBox>}
  {<FlexBox style={{alignItems:"flex-start"}}>{teams.map((team, idx)=><Team key={`${team.name}_${idx}`} team={team}/>)}</FlexBox>}
  */
}