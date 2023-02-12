import {useState} from "react"
import {Button} from "../../components/Button";
import { EditiableTd } from "../../components/EditableTd";
import {usePatchWrestler, usePostWrestler} from "../../data-client/wrestler";

export default function({wrestler, onSave, editing, team_id, onCancel}){

  const [isEditing,setIsEditing] = useState(editing);
  const [form,setForm] = useState({...wrestler, team_id : wrestler?.team_id || team_id});

  const cancelLocally = ()=>setIsEditing(false)

  const {name,age,exp,weight,gender} = wrestler || {};

  const {mutate:updateWrestler} = usePatchWrestler({onSuccess:onSave});
  const {mutate:createWrestler} = usePostWrestler({onSuccess:onSave});


  function updateForm({target}){
    const {name, value } = target;
    setForm({...form, [name]:value});
  }

  async function saveWrestler(){
    const saveFunction  = wrestler ? updateWrestler : createWrestler;
    await saveFunction(form);
    setIsEditing(false);
    onSave();
  }

  return (
    <tr>
      <EditiableTd value={name} name={'name'} onChange={updateForm} isEditing={isEditing}/>
      <EditiableTd value={age} name={'age'} onChange={updateForm} isEditing={isEditing}/>
      <EditiableTd value={weight} name={'weight'} onChange={updateForm} isEditing={isEditing}/>
      <EditiableTd value={exp} name={'exp'} onChange={updateForm} isEditing={isEditing}/>
      <EditiableTd value={gender} name={'gender'} type={'select'} options={['male','female']} onChange={updateForm} isEditing={isEditing}/>
      <td>
        {isEditing ? 
          <>
            <Button style={{padding:'0.25rem'}} onClick={onCancel ||cancelLocally }>Cancel</Button>
            <Button style={{padding:'0.25rem'}} onClick={saveWrestler}>Save</Button>
          </>: 
          <Button style={{padding:'0.25rem'}} onClick={()=>setIsEditing(true)}>Edit</Button>
        }
      </td>
    </tr>
  )
}