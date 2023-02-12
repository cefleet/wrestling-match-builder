import { Box } from "./Box";
const styleClasses={
  box:{
    width:'100%',
    padding:'0.25rem 1rem'
  },
  label:{
    width:"100%",
    fontWeight:"bold",
    display:'block'
  },
  input:{
    padding:'0.5rem',
    display:"block",
    width:'100%'
  }
}

export function LabeledInput({ label,name, style={},...props}){
  const sanitizedName =  name ? name : label ? label.replace(/\W/g, '') : '';
  const {label: labelStyle, input, box} = styleClasses;
  return <Box style={{...box, ...style}}>
    <label style={labelStyle} htmlFor={sanitizedName}>{label}</label>
    <input style={input} id={sanitizedName} name={sanitizedName} {...props}></input>
    </Box>
}