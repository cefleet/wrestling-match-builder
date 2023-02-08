
import {useState} from "react";
import {generateBestMatchesForAllTeams} from "./data-functions/generate-match";
import {FlexBox} from "./components/FlexBox";
import {Box} from "./components/Box";
import Team from "./features/Team";
import Match from "./features/Match";
import CreateTeamForm from "./features/CreateTeamForm";
import { Button } from "./components/Button";
function App() {

  const [teams, setTeams] = useState([]);
  const [matches, setMatches] = useState([]);


  function createMatches(){
    const allMatches = generateBestMatchesForAllTeams(teams);
    setMatches(allMatches)
  }

  return (
    <Box>
      <CreateTeamForm addTeamToList={(team)=>setTeams([...teams, team])}/>
      {teams.length > 1 &&<Box><Button onClick={createMatches}>Generate Matches</Button></Box>}          
      {<FlexBox>{matches.map((match, idx)=><Match key={idx} match={match} idx={idx}/>)}</FlexBox>}
      {<FlexBox style={{alignItems:"flex-start"}}>{teams.map((team, idx)=><Team key={`${team.name}_${idx}`} team={team}/>)}</FlexBox>}
    </Box>
  );
}

export default App;