import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Addproduct = () => {
  const [dvdSelected, setDvdSelected] = useState(false);
  const [furnitureSelected, setFurnitureSelected] = useState(false)
  const [bookSelected, setBookSelected] = useState(false)
  const [formData, setFormData] = useState(Object.freeze({
    sku : '',
    name : '',
    price : '',
    type : '',
    height : '',
    width : '',
    length : '',
    size : '',
    weight : '',
  }));

  const formRef = useRef(null)

const handleType = ( event ) => {
  setFormData({
    ...formData ,
    height: '',
    width: '',
    length: '',
    size: '',
    weight: '', 
    [event.target.name] : event.target.value.trim()
  })
  switch (event.target.value) {
    case "DVD" :
      setFurnitureSelected(false);
      setBookSelected(false);
      setDvdSelected(true);
      break
      case "Furniture" :
      setFurnitureSelected(true);
      setBookSelected(false);
      setDvdSelected(false);
      break
      case "Book" :
      setFurnitureSelected(false);
      setBookSelected(true);
      setDvdSelected(false);
      break
  }
}
 
const handleInputChanges = (e) => {
  setFormData({
    ...formData ,
    [e.target.name] : e.target.value.trim()
  })
}









  return (
    <div className='w-full mx-11 h-screen mt-10'>
      <form id='product_form'
      ref={formRef} className='space-y-6  justify-center items-center'>
        <div className="flex space-x-6">
          <label htmlFor='sku' >SKU :</label>
          <input onChange={handleInputChanges} id='sku' name='sku' type="text" className='w-2/4 h-9 pr-6 ring-0 focus:ring-0 border border-gray-500 focus:border-hidden'/>
        </div>
        <div className="flex space-x-6">
          <label htmlFor='name'>Name :</label>
          <input onChange={handleInputChanges} id='name' name='name' type="text" className='w-2/4 h-9 pr-6 ring-0 focus:ring-0 border border-gray-500 focus:border-hidden'/>
        </div>
        <div className="flex space-x-6">
          <label htmlFor='price'>Price :</label>
          <input onChange={handleInputChanges} id='price' name="price" type="text" className='w-2/4 h-9 pr-6 ring-0 focus:ring-0 border border-gray-500 focus:borde'/>
        </div>
           
           <div>
            <label htmlFor='type'>Type:</label>
            <select name='type' id='productType' onChange={handleType}>
              <option value="" hidden>Select product type</option>
              <option value="DVD" >DVD</option>
              <option value="Furniture" >Furniture</option>
              <option value="Book" >Book</option>
            </select>
           </div>
           { dvdSelected && 
           <>
           <div>
            
           </div>
           </>}
           { furnitureSelected && 
           <>
           <div>furr hello</div>
           </>}
           { bookSelected && 
           <>
           <div>hello</div>
           </>}
      </form>
    </div>
  )
}

export default Addproduct