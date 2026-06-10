import { useContext } from "react"
import { Context } from "../../../App/Context"

function Order(){
    const { cart } = useContext(Context)
    console.log(cart);
    
    
}

export { Order }