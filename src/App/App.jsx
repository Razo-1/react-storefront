import { RouterProvider } from 'react-router-dom';
import { getRouter } from './Routers/index.jsx'
import { mainUrl } from '../shared/API'
import { useEffect, useState } from 'react';
import { Provider } from './Context'
import './style/Style.css'

function App({ resource,bank,month,initalValue,schema }){
    let [data,setData] = useState([])
    let [cart,setCart] = useState([])
    
    useEffect(() => {
        mainUrl.get(`/products`)
        .then(res => setData(res.data.map(el => ({...el,count : 0 , totalPrice : el.price }))))
        .catch(rej =>{
            throw new Error (`${rej}.Try Again Please`)
        })
    },[]) 
   

    let addToCart = (arg) => {        
        if(cart.length){ // ete ka u id nuyna ev count 0 chi tox avelacni
            let isTher = cart.find(el => el.id === arg.id)
                if(isTher){
                    if(isTher.rating.count){
                        setCart(prev => prev.map(item => {
                            if(isTher.id === item.id){
                                let sum = Number((item.count * item.price).toFixed(1))
                                return {...item,rating :{...item.rating,count : item.rating.count - 1},  count : ++item.count,totalPrice :  sum}
                            }else{
                                return {...item}
                            }
                        }))
                        setData(prev => prev.map(it => {
                            if(isTher.id === it.id){
                                return {...it,rating :{...it.rating,count :it.rating.count -1}}
                            }else{
                                return {...it}
                            }
                        }))
                    }
                }else{
                    setData(prev => prev.map(it => {
                            if(arg.id === it.id){
                                return {...it,rating :{...it.rating,count :it.rating.count - 1}}
                            }else{
                                return {...it}
                            }
                        }))
                    setCart([...cart,{...arg,count : 1 ,rating : {...arg.rating, count : arg.rating.count - 1}}])
                }
                }else{
                    setData(prev => prev.map(it => {
                            if(arg.id === it.id){
                                setCart([{...it,rating :{...it.rating,count :it.rating.count -1},count : 1}])    // ete order datarka avelacra order-um u Data-i count 1-ov poqracra
                                return {...it,rating :{...it.rating,count :it.rating.count -1,}}
                            }else{
                                return {...it}
                            }
                        }))
                }                
    }

    
    let router = getRouter({resource,data})
    return(
        <Provider value={{addToCart,setCart,cart,setData,bank,month,initalValue,schema}}>
            <RouterProvider router={router}/> 
        </Provider>
    )
}

export { App }