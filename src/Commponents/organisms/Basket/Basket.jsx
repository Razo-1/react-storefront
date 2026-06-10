import { useContext } from "react"
import { Context } from "../../../App/Context"
import './Basket.css'

function Basket({el}){

    const { addToCart,setCart,setData } = useContext(Context)


    let minus = (arg) => {
        if(arg.count > 1){

            let count = arg.count - 1
            let sum = Number((count * arg.price).toFixed(1))
            let newData = {...arg,count : count, totalPrice : sum}

            setCart(prev => prev.map(el => {
                if(el.id === newData.id){
                    return {...newData}
                }else{
                    return {...el}
                }
            }))           
        }
    }

    let willSend = (arg) => {
        addToCart(arg)
    }  

    let remove = (arg) => {
        setData(prev => prev.filter(el => el.id === arg.id ? el.rating.count += arg.count : el))
        setCart(prev => prev.filter(el => el.id !== arg.id))
    }

    return(
        <>
                        <img className="image" src={el.image}/>
                        <div className="info">
                            <h2>{el.title}</h2>
                            <h3>category: {el.category}</h3>
                            <h3>{el.price} USD</h3>
                        </div>
                        <div className="addOrRemove">
                            <button onClick={() => minus(el)}>-</button>      
                            <p>{el.count}</p>
                            <button onClick={() => willSend(el)}>+</button>
                        </div>
                        <div className="totalPrice">
                            <h3>{el.totalPrice} USD</h3>
                            <p onClick={() => remove(el)}>X Remove</p>
                        </div>
        </>
    )
}

export { Basket }