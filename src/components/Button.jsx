const classStyles = {
  button:{

  }
}
export function Button({children, style = {}, ...props}){
  const {button} = classStyles;
  return <button style={{...button, ...style}} {...props}>{children}</button>
}