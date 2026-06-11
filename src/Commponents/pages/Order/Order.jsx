import { useContext } from "react"
import { Context } from "../../../App/Context"
import { Basket } from '../../organisms'
import { SigUp } from '../../atoms'
import './Order.css'

function Order(){
    const { cart } = useContext(Context)

    let total = cart.reduce((acc,elm) => acc += elm.totalPrice,0)

    return(
        <div className="Order">
            <h1 className={`${total ? 'pannier' : ''}`}>Basket:</h1>
            {total ?  '' : <p className="empty">"It's empty here now."</p>}
            <div className="partOrder">
                {cart?.map(el => <div className="basket" key={el.id}><Basket el={el}/></div>)}
                {total ? <div className="ok"><h1>Total amount: {total.toFixed(1)} USD</h1><SigUp/></div> : ''}
            </div>
        </div>
    )
    
}

export { Order }