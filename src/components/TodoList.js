import { Paper, List, Divider} from "@mui/material"
import React from "react"
import Todo from "./Todo"

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo}) => {
    if(todos.length)
    return (
        <Paper>
            <List>
                {todos.map((todo, i) => (
                <React.Fragment key={i}>
                            <Todo 
                                {...todo}
                                task={todo.task} 
                                key={todo.id} 
                                completed={todo.completed} 
                                removeTodo={removeTodo}
                                toggleTodo={toggleTodo}
                                editTodo={editTodo}
                            />
                            {i < todos.length -1 && <Divider/>}
                </React.Fragment>
                ))}
            </List>
        </Paper>
    );;
    return null;
}

export default TodoList
