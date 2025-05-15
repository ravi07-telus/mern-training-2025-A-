import React, { useState } from "react";

export default function TaskList({tasks, getTasks,setTasks}) {

  const [taskId, setTaskId] = useState(null);
  const [taskDetails, setTaskDetails] = useState(null);

  const handleDeleteTask = (id)=>{
    let tasks = JSON.parse(getTasks());
    tasks = tasks.filter((task)=>{
      if(task.id !== id){
        return task;
      }
    })
    // Update the localStorage
    localStorage.setItem('tasks',JSON.stringify(tasks));
    
    // Update the tasks state variable to see updated tasks on applications:
    setTasks(tasks);
  }


  const handleEditTask = (task)=>{
    setTaskId(task.id);
    setTaskDetails(task);
  }

  const cancelEditTask = ()=>{
    setTaskId(null);
  }

  const handleInputChange = (name,value)=>{
    setTaskDetails({...taskDetails,[name]:value})
  }

  const handleEditSaveTask = ()=>{
    let tasks = JSON.parse(getTasks());
    let taskIndex = tasks.findIndex(item=> item.id === taskDetails.id);
    tasks[taskIndex] = taskDetails;
    localStorage.setItem('tasks',JSON.stringify(tasks));
    setTaskId(null);
    setTaskDetails(null);
    setTasks(tasks);
  }

  const markTaskCompleted = (id)=>{
    let newTasks = tasks.map(item=>{
        if(item.id == id){
          item.isCompleted = true;
        }
        return item;
    });
    localStorage.setItem('tasks',JSON.stringify(newTasks));
    newTasks = newTasks.filter(item=> !item.isCompleted);
    setTasks(newTasks);
  }

  return (
    <div className="task-container">
      <h2 className="heading">Task List</h2>
      <div className="task-list">
        {tasks && tasks.length > 0 && tasks.map((item,index)=>{
            return (
            <div  className="task-card" key={item.id}>
                <div className="task-id"> {index +1} </div>
                <div className="task-details">
                  {taskId === item.id ?       
                      <input
                        name="title"
                        type="text"
                        value={taskDetails.title}
                        placeholder="Enter Title"
                        className="todo-input"
                        onChange={(e)=> handleInputChange('title',e.target.value)}
                        />
                    :
                      <div className="task-title">  {item.title}</div>
                    }
                    {taskId === item.id ?       
                      <input
                        name="description"
                        type="text"
                        value={taskDetails.description}
                        placeholder="Enter Description"
                        className="todo-input"
                        onChange={(e)=> handleInputChange('description',e.target.value)}
                        />
                    :
                      <div className="task-description"> {item.description}</div>
                    }
                </div>
                {!taskId && 
                  <div className="task-actions">
                    <button className="btn" style={{background:'blue'}} onClick={()=> markTaskCompleted(item.id)}>✅</button>
                    <button className="btn edit-btn" onClick={()=> handleEditTask(item)}>Edit</button>
                    <button className="btn delete-btn"  onClick={()=> handleDeleteTask(item.id)}>Delete</button>
                  </div>
                }
                {
                  taskId == item.id &&  
                  <div className="task-actions">
                    <button className="btn edit-btn" onClick={handleEditSaveTask}>Save</button>
                    <button className="btn delete-btn" onClick={cancelEditTask}>Cancel</button>
                  </div>
                }
            </div>
            )
        })}
      </div>
    </div>
  );
}

