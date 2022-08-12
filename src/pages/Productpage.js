import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

import ProductSection from '../components/ProductSection'

const Productpage = () => {

  const Btn1 = () => (
    <Link to="/addproduct" >
      <button className='bg-black text-white font-semibold text-lh px-4 py-2 rounded-xl'>ADD</button>
    </Link>
  )

  const Btn2 = () => (
      <button className='bg-red-600 text-white font-semibold text-lh px-4 py-2 rounded-xl'>MASS DELETE</button>
  )
  return (
    <div>
        <Header leftBtn = {Btn1} rightBtn = {Btn2} />
        <ProductSection />
    </div>
  )
}

export default Productpage