import { Link } from "react-router-dom";

const Edit = ({cancelEditing, changeInput, saveEditing, renderSave, editInput, index, item}) => {
  return (
  <div className="edit-conatiner" >
    <Link to="/main">
      <button onClick={() => cancelEditing()} className="cancelButton">Отмена</button>
    </Link>
    <input onChange={(e) => changeInput(e)} value={editInput} className="inputEditing"/>
    <Link to="/main">
      <button onClick={() => {saveEditing(editInput, index, item); renderSave()}} className="btnSave">Сохранить</button>
    </Link>
  </div>
  )
}

export default Edit;