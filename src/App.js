import React from 'react'
import {Route,Routes} from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'

import {Navbar,Sidebar,ThemeSettings, Cart,Chat, Notification, UserProfile} from './components'

import {Ecommerce,Orders,Employees,Pyramid,Customers,Kanban,AreaChart,BarChart,FinancialChart,Pie,ColorMapping,ColorPicker,Editor,LineChart,Calendar} from './pages'

import {useStateContext} from './contexts/contextProvider'

const App = () => {
   
  const {activeMenu,themeSettings,setThemeSettings,currentColor,currentMode,isClicked}=useStateContext()

   
  return (
    <div className={currentMode==='Dark' ? 'dark' : ''}>
    <div className='flex gap-3 relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4 z-50'>
            <TooltipComponent content="Settings" position='Top'>
                <button 
                type='button' 
                className='p-3 text-3xl hover:drop-shadow-xl hover:bg-light-gray text-white  rounded-full '
                style={{backgroundColor:currentColor}}
                onClick={()=>setThemeSettings(true)}
                >
                  <FiSettings/>
                </button>
            </TooltipComponent>
        </div>

        {activeMenu ? 
          <div className='w-72 fixed bg-white dark:bg-secondary-dark-bg shadow-xl'>
            <Sidebar/>
          </div>
      :
      <div className='w-0 dark:bg-secondary-dark-bg'>
        <Sidebar/>
      </div>  
      }

      <div className={` relative dark:bg-main-dark-bg bg-main-bg  min-h-screen w-full ${activeMenu ? 'ml-72' : 'flex-2'}`}>
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg w-full z-50'>
          <Navbar/>
        </div>
       
        <div>
          {themeSettings && <ThemeSettings/>}
          {isClicked.cart && <Cart/>}
          {isClicked.chat && <Chat/>}
          {isClicked.notification && <Notification/>}
          {isClicked.userProfile && <UserProfile/>}
          <Routes>
            {/* Dashboard */}
            <Route path='/' element={<Ecommerce/>}/>
            <Route path='/ecommerce' element={<Ecommerce/>}/>

            {/* Pages */}
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/employees' element={<Employees/>}/>
            <Route path='/customers' element={<Customers/>} />

            {/* Apps */}
            <Route path='/kanban' element={<Kanban/>}/>
            <Route path='/editor' element={<Editor/>}/>
            <Route path='/calendar' element={<Calendar/>}/>
            <Route path='/color-picker' element={<ColorPicker/>}/>
            
            {/* Charts */}
            
            <Route path='line' element={<LineChart/>}/>
            <Route path='/area' element={<AreaChart/>}/>
            <Route path='/bar' element={<BarChart/>}/>
            <Route path='/pie' element={<Pie/>}/>
            <Route path='/financial' element={<FinancialChart/>}/>
            <Route path='/color-mapping' element={<ColorMapping/>}/>
            <Route path='/pyramid' element={<Pyramid/>}/>
             
            </Routes>
          </div>
        </div>
    </div>
    </div>
  )
}

export default App