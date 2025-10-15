import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Login from './Components/Login'
import {Routes, Route} from "react-router-dom"
import Home from './Components/Home'
import Header from './Components/Header'
import Dashboard from './Components/Dashboard'
import Error from './Components/Error'


function App() {

  return (
    <div>
      <div>hello</div>
      <Header></Header>
      <Routes>
        <Route path= '/' element = {<Home/>}/>
        <Route path= '/login' element = {<Login/>}/>
        <Route path= '/Dashboard' element = {<Dashboard/>}/>
        <Route path= '*' element = {<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
