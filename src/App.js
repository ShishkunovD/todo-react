import './App.css';
import React, { useState } from 'react';
import Task from './Task';

const App = () => {
  const [input, setInput] = useState('');
  const [allTask, setAllTask] = useState([]);

  const changeInput = (e) => {
    setInput(e.target.value);
  }

  const addButton = () => {
    const newTask = {
      task: input,
      isCheck: false
    };
    allTask.push(newTask);
    setAllTask([...allTask]);
    setInput('');
  }

  const changeCheckbox = (id) => {
    allTask[id].isCheck = !allTask[id].isCheck;
    sortAllTask();
    setAllTask([...allTask]);
  }

  const sortAllTask = () => allTask.sort((a, b) => a.isCheck > b.isCheck ? 1 : a.isCheck < b.isCheck ? -1 : 0);

  const deleteTask = (index) => {
    allTask.splice(index, 1);
    setAllTask([...allTask]);
  }

  const saveEditing = (value, index) => {
    allTask[index].task = value;
    setAllTask([...allTask]);
  }
  
  return (
    <div className="container">
      <div className="add-task">
        <input className="input-task" onChange={(e) => changeInput(e)} value={input} />
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
