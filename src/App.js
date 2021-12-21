import './App.css';
import React, { useState } from 'react';

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
    setAllTask([...allTask]);
  }
  
  return (
    <div className="container">
      <div className="add-task">
        <input className="input-task" onChange={(e) => changeInput(e)} value={input} />
        <button className="btn-task" onClick={() => addButton()}>Добавить</button>
      </div>
      {allTask.map((item, index) => <div key={index}>
        <input type="checkbox" defaultChecked={item.isCheck} onChange={() => changeCheckbox(index)}/>
        <span className={item.isCheck ? 'throught': ''}>{item.task}</span>
      </div>)
      }
    </div>
  );
}

export default App;
