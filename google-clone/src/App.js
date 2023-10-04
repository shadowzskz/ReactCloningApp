import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNode from './CreateNode';
import Note from './Note';

const App = () => {

const [addItem, setAddItem] = useState([]);

  const addNote = (note, setNote) => {
    console.log(note);
    setAddItem((preval) => {
      return [
        ...preval,
        note,
      ]
    });
  };

    const onDelete = (id) => {
      setAddItem((preVal) => 
        preVal.filter((cure, indx) => {
          return indx !==id;
        })
      )
    }

return (
  <>
    <Header />
    <CreateNode 
      passNote = {addNote}
    />
    {addItem.map((val, index) => {
        return <Note 
            key =  {index}
            id = {index}
            title = {val.title}
            content = {val.content}
            deleteItem = {onDelete}
        />
    })}
    <Footer />
  
  </>
)
};

export default App;
