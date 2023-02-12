import {useState} from "react";
import {Card, CardBody,CardTitle} from "../components/Card";
import {Box} from "../components/Box";
import {Button} from "../components/Button";
import { FlexBox } from "../components/FlexBox";
import Wrestler from "./Wrestler";
import WrestlerCreateForm from "./WrestlerCreateForm";

import {RiArrowUpFill, RiArrowDownFill,RiStarSFill} from "react-icons/ri"
function CardButton({children, ...props}){
  return <Button {...props} style={{padding:'0.25rem', margin:'0.25rem'}}>{children}</Button>
}

function Team({
  team, 
  isEditable=true, 
  canAddWrestler=true, 
  isExpanded=false,
  onEditClicked,
  refetch
}){

  const [expanded, setExpanded] = useState(isExpanded);
  const [addingWrestler, setAddingWrestler] = useState(false);
  const {team:{name,pcolor,scolor,myTeam,id:team_id}, wrestlers} = team;

  function onSaveNewWrestler(){
    setAddingWrestler(false);
    refetch()
  }

  return (
    <Card style={{margin:'0.5rem', minWidth:"300px"}}>
      <CardTitle 
        style={{cursor:'pointer'}} 
        pcolor={pcolor}
        scolor={scolor}
      >
      <FlexBox style={{justifyContent:'space-between'}}>
        <Box onClick={()=>setExpanded(!expanded)}>{myTeam ? <RiStarSFill /> :null} {name}{expanded ? <RiArrowUpFill /> : <RiArrowDownFill />  }</Box>
        <Box>
          {isEditable ? <CardButton onClick={onEditClicked}>Edit</CardButton> : null}
        </Box>
      </FlexBox>

      </CardTitle>
      {expanded && <CardBody>
        {canAddWrestler && !addingWrestler ? <CardButton onClick={()=>setAddingWrestler(true)} >Add Wrestler</CardButton> : null} 
        {addingWrestler ? <WrestlerCreateForm team_id={team_id} onSave={onSaveNewWrestler}/>:null}
        {wrestlers.map(wrestler=><Wrestler key={wrestler.name} wrestler={wrestler}/>)}
      </CardBody>}
    </Card>
  )

}

export default Team;