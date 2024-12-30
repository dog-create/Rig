import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path='/*' element={<MainLayout />} />
        </Routes>
        </BrowserRouter>
    )
  }
}
