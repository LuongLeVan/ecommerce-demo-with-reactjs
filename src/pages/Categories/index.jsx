import React from 'react'
import { useContext } from 'react'
import { CartContext } from 'src/Contexts/CartContext'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import './Categories.scss'

const Categories = () => {
  const { cart, isDarkMode, setIsDarkMode } = useContext(CartContext)

  return (
    <div className={isDarkMode ? 'dark' : ''} style={{marginTop :100}}>
      <Header cart={cart} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <div className='container'>Update....</div>
      <Footer/>
    </div>
  )
}

export default Categories