import React, { useState } from 'react';
import './index.css';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';

const CreateNode = (props) => {

const [expand, setExpand] = useState(false);
const [note, setNote] = useState({
    title: '',
    content: '',
});

const inputEvent = (e) => {
    const {name, value} = e.target;
    setNote((preVal) => {
        return {
            ...preVal,
            [name]: value,
        };
    });
    console.log(note)
};

const addEvent = () => {
    props.passNote(note, setNote);
    //console.log(note);
    setNote({
        title: '',
        content: '',
    })
};

const expandIt = () => {
    setExpand(true);
}

const backIt = () => {
    setExpand(false);
}

return (
  <>
  <div >
      <form>
        
          <input 
            type = 'text'
            placeholder = 'Title'
            onChange = {inputEvent}
            value = {note.title}
            name = 'title'
            autoComplete = 'off'
            onClick = {expandIt} 
            /> 
           {expand? 
             <textarea 
            rows = ''
            column = ''
            placeholder = "Text"
            onChange = {inputEvent}
            name = 'content'
            value = {note.content}
            onDoubleClick = {backIt}           
            />: null}
            {expand ?
        <Button onClick = {addEvent} > <AddBoxIcon />  </Button> : null}
      </form>
  </div>
    
  </>
)
};

export default CreateNode;
