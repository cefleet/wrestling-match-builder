
export function EditiableTd({value, isEditing, style, ...props}){
  return (
    <td>{!isEditing ? `${value || ''}`: <input {...props} defaultValue={value}/>}</td>
  )
}