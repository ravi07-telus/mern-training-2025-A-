import { useEffect,useState } from "react";
function CompletedTasks(){
    const [completedTasks,setCompletedTasks] = useState([]);

    useEffect(()=>{ 
        let tasks = localStorage.getItem('tasks');
        tasks = tasks ? JSON.parse(tasks) : []
        tasks = tasks.filter(item=> item.isCompleted);
        setCompletedTasks(tasks);
    }, []) //

    return (
    <div className="task-container">
      <h2 className="heading">Completed Tasks</h2>
      <div className="task-list">
        { completedTasks && completedTasks.map((item,i)=>{
            return (
                <div className="task-card" key={item.id}>
                    <div className="task-id">{i+1}</div>
                    <div className="task-details">
                        <div className="task-title">  {item.title}</div>
                        <div className="task-description"> {item.description}</div>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
    )
}

export default CompletedTasks;