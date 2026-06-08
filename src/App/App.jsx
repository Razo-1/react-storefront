import { RouterProvider } from 'react-router-dom';
import { getRouter } from './Routers/index.jsx'
import { mainUrl } from '../shared/API'
import { useEffect, useState } from 'react';

function App({ resource }){
    let [data,setData] = useState([])
    
    useEffect(() => {
        mainUrl.get(`/products`)
        .then(res => setData(res.data))
        .catch(rej =>{
            throw new Error (`${rej}.Try Again Please`)
        })
    },[]) 
    
    let router = getRouter({resource,data})
    return(
        <div>
            <RouterProvider router={router}/> 
        </div>
    )
}

export { App }