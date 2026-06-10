import { createRoot } from 'react-dom/client'
import { App } from './App/App.jsx'
import { Resource,bank,month } from './Resource/Resource.js'

createRoot(document.getElementById('root')).render(
    <App resource={Resource} bank={bank} month={month}/>
)
