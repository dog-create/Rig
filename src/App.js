import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Routes>
        <Route  path='/Login' element={< Login/>}/>
        <Route  path='/Signup' element={< Signup/>}/>
        <Route  path='/Login' element={< ac/>}/>
        </Routes>
        </BrowserRouter>
    )
  }
}
