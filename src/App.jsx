import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar';
import { All } from './components/All'
import { CSS } from './components/css'
import { HTML } from './components/Html'
import {Javascript} from './components/Javascript'

function App() {
 
 
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<All/>}></Route>
        <Route path="/html" element={<HTML />}></Route>
        <Route path='/css' element={<CSS />}></Route>
        <Route path="/javascript" element={<Javascript />}></Route>
      </Routes>
    </div>
  )
}


export default App
 