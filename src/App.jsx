import React from 'react'
import 'boxicons'
import './App.css'
import Navbar from './componenets/navbar'
import { Route, Routes } from 'react-router-dom'
import Header from './pages/Header'
import Literatures from './pages/Litera'
import Publics from './pages/Publics'
import SendQuestion from './pages/SendQuestion'

export default function App() {

  
  return (
    <div className='bg-white text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/literature' element={<Literatures/>}/>
        <Route path='/publics' element={<Publics/>}/>
        <Route path='/send-question' element={<SendQuestion/>}/>
      </Routes>
    </div>
  )
}
