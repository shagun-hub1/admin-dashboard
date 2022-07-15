import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { useStateContext } from '../contexts/contextProvider'
import avatar from '../data/avatar.jpg'
import { userProfileData
 } from '../data/dummy'
import Button from './Button'

const UserProfile = () => {
  const {handleClose,currentColor} =useStateContext()
  return (
    <div className='w-[400px] bg-white dark:bg-secondary-dark-bg absolute top-20 right-0 md:right-36 p-4 rounded-xl z-50'>
      <div className='flex justify-between '>
        <p>
          <span className='font-bold text-xl mr-5'>Profile</span>
  
        </p>
        <button 
        className='text-2xl dark:text-gray-300 hover:drop-shadow-xl p-2 rounded-full text-gray-500 ml-7 hover:bg-light-gray'
        onClick={handleClose}
        >
          <MdOutlineCancel/>
        </button>
      </div>

      <div className='flex gap-5 ml-7 items-center border-b-1 border-slate-400 py-4'>
        <div>
          <img 
          src={avatar} 
          alt="admin"
          className='w-24 h-24 rounded-full'
          />
        </div>
        <div>
          <p className='font-bold text-2xl'>Admin admin</p>
          <p className='text-gray-400'>Administrator</p>
          <p className='text-lg text-gray-400 font-bold'>info@gmail.com</p>
        </div>
      </div>  

      <div className='ml-7'>
          {userProfileData.map((item,index)=>(
            <div className='flex items-center gap-5 border-b-1 border-slate-400 py-3 hover:bg-light-gray cursor-pointer' key={index}>
              <button 
              type='button'
              className={` p-3 text-xl font-bold rounded-full`}
              style={{backgroundColor:item.iconBg,color:item.iconColor}}
              >
                {item.icon}
              </button>
              <div>
                <p className='font-bold'>{item.title}</p>
                <p className='text-gray-500'>{item.desc}</p>
              </div>
            </div>
          ))}

      </div>
      <div className='flex justify-center items-center mt-4'>

      <Button
      text='Log Out'
      bgColor={currentColor}
      color='white'
      size='md'
      borderRadius='10px'
      />
      </div>
    </div>
  )
}

export default UserProfile