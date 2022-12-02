import React from 'react'
import { useContext } from 'react'
import { CartConntext } from 'src/Contexts/CartContext'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

const Categories = () => {
  const { cart } = useContext(CartConntext)

  return (
    <div className='wrapper' style={{marginTop :150}}>
      <Header cart={cart} />
      <div>Update....</div>
    <Footer/>
    </div>
  )
}

export default Categories