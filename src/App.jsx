import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CssBaseline from "@mui/material/CssBaseline"
import './App.css'
import TodoList from './Todolist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoList />
      <CssBaseline />
      <h1>Todos</h1>
    </>
  )
}

export default App
