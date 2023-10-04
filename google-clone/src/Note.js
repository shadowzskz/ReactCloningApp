import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Note = (props) => {

const delEvent = () => {
  alert('del');
  props.deleteItem(props.id);
};

return (
  <>
    <div className="">
        <h1> {props.title} </h1>
        <br />
        <p> {props.content} </p>
        <br/>
        <button onClick = {delEvent}> <DeleteForeverIcon /> </button>
        
    </div>
  </>
)
};

export default Note;
