import './App.css';
import React, { useState } from 'react';
import Tasks from './Tasks';

const App = () => {
  const [input, setInput] = useState('');
  const [allTask, setAllTask] = useState([]);
  let id = 0;

  const changeInput = (event) => {
    setInput(event.target.value);
  }

  const addButton = () => {
    const newTask = {
      ident: id++,
      task: input,
      isCheck: false
    };  
    allTask.push(newTask)
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
