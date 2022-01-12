import { CheckBox, DeleteOutline, EditOutlined } from "@mui/icons-material"
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material"


const Todo = ({ task, completed }) => {
    return (
        <ListItem>
            <CheckBox tabIndex={-1} checked={completed} />
            <ListItemText style={{textDecoration: completed ? "line-through" : "none" }} >{task}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete" >
                    <DeleteOutline />
                </IconButton>
                <IconButton aria-label="Edit" >
                    <EditOutlined />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo
