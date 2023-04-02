import { useState } from 'react'

import './App.css'
import Login from "./pages/Login"
import { Box } from '@chakra-ui/react';
import AllRoute from './component/AllRoute';

function App() {
  const [count, setCount] = useState(0)

  return (
   <AllRoute/>
  )
}

export default App
