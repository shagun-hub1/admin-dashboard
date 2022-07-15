import React from 'react'
import {MdOutlineCancel} from 'react-icons/md'
import {useStateContext} from '../contexts/contextProvider'
import { cartData } from '../data/dummy'

const Cart = () => {
  const {currentColor,handleClose}=useStateContext()

  var total=0
  cartData.map((item,index)=>{
    total=total+item.quantity*item.price
  })
  console.log(currentColor)
  return (
    <div className=' bg-half-transparent w-screen fixed z-50 top-0 right-0'>
      <div className='float-right w-[400px] bg-white h-screen dark:bg-[#484B52] dark:text-gray-200 overflow-scroll'>
          <div className='  p-4 flex justify-between items-center ml-7 '>
            <p className='font-semibold text-xl'>Shopping Cart</p>
            <button
            type='button'
            style={{color:currentColor}}
            className='text-2xl hover:drop-shadow-xl hover:bg-light-gray p-2 rounded-full'
            onClick={handleClose}
            >
            <MdOutlineCancel/>
            </button>
          </div>

          <div className=' flex-col items-center gap-20  ml-7'>
            {cartData.map((item,index)=>(
              <div className='flex gap-5 items-center  border-b-1 border-slate-300 p-6 ' key={index}>
                <div>
                  <img 
                  src={item.image} 
                  alt="product" 
                  className='w-20 h-20 rounded-xl'
                  />
                </div>
                <div>
                  <p className='text-lg font-medium '>{item.name}</p>
                  <p className='text-slate-700 font-medium text-sm mt-1 dark:text-gray-300'>{item.category}</p>
                  <div className='flex items-center gap-5 mt-5'>
                    <p className='font-bold text-lg'>${item.price}</p>
                    <div className='flex border-1 border-slate-500 items-center text-lg font-medium '>
                      <button className='text-red-500  border-r-1 border-slate-500 px-2 text-2xl'>-</button>
                      <span
                      
                      className='px-2 dark:text-gray-200'>{item.quantity}</span>
                      <button className='border-l-1 border-slate-500 text-green-500 px-2 text-2xl'>+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
            
            <div className='ml-7 p-4 flex justify-between text-xl border-b-1 border-slate-300'>
                <p className='text-slate-600  dark:text-gray-300'>Total</p>
                <p className='font-bold'>${total}</p>
            </div>
      </div>
    </div>
  )
}

export default Cart