import React, { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import firebase from 'firebase';

import './App.css';
import Todo from './Todo';
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  //When the app loads need to listen the database and fetch the todos as they get removed or add
  //useffect loads 1st as the app loads
  /**
   * useEffect(function, dependencies)  =====> code will fire as the app loads
  */

  useEffect(() => {
    //this code here fires as the app loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => { 
      setTodos(snapshot.docs.map(doc => 
      ({id: doc.id, todo:doc.data().todo, timestamp:doc.timestamp})
        ))
    })
  },[]);

  const addToDo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  };

  return (
    <div className="App">
      <h1>Hello World 🚀</h1>
      <FormControl>
        <InputLabel>Write a Todo For Jamming</InputLabel>
        <Input type="text" value={input} placeholder="Add to Do" onChange={event => setInput(event.target.value)} required/>
        </FormControl> 
        <Button disabled={!input} onClick={addToDo} variant="contained" color="primary">Add Todo</Button>  
        <ul>
            {todos.map((todo, key) => (
                <Todo todo={todo} id={key}/>
              )
            )}
        </ul>
    </div>
  );
}

export default App;
