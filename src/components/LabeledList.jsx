
const styleClasses={
  labledList:{
    padding:'0.25rem 1rem',
    margin:'0.25rem',
  },
  labeledListItem:{
    padding:'0.1rem 1rem',
    display:'flex',
    margin:0
  },
  label:{
    paddingRight:'0.5rem',
    fontWeight:'bold',
    width:'100px',
    textAlign:'right'
  },
  item:{
    maxWidth:'200px',
  }
}

export function LabeledList({children}){
  const {labledList} = styleClasses;
  return <div style={labledList}>{children}</div>
}

export function LabeledListItem({children}){
  const {labeledListItem} = styleClasses;
  return <div style={labeledListItem}>{children}</div>
}

export function Label({children}){
  const {label} = styleClasses;
  return <div style={label}>{children}</div>
}

export function Item({children}){
  const {item} = styleClasses;
  return <div style={item}>{children}</div>
}