const Edit = ({cancelEditing, changeInput, saveEditing, renderSave, editInput, index, item}) => {
  return (
    <div className="edit-conatiner" >
    <button onClick={() => cancelEditing()}>Отмена</button>
    <input onChange={(e) => changeInput(e)} value={editInput} className="inputEditing"/>
    <button onClick={() => {saveEditing(editInput, index, item); renderSave()}}>Сохранить</button>
  </div>
  )
}

export default Edit;