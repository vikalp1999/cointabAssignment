import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
const AllRoute = () => {
  
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
    
        </Routes>
      )
 
}

export default AllRoute