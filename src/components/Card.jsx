import { Box } from "./Box";

const classStyles = {
  card:{
    border:'1px solid',
    borderRadius:'0.25rem'
  },
  cardTitle:{
    padding:'1rem',
    fontWeight:'bold',
    fontSize:'1.5rem',
    borderBottom:'1px solid'
  },
  cardBody:{
    padding:'0.25rem'
  }
}

export function Card({children, style={}, ...props}){
  const {card} = classStyles;
  return (
    <Box style={{...card,...style}} {...props}>{children}</Box>
  )
};

export function CardTitle({children, style={}, pcolor='#ffffff', scolor='#000000',...props}){
  const {cardTitle} = classStyles;
  cardTitle.backgroundColor = pcolor;
  cardTitle.color = scolor;
  return (
    <Box style={{...cardTitle, ...style}} {...props}>{children}</Box>
  )
}

export function CardBody({children, style={}, ...props}){
  const {cardBody} = classStyles;
  return (
    <Box style={{...cardBody, ...style}} {...props}>{children}</Box>
  )
}