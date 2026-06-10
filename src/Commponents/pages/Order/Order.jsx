import { useContext } from "react"
import { Context } from "../../../App/Context"
import { Basket } from '../../organisms'
import './Order.css'

function Order(){
    const { cart } = useContext(Context)

    let total = cart.reduce((acc,elm) => acc += elm.totalPrice,0)

    return(
        <div className="Order">
            <h1>Basket:</h1>
            <div className="partOrder">
                {cart?.map(el => <div className="basket" key={el.id}><Basket el={el}/></div>)}
                <h1>Total amount: {total.toFixed(1)} USD</h1>
            </div>
        </div>
    )
    
}

export { Order }