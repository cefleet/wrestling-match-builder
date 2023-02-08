import {useState} from "react";
import {Card, CardBody,CardTitle} from "../components/Card";
import Wrestler from "./Wrestler";

function Team({team, isExpanded=false}){
  const [expanded, setExpanded] = useState(isExpanded);
  const {name, wrestlers} = team;

  return (
    <Card style={{margin:'0.5rem', minWidth:"300px"}}>
      <CardTitle style={{cursor:'pointer'}} onClick={()=>setExpanded(!expanded)}>{name}</CardTitle>
      {expanded && <CardBody>{wrestlers.map(wrestler=><Wrestler key={wrestler.name} wrestler={wrestler}/>)}</CardBody>}
    </Card>
  )

}

export default Team;