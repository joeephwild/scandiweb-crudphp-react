import React from 'react'

const Header = ({ leftBtn, rightBtn}) => {
  return (
    <>
      <header className='flex items-center justify-between p-4 border-b border-gray-600'>
        <h2 className='text-zinc-700 font-bold text-2xl'>SCANDIWEB</h2>
        <div className='space-x-4'>
            { leftBtn() }
            { rightBtn()}
        </div>
      </header>
    </>
  )
}

export default Header