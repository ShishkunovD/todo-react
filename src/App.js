import './App.css';
import React, { useEffect, useState } from 'react';
import Task from './Task';
import axios from 'axios';

const App = () => {
  const [allTask, setAllTask] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/allTasks').then(res => {
      res.data.data.sort((a, b) => a.isCheck > b.isCheck ? 1 : a.isCheck < b.isCheck ? -1 : 0);
      setAllTask(res.data.data);
    });
  }, [])

  const addButton = async () => {
    await axios.post('http://localhost:8000/createTask', {
      text: input,
      isCheck: false
    }).then(res => {
      setInput('');
      allTask.push(res.data.data);
      setAllTask([...allTask]);
    });
  }

  const changeCheckbox = async (item) => {
    await axios.patch(`http://localhost:8000/updateTask?id=${item._id}`, {
      isCheck: !item.isCheck
    }).then(res => {
      res.data.data.sort((a, b) => a.isCheck > b.isCheck ? 1 : a.isCheck < b.isCheck ? -1 : 0);
      setAllTask(res.data.data);
    });
  }

  const deleteTask = async (item) => {
    await axios.delete(`http://localhost:8000/deleteTask?id=${item._id}`).then(res => {
      setAllTask(res.data.data);
    });
  }

  const saveEditing = async (value, index, item) => {
    await axios.patch(`http://localhost:8000/updateTask?id=${item._id}`, {
      text: value
    }).then(res => {
      setAllTask(res.data.data);
    });
  }
  
   return (
    <div className="container">
      <div className="add-task">
        <input className="input-task" value={input}  onChange={(e) => setInput(e.target.value)} />
        <button className="btn-task" onClick={() => addButton()}>Добавить</button>
      </div>
      {allTask.map((item, index) => <Task 
        key={index} 
        index={index} 
        item={item} 
        deleteTask={deleteTask} 
        changeCheckbox={changeCheckbox} 
        saveEditing={saveEditing}/>
      )
      }
    </div>
  );
}

export default App;
