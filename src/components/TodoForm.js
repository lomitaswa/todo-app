import { Paper, TextField } from '@mui/material';
import React from 'react';
import useInputState from '../hooks/useInputState';

function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = useInputState("");
    // console.log('at TodoForm ', value)
    
    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem"}} >
            <form 
                onSubmit={ (e) => {
                    // console.log('At todo from',value);
                    e.preventDefault();
                    // console.log('At todo from after prevent',e);
                    addTodo(value);
                    reset();
                }} 
            >
                <TextField 
                    value={value} 
                    onChange={handleChange}
                    margin='normal'
                    label='Add todo'
                    fullWidth
                />
            </form>
        </Paper>
    )
}

export default TodoForm
