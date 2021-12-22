import './App.css';
import React, { useState } from 'react';
import basket from './basket.svg';
import pancel from './pancel.png';

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

  const deleteTask = (index) => {
    allTask.splice(index, 1);
    setAllTask([...allTask]);
  }

  const editTask = (index) => {
    const mainContainers = document.querySelectorAll('.main-container');
    const editContainers = document.querySelectorAll('.edit-container');
    for(let i = 0; i < mainContainers.length; i++) {
      if(i === index) {
        mainContainers[i].classList.add('hide');
      };
    }
    for(let k = 0; k < editContainers.length; k++) {
      if(k === index) {
        editContainers[k].classList.remove('hide');
      }
    }
  }

  const cancelEditing = (index) => {
    const mainContainers = document.querySelectorAll('.main-container');
    const editContainers = document.querySelectorAll('.edit-container');
    for(let i = 0; i < mainContainers.length; i++) {
      if(i === index) {
        mainContainers[i].classList.remove('hide');
      };
    }
    for(let k = 0; k < editContainers.length; k++) {
      if(k === index) {
        editContainers[k].classList.add('hide');
      }
    }
  }

  const saveEditing = (id) => {
    const inputEditings = document.querySelectorAll('.inputEditing');
    const tasks = document.querySelectorAll('.task');
    let inputEdit = inputEditings[0];
    inputEditings.forEach((item, index) => {
      if(index === id) {
        inputEdit = item;
      }
    });
    let task = tasks[0];
    tasks.forEach((item, index) => {
      if(index === id) {
        task = item;
      }
    });
    task.innerText = inputEdit.value;
    setAllTask([...allTask]);
    cancelEditing(id);
  }
  
  return (
    <div className="container">
      <div className="add-task">
        <input className="input-task" onChange={(e) => changeInput(e)} value={input} />
        <button className="btn-task" onClick={() => addButton()}>Добавить</button>
      </div>
      {allTask.map((item, index) => <div key={index} className="task-container">
      <div className="edit-container hide">
        <button onClick={() => cancelEditing(index)}>Отмена</button>
        <input defaultValue={item.task} className="inputEditing"/>
        <button onClick={() => saveEditing(index)}>Сохранить</button>
      </div>
      <div className="main-container">
        <div className="left-block">
          <input type="checkbox"  defaultChecked={item.isCheck} onChange={() => changeCheckbox(index)}/>
          <span className={item.isCheck ? 'throught task': 'task'}>{item.task}</span>
        </div>
        <span><img src={pancel} className="pancel" alt="pancel" onClick={() => editTask(index)}/></span>
      </div>
      <span>
        <img
        src={basket}
        className="basket"
        alt="basket"
        onClick={ () => deleteTask(index) }
        />
        </span>
      </div>)
      }
    </div>
  );
}

export default App;
