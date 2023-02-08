import {useState} from "react";
import {Box} from "../components/Box";
import {LabeledInput} from "../components/LabeledInput";
import {Button} from "../components/Button";
import {createTeam} from "../data-functions/generate-teams";

function CreateTeamForm({addTeamToList}){

  const [form,setForm] = useState({});

  function updateForm({target}){
    const {name, value } = target;
    setForm({...form, [name]:value});
  }

  function createNewTeam(){
    const team = createTeam(form.name,form.count);
    setForm({});
    addTeamToList(team);
  }


  return (
    <Box>
      <LabeledInput label={'Team Name'} name={'name'} onChange={updateForm} value={form.name || ''}/>
      <LabeledInput label={'Number of Wrestlers'} name={'count'} onChange={updateForm}   type={'number'} value={form.count || ""}/>
      <Box><Button onClick={createNewTeam} className='button is-primary'>Generate Team</Button></Box>
    </Box>
  )
}

export default CreateTeamForm;