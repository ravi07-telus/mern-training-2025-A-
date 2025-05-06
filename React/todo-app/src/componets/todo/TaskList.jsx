import React from "react";

export default function TaskList({tasks,name}) {

  return (
    <div className="task-container">
      <h2 className="heading">Task List</h2>
      <div className="task-list">
        {tasks && tasks.length > 0 && tasks.map((item,index)=>{
            return (<div  className="task-card">
                <div className="task-id"> {item.id || index +1} </div>
                <div className="task-details">
                  <div className="task-title"> {item.title}</div>
                  <div className="task-description"> {item.description}</div>
                </div>
                <div className="task-actions">
                  <button className="btn edit-btn" >Edit</button>
                  <button className="btn delete-btn" >Delete</button>
              </div>
            </div>)
        })}
      </div>
    </div>
  );
}

