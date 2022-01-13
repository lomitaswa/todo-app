import { CheckBox, DeleteOutline, EditOutlined } from "@mui/icons-material"
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material"
import useToggleState from "../hooks/useToggleState"
import EditTodoForm from "./EditTodoForm";


const Todo = ({ task, completed, removeTodo, id, toggleTodo, editTodo }) => {
    const [isEditing, toggle] = useToggleState(false);
    
    return (
        <ListItem>
        {isEditing ? (<EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle} />): (
            <>
            <CheckBox 
                tabIndex={-1} 
                checked={completed} 
                onClick={() => toggleTodo(id)} 
            />
            <ListItemText 
                style={{textDecoration: completed ? "line-through" : "none" }} >
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={() => removeTodo(id)} >
                    <DeleteOutline />
                </IconButton>
                <IconButton aria-label="Edit" onClick={() => toggle(id)} >
                    <EditOutlined />
                </IconButton>
            </ListItemSecondaryAction>
            </>
            
        )}
            
        </ListItem>
    )
}

export default Todo
