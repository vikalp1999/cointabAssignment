import { useState } from 'react'

import './App.css'
import Login from "./pages/Login"
import { Box } from '@chakra-ui/react';

function App() {
  const [count, setCount] = useState(0)

  return (
   <Login/>
  )
}

export default App
