// import './Todo.css';

//  React Hook
import { useState, useEffect } from "react"; // 
import TaskList from "./TaskList";

const Todo = () => {

    const [title, setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [tasks, setTasks]  = useState([]);

    useEffect(()=>{
        let tasks = getTasks();
        tasks = tasks ? JSON.parse(tasks) : [];
        setTasks(tasks);
    }, [])

    

    const handleInputChange = (name,value)=>{
        if(name == 'title'){
            setTitle(value);
        }else if(name == "description"){
            setDescription(value);   
        }
    }

    const addTaskHandler = ()=>{
      if(title && description){
        const task = {title, description};
        let tasks = getTasks();
        if(!tasks){
          tasks = [task];
        }else{
          tasks = JSON.parse(tasks);
          tasks.push(task);
        }
        setTasks(tasks);
        localStorage.setItem('tasks',JSON.stringify(tasks));
        alert("Task is added")
        setTitle('')
        setDescription('')
      }
    }

  const getTasks = ()=>{
    const tasks = localStorage.getItem('tasks');
    return tasks;
  }

  return (
    <div className="todo-container">
      <input
        name="title"
        type="text"
        value={title}
        placeholder="Enter Title"
        className="todo-input"
        onChange={(e)=> handleInputChange('title',e.target.value)}
      />
      <textarea
        name="description"
        value={description}
        placeholder="Add description of the task"
        className="todo-textarea"
        onChange={(e)=> handleInputChange('description',e.target.value)}
        rows={4}
      ></textarea>
      <button type="submit" className="todo-button" onClick={addTaskHandler}>
        Add Task
      </button>
      <TaskList tasks ={tasks} name={"todo"}/>
    </div>
  );
};

export default Todo;
