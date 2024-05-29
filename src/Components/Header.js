import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import {BsBag} from 'react-icons/bs'

function Header() {
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  return (
    <header className='bg-pink-200 flex flex-row items-center justify-between py-3 px-4'>
      <div>High Fashion</div>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'><BsBag className='text-2xl'/></div>
    </header>
  )
}

export default Header
