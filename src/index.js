import './index.css'
import { createRoot } from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {ContextProvider} from './contexts/contextProvider'
 

const container=document.getElementById('root')
const root=createRoot(container)
 
root.render(
    <BrowserRouter>
    <ContextProvider>
   
    <App/>
    
    </ContextProvider>
    </BrowserRouter>
)