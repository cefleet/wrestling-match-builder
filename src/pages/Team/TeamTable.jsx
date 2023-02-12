import {useState} from "react";
import {Box} from "../../components/Box";
import {Button} from "../../components/Button";
import { FlexBox } from "../../components/FlexBox";
import WrestlerRow from "./WrestlerRow";
//import WrestlerCreateForm from "../.../features/WrestlerCreateForm";

import {RiStarSFill} from "react-icons/ri"
function CardButton({children, ...props}){
  return <Button {...props} style={{padding:'0.25rem', margin:'0.25rem'}}>{children}</Button>
}

function TeamTable({
  team, 
  isEditable=true, 
  canAddWrestler=true, 
  onEditClicked,
  refetch
}){

  const [addingWrestler, setAddingWrestler] = useState(false);
  const {team:{name,pcolor,scolor,myTeam,id:team_id}, wrestlers} = team;

  function onSaveNewWrestler(){
    setAddingWrestler(false);
    refetch()
  }

  return (
    <table style={{width:'100%', maxWidth:'1200px', display:"table"}}>
      <caption style={{color:scolor,backgroundColor:pcolor, fontWeight:'bold', fontSize:"1.5rem", padding:'0.5rem'}}>
        <FlexBox style={{justifyContent:'space-between'}}>
         <Box>{myTeam ? <RiStarSFill /> :null} {name}</Box>
         <Box>
           {isEditable ? <CardButton onClick={onEditClicked}>Edit</CardButton> : null}
         </Box>
         
       </FlexBox>
      </caption>
      <thead>   
       <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Weight</th>
        <th>Experience</th>
        <th>Gender</th>
        <th><CardButton onClick={()=>setAddingWrestler(true)} >Add New Wrestler</CardButton> </th>
       </tr>
      </thead>
      <tbody>
        {addingWrestler ? <WrestlerRow onSave={onSaveNewWrestler} editing={true} team_id={team_id} onCancel={()=>setAddingWrestler(false)} /> : null}
        {wrestlers.sort((a,b)=>a.name < b.name?-1:1).map(wrestler=><WrestlerRow key={wrestler.id} wrestler={wrestler} onSave={onSaveNewWrestler}/>)}
      </tbody>
    </table>
  )
}

export default TeamTable;