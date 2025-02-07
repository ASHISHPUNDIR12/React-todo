import * as React from 'react';
import List from '@mui/material/List';
import Todoitem from './Todoitem';
import TodoForm from './TodoForm';

import { useState, useEffect } from 'react';
const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"))
    if (!data) return [];
    return data;
}

export default function TodoList() {
    const [Todos, setTodos] = useState(getInitialData)
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(Todos))
    }, [Todos])

    const remove = (id) => {
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
            return [...prevTodos, { text: text, id: crypto.randomUUID(), completed: false }]
        })
    }

    return (
        <List sx={{ width: '100%', maxWidth: 300, bgcolor: 'Background.paper' }} >
            {Todos.map((todo) => (
                <Todoitem todo={todo} key={todo.id} remove={() => remove(todo.id)} toggleTodo={() => toggleTodo(todo.id)} />
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