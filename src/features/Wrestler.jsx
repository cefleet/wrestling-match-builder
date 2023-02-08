import {useState} from "react";
import {LabeledList,LabeledListItem, Label, Item} from "../components/LabeledList";
import { CardBody, Card, CardTitle } from "../components/Card";
import { FlexBox } from "../components/FlexBox";
import {Box} from "../components/Box";

const styleClasses = {
  cardTitle:{fontSize:'1rem', padding:'0.25rem', cursor:'pointer'},
  card:{width:'100%', marginTop:'0.5rem'}
}

function Wrestlter({wrestler, isExpanded}){
  const {age, weight, name, exp, gender} = wrestler;

  const [expanded,setExpanded] = useState(isExpanded);

  return <Card style={styleClasses.card}>
    <CardTitle style={styleClasses.cardTitle} onClick={()=>setExpanded(!expanded)}>
      <FlexBox>
        <Box>{name}</Box>
      </FlexBox>
    </CardTitle>
    {expanded && <CardBody>
      <LabeledList>
        <LabeledListItem><Label>Age</Label><Item>{age}</Item></LabeledListItem>
        <LabeledListItem><Label>Weight</Label><Item>{weight}</Item></LabeledListItem>
        <LabeledListItem><Label>Experience</Label><Item>{exp}</Item></LabeledListItem>
        <LabeledListItem><Label>Gender</Label><Item>{gender}</Item></LabeledListItem>
      </LabeledList>
    </CardBody>}
  </Card>

}

export default Wrestlter;