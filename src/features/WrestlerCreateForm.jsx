import {useState} from "react";
import {Box} from "../components/Box";
import {LabeledInput} from "../components/LabeledInput";
import {Button} from "../components/Button";
import {usePostWrestler, usePatchWrestler} from "../data-client/wrestler";

function WrestlerCreateForm({wrestler, team_id, onSave = ()=>{}}){

  const options = {
    onSuccess:()=>onSave()
  }
  const {mutate:createWrestler} = usePostWrestler(options);
  const {mutate:updateWrestler} = usePatchWrestler(options);

  const [form,setForm] = useState({team_id});

  function updateForm({target}){
    const {name, value } = target;
    setForm({...form, [name]:value});
  }

  async function createNewWrestler(){
    const saveFunction  = wrestler ? updateWrestler : createWrestler;
    await saveFunction(form);
  }

  const action = wrestler ? 'Edit':'Create';

  return (
    <Box>
      <LabeledInput label={'Name'} name={'name'} onChange={updateForm} value={form.name || ''}/>
      <LabeledInput label={'Age'} name={'age'} type={'number'} onChange={updateForm} value={form.age || ''}/>
      <LabeledInput label={'Weight'} name={'weight'} type={'number'} onChange={updateForm} value={form.weight || ''}/>
      <LabeledInput label={'Experience (in seasons of practice)'} name={'exp'} type={'number'} onChange={updateForm} value={form.exp || ''}/>
      <Box>
        <Button onClick={createNewWrestler}>{action} Wrestler</Button>
        <Button onClick={onSave}>Cancel</Button>
      </Box>
    </Box>
  )
}

export default WrestlerCreateForm;