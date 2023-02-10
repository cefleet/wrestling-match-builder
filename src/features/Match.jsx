import {FlexBox} from "../components/FlexBox";
import {Box} from "../components/Box";
import {Card, CardBody,CardTitle} from "../components/Card";
import Wrestlter from "./Wrestler";

const styleClasses = {
  match:{
    margin:'1rem', 
    padding:'1rem', 
    alignItems:'center', 
    flexWrap:'nowrap',
    border:'1px solid',
    borderRadius:'0.25rem'
  },
  matchCard: {
    width:'100%',
    minWidth:"180px"
  },
  centerText:{
    padding:'0.25rem', 
    flexDirection:'column', 
    alignItems:'center',
    minWidth:'80px'
  }
}

function MatchCard({wrestler}){
  return (
    <Card style={styleClasses.matchCard}>
      <CardTitle>{wrestler.team}</CardTitle>
      <CardBody><Wrestlter wrestler={wrestler} isExpanded={true}/></CardBody>
    </Card>
  )
}

function Match({match:{wrestler1, wrestler2}, idx}){
  return (
    <FlexBox style={styleClasses.match}>
      <MatchCard wrestler={wrestler1} />
      <FlexBox style={styleClasses.centerText}>
        <Box style={{fontWeight:'bold'}}>{`Match #${idx}`}</Box>
        <Box> VS </Box>
      </FlexBox>
      <MatchCard wrestler={wrestler2} />
    </FlexBox>
  )
}

export default Match;