import React, { useState } from 'react';


function Tasks({task, isCheck}) {
  const [checkBox, setCheckBox] = useState(isCheck);

  const changeCheck = () => {
    setCheckBox(!checkBox);
  }

  return(
    <div className="task-container">
      <input type='checkbox'  defaultChecked={isCheck} onChange={() => changeCheck()} /> 
      { checkBox ?
        <span  className = "throught" >{task}</span> :
        <span>{task}</span>
      }
      <div >
        <img />
      </div>
    </div>
  )
}

export default Tasks;