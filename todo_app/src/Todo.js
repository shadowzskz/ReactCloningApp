import React, { useState } from 'react';
import { List, ListItem, ListItemText, Button, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Todo.css';
import db from './firebase';


const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColot: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
    },
}))

const Todo = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();
    const updateTodo = () => {
        //update the todo with the new text
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true })
        setInput('');
        setOpen(false);
    }
    
    return (
        <>
        <Modal
            open={open}
            onClose={e => setOpen(false)}
            >
            <div className={classes.paper}>
                <h1>I am model</h1>
                <input placeholder={props.todo.todo} value={input} onChange={e => setInput(e.target.value)}/>
                <Button onClick={updateTodo}>Update</Button>
            </div>
        </Modal>

        <List className="Todo_list">
            <ListItem>               
                <ListItemText primary={props.todo.todo} secondary="To do" />
            </ListItem>
            <button onClick={e => setOpen(true)}>Edit</button>
            <Button onClick={event => db.collection('todos').doc(props.todo.id).delete() }>Delete</Button>
        </List>
        
        </>
    )
}

export default Todo;