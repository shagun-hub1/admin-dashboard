import { createContext,useContext,useState } from "react";

const StateContext=createContext()

const initialState={
    cart:false,
    userProfile:false,
    notification:false,
    chat:false
}

export const ContextProvider=({children})=>{
    const [activeMenu, setactiveMenu] = useState(true)
    const [isClicked, setisClicked] = useState(initialState)
    const [screenSize, setscreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)
    const setMode=(e)=>{
        setCurrentMode(e.target.value)

        localStorage.setItem('themeMode',e.target.value)

        setThemeSettings(false)
    }

    const setColor=(e)=>{
        setCurrentColor(e)

        localStorage.setItem('colorMode',e)

        setThemeSettings(false)
    }

    const handleClick=(clicked)=>{
        setisClicked({...initialState,[clicked]:true})

         
    }

    const handleClose=()=>{
        setisClicked(initialState)
    }

    return(
        <StateContext.Provider value={{
            activeMenu,
            setactiveMenu,
            isClicked,
            setisClicked,
            handleClick,
            screenSize,
            setscreenSize,
            currentColor,
            currentMode,
            setColor,
            setMode,
            themeSettings,
            setThemeSettings,
            handleClose
        }}>
        {children}
    </StateContext.Provider>
    )
}

export const useStateContext=()=>useContext(StateContext)