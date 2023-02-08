import {Box} from "./Box";

const styleClasses = {
  flexBox:{
    display:"flex",
    flexWrap:"wrap"
  }
}

export function FlexBox({children, style = {}, ...props}){
  const {flexBox} = styleClasses;
  return <Box style={{...flexBox, ...style}} {...props}>{children}</Box>
}