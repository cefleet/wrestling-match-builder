import {useState} from "react";
import { Box } from "../../components/Box";
import TeamCreateForm from "../../features/TeamCreateForm";
import {useGetMyTeam} from "../../data-client/team";
import TeamTable from "./TeamTable";
export default function TeamContainer(){

  const {data:myTeam, isLoading, refetch} = useGetMyTeam();
  //find my team
  const [isEditing, setIsEditing] = useState(false);

  async function onSave(){
    setIsEditing(false);
    await refetch();
  }

  return (
    <Box>
      <h2>My Team</h2>
      {isEditing || (!isLoading && !myTeam ) ? 
      <TeamCreateForm isMyTeam={true} team={myTeam?.team}  onSave={onSave}/> : null}
      {!!myTeam ? <TeamTable 
        team={myTeam} 
        isEditable={!isEditing}
        onEditClicked={()=>setIsEditing(true)}
        refetch={refetch}
      />: null}
    </Box>
  )
}