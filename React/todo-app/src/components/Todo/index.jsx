import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 

export default function TodoApp() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(()=>{
    const list = getTodos();
    setTodos(list);
    console.log("Todo List: ",list)
  },[])

  const getTodos = ()=>{
    const list = localStorage.getItem('todos');
    return list ? JSON.parse(list): list;
  }

  const addTask = () => {
    if (task.trim() === '') return;
    let list = getTodos();
    const item = {title:task,id:uuidv4()} 
    if(!list){
        list = [item]
    }else{
        list = [...list, item]
    }
    setTodos(list);
    list = JSON.stringify(list);
    localStorage.setItem('todos',list);
    setTask('')
  };

  const deleteTask = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  const toggleComplete = (index) => {
    const updated = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  const startEditing = (index) => {
    setTask(todos[index].text);
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h2>Todo App</h2>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>{isEditing ? 'Update' : 'Add'}</button>

      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: '10px 0' }}>
            <span
              onClick={() => toggleComplete(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {todo.title}
            </span>
            <button onClick={() => deleteTask(todo.id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
            <button onClick={() => startEditing(todo.id)} style={{ marginLeft: '5px' }}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
