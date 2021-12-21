import './App.css';
import React, { useState } from 'react';
import Tasks from './Tasks';

function App() {
  const [input, setInput] = useState('');
  const [allTask, setAllTask] = useState([]);

  const changeInput = (event) => {
    setInput(event.target.value);
  }

  const addButton = () => {
    const newTask = {
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
      {allTask.length > 0 && allTask.map((item, index) => <Tasks  key={`Task-${index}`} task={item.task} isCheck={item.isCheck}/>)}
    </div>
  );
}

export default App;
