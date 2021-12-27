import { Link } from "react-router-dom";
import { useState } from "react";
import basket from './basket.svg';

const Edit = ({currentTask, saveEditing, deleteTask}) => {
  const [editInput, setEditInput] = useState(currentTask.text);

  const changeInput = (e) => {
    setEditInput(e.target.value);
  }

  return (
    <div className="edit-conatiner" >
      <Link to="/main">
        <button  className="cancelButton">Отмена</button>
      </Link>
      <input 
        onChange={(e) => changeInput(e)}
        value={editInput}
        className="inputEditing"
      />
      <Link to="/main">
        <button
          onClick={() => saveEditing(currentTask, editInput)}
          className="btnSave">Сохранить
        </button>
      </Link>
      <span className='basket-span'>
        <img
          src={basket}
          className="basket"
          alt="basket"
          onClick={ () => deleteTask(currentTask) }
        />
      </span>
    </div>
  )
}

export default Edit;