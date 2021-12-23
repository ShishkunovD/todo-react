import React, { useState } from 'react';
import Edit from './Edit';
import Main from './Main';
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

      {changeState && 
        <Edit 
          cancelEditing={cancelEditing}
          changeInput={changeInput}
          saveEditing={saveEditing}
          renderSave={renderSave}
          editInput={editInput} 
          index={index}
        />
      }

      {!changeState && 
        <Main 
          isCheck={isCheck}
          changeCheckbox={changeCheckbox}
          index={index}
          task={task}
          pancel={pancel}
          editTask={editTask}
        />
      }

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
