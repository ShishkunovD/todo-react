import React, { useState } from 'react';

const Tasks = ({task, isCheck}) => {
  const [checkBox, setCheckBox] = useState(isCheck);

  const changeCheck = () => {
    setCheckBox(!checkBox);
  }

  return(
    <div className="task-container">
      <input type='checkbox' defaultChecked={isCheck} onChange={() => changeCheck()} /> 
      { checkBox ?
        <div className="throught">{task}</div> :
        <div>{task}</div>
      }
    </div>
  )
}

export default Tasks;