import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <div className='center'>
        <Header />
        <Main />
        <Footer />
    </div>
  )
}
