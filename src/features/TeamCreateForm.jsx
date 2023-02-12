import {useState} from "react";
import {Box} from "../components/Box";
import {LabeledInput} from "../components/LabeledInput";
import {LabeledColorPicker} from "../components/LabeledColorPicker";
import {Button} from "../components/Button";
import {usePostTeam, usePatchTeam} from "../data-client/team";
function TeamCreateForm({team, isMyTeam, onSave = ()=>{}}){

  const options = {
    onSuccess:()=>onSave()
  }
  const {mutate:createTeam} = usePostTeam(options);
  const {mutate:updateTeam} = usePatchTeam(options);

  const [form,setForm] = useState({...team, myTeam:isMyTeam});

  function updateForm({target}){
    const {name, value } = target;
    setForm({...form, [name]:value});
  }

  async function createNewTeam(){
    const saveFunction  = team ? updateTeam : createTeam;
    await saveFunction(form);
  }

  const action = team ? 'Edit':'Create';

  return (
    <Box>
      <LabeledInput label={'Team Name'} name={'name'} onChange={updateForm} value={form.name || ''}/>
      <LabeledColorPicker label={'Team Primary Color'} name={'pcolor'} onChange={updateForm} value={form.pcolor || '#000000'}/>
      <LabeledColorPicker label={'Team Secondary Color'} name={'scolor'} onChange={updateForm} value={form.scolor || '#000000'}/>
      <Box>
        <Button onClick={createNewTeam}>{action} Team</Button>
        <Button onClick={onSave}>Cancel</Button>
      </Box>
    </Box>
  )
}

export default TeamCreateForm;