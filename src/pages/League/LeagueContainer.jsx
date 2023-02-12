import {useState} from "react";
import { Box } from "../../components/Box";
import TeamCreateForm from "../../features/TeamCreateForm";
import {useGetAllTeams} from "../../data-client/team";
import TeamTable from "../Team/TeamTable";
export default function LeagueContainer(){
  const {data:myTeam, isLoading, refetch} = useGetAllTeams();
  //find my team
  const [isAddingTeam, setIsAddingTeam] = useState(false);

  async function onSave(){
    setIsAddingTeam(false);
    await refetch();
  }

  return (
    <Box>
      <h2>Teams</h2>
      <TeamCreateForm isMyTeam={false} team={myTeam?.team}  onSave={onSave}/>
      
    </Box>
  )
}