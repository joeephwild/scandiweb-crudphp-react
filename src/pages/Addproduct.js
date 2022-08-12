import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
//import { useNavigate } from 'react-router-dom'
//import { Link } from 'react-router-dom'

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
      break;
      
      default: 
      setFurnitureSelected(false);
      setBookSelected(false);
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

const Btn2 = () => (
  <Link to="/" >
    <button className='bg-red-600 text-white font-semibold text-lh px-4 py-2 rounded-xl'>CANCEL</button>
  </Link>
)

const Btn1 = () => (
    <button className='bg-black text-white font-semibold text-lh px-4 py-2 rounded-xl'>SAVE</button>
)








  return (
    <>
    <Header leftBtn={Btn1} rightBtn={Btn2} />
    <div className='w-full h-screen mt-10'>
      <form id='product_form'
      ref={formRef} className='space-y-6 mx-11 justify-center items-center'>
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
           <div className="flex flex-col max-w-4xl justify-items-center border-gray-600 border-spacing-3 p-5 border-4">
             <div className="flex space-x-6">
              <label>Size(MB)</label>
              <input className='w-2/4 h-9 pr-6 ring-0 focus:ring-0 border border-gray-500 focus:border-hidden' type="text" name="height" id="height" onChange={handleInputChanges} />
              <div className="text-gray-600 text-sm font-bold">please, provide specify size</div>
             </div>
           </div>
           </>}
           { furnitureSelected && 
           <>
           <div className='space-y-6 justify-items-center max-w-4xl border-gray-600 p-5 border-spacing-3 border-4'>
             <div className="flex space-x-6">
              <label htmlFor='height'>Height(CM)</label>
                 <input className='w-2/4 h-9 pr-6 ring-0 focus:ring-0 border border-gray-500 focus:border-hidden' type="text" name="height" id="height" onChange={handleInputChanges} />
             </div>
             <div className="flex space-x-6">
              <label htmlFor='width'>Width(CM)</label>
                 <input className='w-2/4 h-9 pr-6 ring-0 focus:ring-0 border border-gray-500 focus:border-hidden' type="text" name="width" id="width" onChange={handleInputChanges} />
             </div>
             <div className="flex space-x-6">
              <label htmlFor='length'>Length(CM)</label>
                 <input className='w-2/4 h-9 pr-6 ring-0 focus:ring-0  border border-gray-500 focus:border-hidden' type="text" name="length" id="length" onChange={handleInputChanges} />
             </div>
             <div className="text-gray-600 text-sm font-bold">please, provide dimensions in HxWxL</div>
           </div>
           </>}
           { bookSelected && 
           <>
           <div className='flex flex-col max-w-4xl justify-items-center border-gray-600 border-spacing-3 border-4 p-5'>
           <div className="flex space-x-6">
              <label htmlFor='weight'>weight(CM)</label>
                 <input className='w-2/4 h-9 pr-6 ring-0 focus:ring-0 border border-gray-500 focus:border-hidden' type="text" name="weight" id="weight" onChange={handleInputChanges} />
             </div>
             <div className="text-gray-600 text-sm font-bold">Please, provide weight</div>
           </div>
           </>}
      </form>
    </div>
    </>
  )
}

export default Addproduct