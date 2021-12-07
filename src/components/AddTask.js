import { TextField } from "@mui/material";
import { Button } from "@mui/material";
const AddTask=(props)=>{
  function handleSubmit(e)
  {
    e.preventDefault();
    console.log(e.target.addTaskInput.value);
    props.task(e.target.addTaskInput.value);
    e.target.addTaskInput.value="";
  }
  return <>
  <form className="add-task-container" onSubmit={handleSubmit}>
          <TextField label="Enter task" variant="outlined" fullWidth required 
          name="addTaskInput"/>
          <br />
          <br />
          <Button size="small" variant="contained"
          type="submit"
          >
            {props.function}
          </Button>
        </form>
  </>
}
export default AddTask;