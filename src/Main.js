const Main = ({isCheck, changeCheckbox, index, task, pancel, editTask}) => {
  return(
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
  </div>
  )
}

export default Main;