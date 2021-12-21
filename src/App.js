import './App.css';
import React, { useState } from 'react';
import Tasks from './Tasks';

const App = () => {
  const [input, setInput] = useState('');
  const [allTask, setAllTask] = useState([]);

  const changeInput = (event) => {
    setInput(event.target.value);
  }

  const addButton = () => {
    let id = (new Date()).getTime().toString(36) + Math.random().toString(36).slice(2);
    const newTask = {
      ident: id,
      task: input,
      isCheck: false
    };  
    allTask.push(newTask);
    setAllTask([...allTask]);
    setInput('');
  }

  return (
    <div className="container">
      <div className="add-task">
        <input className="input-task" onChange={(e) => changeInput(e)} value={input} />
        <button className="btn-task" onClick={() => addButton()}>Добавить</button>
      </div>
      {allTask.map(item => <Tasks key={`Task-${item.ident}`} task={item.task} isCheck={item.isCheck}/>)}
    </div>
  );
}

export default App;
