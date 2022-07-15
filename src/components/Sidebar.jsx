import {SiShopware} from "react-icons/si"
import { Link,NavLink } from "react-router-dom"
import {MdOutlineCancel} from "react-icons/md"
import { TooltipComponent } from "@syncfusion/ej2-react-popups"

import {useStateContext} from '../contexts/contextProvider'
import {links} from '../data/dummy'

const Sidebar = () => {

  const {activeMenu,setactiveMenu,screenSize,currentColor}=useStateContext()

  const handleCloseSidebar=()=>{
    if(activeMenu && screenSize<=900){
      setactiveMenu(false)
    }
  }

  const normalLink=`capitalize flex gap-5 text-gray-700 dark:text-gray-200 dark:hover:text-black  items-center m-3  text-md p-3 rounded-lg hover:bg-light-gray`
  const activeLink=`capitalize flex gap-5 text-white items-center m-3  text-md p-3 rounded-lg  `

  
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
       {
        activeMenu && (
          <>
          <div className="flex justify-between items-center">
            <Link to='/' 
            className="flex items-center gap-3 font-extrabold tracking-tight mt-4 ml-3 text-xl dark:text-white text-slate-900"
            onClick={handleCloseSidebar}
            >
              <SiShopware/> 
              <span>Shoppy</span>
            </Link>
            <TooltipComponent content="Cancel" position="BottomCenter" >
            <button 
            className="text-xl hover:bg-light-gray p-3 block mt-4 rounded-full md:hidden"
            onClick={()=>setactiveMenu((prev)=>!prev)}
            >
              <MdOutlineCancel/> 
            </button>
            </TooltipComponent>
          </div>

          <div className="mt-10 flex-col ">
            {links.map((item)=>(
              <>
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase ">{item.title}</p>
                {item.links.map((link)=>(
                  <>
                  
                    <NavLink 
                    to={`/${link.name}`}
                    className={({isActive})=> isActive ? activeLink : normalLink}
                    onClick={handleCloseSidebar}
                    style={({isActive})=>({
                      backgroundColor:isActive ? currentColor : ''
                    })}
                    >
                      {link.icon}
                      <p>{link.name}</p>
                    </NavLink>
                  
                  </>
                ))}
              </div>
              </>
            ))}
          </div>
          </>
        )
       }
    </div>
  )
}

export default Sidebar