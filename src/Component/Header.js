import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className='container flex flex-row justify-around py-4 mx-auto text-xl h-16 '>
        <div className='text-2xl text-sky-500 font-bold  '> Dib-Blog</div>
        <div className='flex flex-row px-4 py-1 '>
          <Link to="/" className='px-4 font-medium text-sky-800 hover:text-sky-500'> Home</Link>
          <Link to="/Create" className='px-4 font-medium text-sky-800 hover:text-sky-500'> ajouter</Link>
          <Link to="/About" className='px-4 font-medium text-sky-800 hover:text-sky-500'> About</Link>
        </div>
    </div>
  )
}
