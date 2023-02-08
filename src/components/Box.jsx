export function Box({children, style = {}, ...props}){
  return <div style={style} {...props}>{children}</div>
}