import Main from './Main';

const Tasks = ({allTask, deleteTask, changeCheckbox, goToTask}) => {

  return(
      <>
    {allTask.map((item, index) => <Main
        key={index} 
        index={index} 
        item={item} 
        deleteTask={deleteTask} 
        changeCheckbox={changeCheckbox}
        goToTask={goToTask}
        />
      )
      } 
      </>
  );
}

export default Tasks;