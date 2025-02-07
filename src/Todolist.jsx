import * as React from 'react';
import List from '@mui/material/List';
import { useState } from 'react';
import Todoitem from './Todoitem';
import TodoForm from './TodoForm';

const initialTodos = [
    { id: 1, text: "walk the dog", completed: false },
    { id: 2, text: "walk the cat", completed: false },
    { id: 3, text: "walk the fish", completed: true },
    { id: 4, text: "walk the chickens", completed: false }
]


export default function TodoList() {
    const [Todos, setTodos] = useState(initialTodos)
    const removeTodo = (id) => {
        setTodos((prevTodo) => {
            return prevTodo.filter((t) => t.id !== id)
        })
    }
    const toggleTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo
                }
            })
        })
    }

    const addTodo = (text) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { text: text, id: 8, completed: false }]
        })
    }

    return (
        <List sx={{ width: '100%', maxWidth: 300, bgcolor: 'Background.paper' }} >
            {Todos.map((todo) => (
                <Todoitem todo={todo} key={todo.id} removeTodo={() => removeTodo(todo.id)} toggleTodo={() => toggleTodo(todo.id)} />
            ))}

            <TodoForm addTodo={addTodo} />
        </List>
    )
}






// export default function CheckboxList() {
//     const [checked, setChecked] = React.useState([0]);

//     const handleToggle = (value) => () => {
//         const currentIndex = checked.indexOf(value);
//         const newChecked = [...checked];

//         if (currentIndex === -1) {
//             newChecked.push(value);
//         } else {
//             newChecked.splice(currentIndex, 1);
//         }

//         setChecked(newChecked);
//     };

//     return (
//         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//             {[0, 1, 2, 3].map((value) => {

//             })}
//         </List>
//     );
// }