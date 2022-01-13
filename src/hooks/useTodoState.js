import { v4 as uuid } from 'uuid';
import useLocalStorageState from './useLocalStorageState';

const useTodoState = initialTodos => {
    const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

    return {
        todos,
        addTodo:  newTodoText => {
            setTodos([...todos, {id:uuid(), task: newTodoText, completed: false}])
            
        },
        removeTodo: todoId => {
            const updatedTodo = todos.filter(todo => todo.id !== todoId); 
            setTodos(updatedTodo);
        },
        toggleTodo: todoId => {
            const updatedTodos = todos.map( todo => 
                todo.id === todoId ? {...todo, completed: !todo.completed} : todo
            );
            setTodos(updatedTodos);
        },
        editTodo: (todoId, newTask) => {
            const updatedTodos = todos.map( todo => 
                todo.id === todoId ? {...todo, task: newTask} : todo
            );
            setTodos(updatedTodos);
        }
    }
}

export default useTodoState;
