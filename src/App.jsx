import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CssBaseline from "@mui/material/CssBaseline"
import './App.css'
import TodoList from './Todolist'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Navbar />
      <TodoList />
      <CssBaseline />
      
    </>
  )
}

export default App
