import React, { useState } from 'react';
import basket from './basket.svg';
import pancel from './pancel.png';

const Task = ({item, changeCheckbox, index, deleteTask, saveEditing}) => {
  const { task, isCheck } = item;
  const [changeState, setChangeState] = useState(false);
  const [editInput, setEditInput] = useState(task);

  const changeInput = (e) => {
    setEditInput(e.target.value);
  }

  const editTask = () => {
    setChangeState(!changeState);
  }

  const cancelEditing = () => {
    setChangeState(!changeState);
  }

  const renderSave = () => {
    saveEditing(editInput, index);
    setChangeState(!changeState);
  }
  
  return (
    <div className="task-container">
      <div>
        {changeState && 
        <div className="edit-conatiner" >
          <button onClick={() => cancelEditing()}>Отмена</button>
          <input onChange={(e) => changeInput(e)} value={editInput} className="inputEditing"/>
          <button onClick={() => {saveEditing(editInput, index); renderSave()}}>Сохранить</button>
        </div>}
      </div>

      <div className="wrapper">
        {!changeState && 
        <div className="main-container">
          <div className="left-block">
            <input type="checkbox" checked={isCheck} onChange={() => changeCheckbox(index)}/>
            <span className={isCheck ? 'throught task': 'task'}>{task}</span>
          </div>
          <span>
            <img 
              src={pancel}
              className="pancel"
              alt="pancel"
              onClick={() => editTask(index)} 
            />
          </span>
        </div>}
      </div>

      <span>
        <img
          src={basket}
          className="basket"
          alt="basket"
          onClick={ () => deleteTask(index) }
        />
      </span>
    </div>
  );
}

export default Task;
