import "./App.css";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
function App() 
{
  const[tasks,setTasks]=useState(getStoredTask);
  function acceptTask(task)
  { 
    setTasks((prevTask)=>{
      setTasks([...prevTask,task])
    });
  }
  function deleteTask(id)
  {
    console.log("in app dele");
    setTasks((prevTask)=>{
      return prevTask.filter((task,index)=>{
        return index!==id;
      })
    })
  }
  useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(tasks));
  },[tasks])

  function getStoredTask()
  {
    let tasks=localStorage.getItem('tasks');
    if(tasks)
    {
      return JSON.parse(tasks);
    }
    return [];
  }
  function editTask(id,editedTask)
  { 
    let newTaskList=[];
    editedTask=prompt("Enter updated task");    
   if(editedTask)
   {
    tasks.map((task,index)=>{
       if(id==index)
       {
         newTaskList.push(editedTask);
       }
       else
       {
         newTaskList.push(task);
       }
    })
    setTasks(newTaskList);
  }
}
  return (
    <>
    <Header/>
    <div className="main-container">
    <AddTask function={"Add task"} task={acceptTask}/>
    {
      tasks.map((task,index)=>(
        <TaskList key={index} id={index} 
            onSelect={deleteTask}
            task={task}
            edit={editTask}
        />
      ))
    }
    </div>
    </>
  );
}
export default App;
