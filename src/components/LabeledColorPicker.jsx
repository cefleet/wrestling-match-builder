import { Box } from "./Box";

const styleClasses =  {
  colorPicker:{
  width:'200px',
  padding:'0rem',
  },
  box:{
    width:'100%',
    padding:'0.2rem 1rem'
  },
  label:{
    width:"100%",
    fontWeight:"bold",
    display:'block'
  },
};


export function LabeledColorPicker({ label,name, style={},...props}) {
  const sanitizedName =  name ? name : label ? label.replace(/\W/g, '') : '';
  const {label: labelStyle, box} = styleClasses;
  return <Box style={{...box, ...style}}>
    <label style={labelStyle} htmlFor={sanitizedName}>{label}</label>
    <input type={'color'} style={styleClasses.colorPicker} id={sanitizedName} name={sanitizedName} {...props}></input>
    </Box>
}