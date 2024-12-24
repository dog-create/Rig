import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout';
export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />} />
        </Routes>
        </BrowserRouter>
    )
  }
}
