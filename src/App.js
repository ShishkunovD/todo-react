import './App.css';
import './App-media.css';
import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Tasks from './Tasks';
import Edit from './Edit';
import axios from 'axios';

const App = () => {
  const [allTask, setAllTask] = useState([]);
  const [input, setInput] = useState('');
  const [currentTask, setTask] = useState({});
  let history = useHistory();

  useEffect(() => {
    axios.get('http://localhost:8000/allTasks').then(res => {
      setAllTask(res.data.data);
    });
  }, [])

  const addButton = async () => {
    if ( !input.trim().length) {
      alert('Please, enter value.');
    } else {
      await axios.post('http://localhost:8000/createTask', {
        text: input.trim(),
        isCheck: false
      }).then(res => {
        setInput('');
        allTask.push(res.data.data);
        setAllTask([...allTask]);
      });
    }
  }

  const changeCheckbox = async (item) => {
    await axios.patch(`http://localhost:8000/updateTask?id=${item._id}`, {
      isCheck: !item.isCheck
    }).then(res => {
      setAllTask(res.data.data);
    });
  }

  const deleteTask = async (item) => {
    await axios.delete(`http://localhost:8000/deleteTask?id=${item._id}`).then(res => {
      setAllTask(res.data.data);
    });
  }

  const saveEditing = async (item, editInput) => {
    await axios.patch(`http://localhost:8000/updateTask?id=${item._id}`, {
      text: editInput
    }).then(res => {
      setAllTask(res.data.data);
    });
  }

  const goToTask = (index) => {
    setTask(allTask[index]);
    history.push(`/edit/:${allTask[index]._id}`)
  }
  

  allTask.sort((a, b) => a.isCheck > b.isCheck ? 1 : a.isCheck < b.isCheck ? -1 : 0);
   return (
    <>
      <h1>Todo list</h1>
      <div className="container">
        <div className="add-task">
          <input 
            className="input-task"
            value={input}
            placeholder='Введите значение..'
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn-task" onClick={() => addButton()}>Добавить</button>
        </div>
        <Switch>
          <Route path='/main'>
            <Tasks 
              allTask={allTask}
              deleteTask={deleteTask}
              changeCheckbox={changeCheckbox}
              goToTask={goToTask}
            />
          </Route>
          <Route path='/edit/:id'>
            <Edit
              currentTask={currentTask}
              saveEditing={saveEditing}
              deleteTask={deleteTask}
            />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
