import { Link } from "react-router-dom";

const Main = ({isCheck, changeCheckbox, index, text, pancel, editTask, item, goToTask}) => {
  return(
    <div className="main-container">
    <div className="left-block">
      <input type="checkbox" checked={isCheck} onChange={() => changeCheckbox(item)}/>
      <span className={isCheck ? 'throught task': 'task'}>{text}</span>
    </div>
    <span>
      <Link to="/edit/:id">
        <img 
          src={pancel}
          className="pancel"
          alt="pancel"
          onClick={() => {editTask(index); goToTask(item._id)}} 
        />
      </Link>
    </span>
  </div>
  )
}

export default Main;