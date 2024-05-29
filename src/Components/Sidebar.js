import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
//components
import CartItem from '../Components/CartItem'
//sidebar context
import { SidebarContext } from '../contexts/SidebarContext'
//cart context
import { CartContext } from '../contexts/CartContext'

function Sidebar() {
  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart, clearCart, total } = useContext(CartContext);
  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0  h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Cart (0)</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div>
        {cart.map(item => {
          return <CartItem item={item} key={item.id} />
        })}
      </div>
      <div className=' flex flex-col gap-y-3 py-4 mt-4'>
        <div className=' flex w-full items-center justify-between'>
          <div className='uppercase font-semibold'>
            <div><span>Total:</span> $ {total}</div>
          </div>
          {/* Clear cart */}
          <div onClick={() => clearCart()} className='cursor-pointer py-4 bg-rose-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
