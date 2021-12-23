const Edit = ({cancelEditing, changeInput, saveEditing, renderSave, editInput, index}) => {
  return (
    <div className="edit-conatiner" >
    <button onClick={() => cancelEditing()}>Отмена</button>
    <input onChange={(e) => changeInput(e)} value={editInput} className="inputEditing"/>
    <button onClick={() => {saveEditing(editInput, index); renderSave()}}>Сохранить</button>
  </div>
  )
}

export default Edit;