import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import {useStateContext} from '../contexts/contextProvider'
import { chatData } from '../data/dummy'
import Button from './Button'

const Chat = () => {
  const {handleClose,currentColor} =useStateContext()
  return (
    <div className='w-[400px] bg-white dark:bg-secondary-dark-bg absolute top-20 right-0 md:right-36 p-4 rounded-xl z-50'>
      <div className='flex justify-between '>
        <p>
          <span className='font-bold text-xl mr-5'>Messages</span>
          <span>5 New</span>
        </p>
        <button 
        className='text-2xl dark:text-gray-300 hover:drop-shadow-xl p-2 rounded-full text-gray-500 ml-7 hover:bg-light-gray'
        onClick={handleClose}
        >
          <MdOutlineCancel/>
        </button>
      </div>

      <div className=''>
        {chatData.map((item,index)=>(
          <div className='flex gap-5 p-4 border-b-1 border-slate-300 items-center' key={index}>
            <div>
              <img
              src={item.image}
              alt="user"
              className='w-10 h-10 rounded-full '
              />
            </div>
            <div>    
              <p className='text-lg font-medium'>{item.message}</p>
              <p className='text-slate-400 mt-2 font-medium'>{item.desc}</p>
              <p className='text-slate-400 text-sm'>{item.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-4 items-center'>
      <Button
      color='white'
      bgColor={currentColor}
      size='md'
      borderRadius='10px'
      text='See All Messages'
      />
    </div>
      </div>
  )
}

export default Chat