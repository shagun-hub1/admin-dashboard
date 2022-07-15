import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/contextProvider';

const Navbar = () => {

  const NavButton=({title,func,color,icon,dotColor})=>(
    <TooltipComponent content={title} position="BottomCenter">
      <button
      type="button"
      style={{color}}
      className='relative p-3 hover:bg-light-gray text-xl rounded-full '
      onClick={func}
      >
       <span 
       style={{backgroundColor:dotColor}}
       className='absolute rounded-full h-2 w-2 right-2 top-2'
       />
       {icon}
      </button>
    </TooltipComponent>
  )

  const {activeMenu,setactiveMenu,isClicked,setisClicked,handleClick,screenSize,setscreenSize,currentColor}=useStateContext()

  useEffect(()=>{

    const handleResize=()=>setscreenSize(window.innerWidth)

    window.addEventListener('resize',handleResize)

    handleResize()

    return ()=> window.removeEventListener('resize',handleResize)
  },[])

  useEffect(()=>{
    if(screenSize<=900){
      setactiveMenu(false)
    }else{
      setactiveMenu(true)
    }
  },[screenSize])

  return (
    <div className='flex justify-between relative p-2 md:mx-6'>
      <NavButton 
      title="Menu" 
      func={()=>setactiveMenu((prev)=>!prev)} 
      color={currentColor} 
      icon={<AiOutlineMenu/>}
      />

      <div className='flex'>
        <NavButton 
        title="Cart"
        func={()=>handleClick('cart')}
        color={currentColor}
        icon={<FiShoppingCart/>}
        />
        <NavButton 
        title="Chat"
        func={()=>handleClick('chat')}
        color={currentColor}
        dotColor="#03C9D7"
        icon={<BsChatLeft/>}
        />
        <NavButton 
        title="Notifications"
        func={()=>handleClick('notification')}
        color={currentColor}
        dotColor="#03C9D7"
        icon={<RiNotification3Line/>}
        />
        <TooltipComponent
        content="profile"
        position='BottomCenter'
        >
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={()=>handleClick('userProfile')}>
            <img 
            src={avatar} 
            alt="user" 
            className='w-8 h-8 rounded-full' 
            />
            <p>
              <span className='text-gray-400 text-[14px]'>Hi,</span>
              <span className='text-gray-400 font-bold ml-1 text-[14px]'>Admin</span>
            </p>
            <MdKeyboardArrowDown
            className='text-gray-400 text-[14px]'
            />
          </div>
        </TooltipComponent>

        
      </div>
    </div>
  )
}

export default Navbar