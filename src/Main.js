const Main = ({isCheck, changeCheckbox, index, text, pancel, editTask, item}) => {
  return(
    <div className="main-container">
    <div className="left-block">
      <input type="checkbox" checked={isCheck} onChange={() => changeCheckbox(item)}/>
      <span className={isCheck ? 'throught task': 'task'}>{text}</span>
    </div>
    <span>
      <img 
        src={pancel}
        className="pancel"
        alt="pancel"
        onClick={() => editTask(index)} 
      />
    </span>
  </div>
  )
}

export default Main;