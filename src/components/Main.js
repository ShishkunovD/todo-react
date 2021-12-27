import { Link } from "react-router-dom";
import basket from '../source/images/basket.svg';
import pancel from '../source/images/pancel.png';

const Main = ({changeCheckbox, index, item, deleteTask, goToTask}) => {
  const { text, isCheck } = item;

  return(
    <div className="main-container">
      <div className="left-block">
        <input 
          type="checkbox"
          checked={isCheck}
          onChange={() => changeCheckbox(item)}
        />
        <span className={isCheck ? 'throught task': 'task'}>{text}</span>
      </div>
      <span className={isCheck ? 'hide' : 'pancel-span'}>
          <img 
            src={pancel}
            className="pancel"
            alt="pancel"
            onClick={() => goToTask(index)} 
          />
      </span>
      <span>
        <img
          src={basket}
          className="basket"
          alt="basket"
          onClick={ () => deleteTask(item) }
        />
      </span>
    </div>
  )
}

export default Main;