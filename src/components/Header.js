import React from 'react'

const Header = () => {
  return (
    <>
      <header className='flex items-center justify-between p-4 border-b border-gray-600'>
        <h2 className='text-zinc-700 font-bold text-2xl'>SCANDIWEB</h2>
        <div className='space-x-4'>
            <button className='bg-black text-white font-semibold text-lh px-4 py-2 rounded-xl'>Add product</button>
            <button className='bg-black text-white font-semibold text-lh px-4 py-2 rounded-xl'>DELETE</button>
        </div>
      </header>
    </>
  )
}

export default Header