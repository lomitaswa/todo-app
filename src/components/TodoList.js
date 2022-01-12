import { Paper, List, Divider, ListItem, ListItemText } from "@mui/material"
import Todo from "./Todo"

const TodoList = (props) => {
    return (
        <Paper>
            <List>
                {props.todos.map(todo => (
                <>
                    <ListItem>
                        <ListItemText>
                            <Todo task={todo.task} key={todo.id} completed={todo.completed} />
                        </ListItemText>
                    </ListItem>
                    <Divider />
                </>
            ))}
            </List>
        </Paper>

    )
}

export default TodoList
