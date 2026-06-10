import { FaRegStar } from "react-icons/fa6";
import { useContext, useState } from "react";
import { Context } from "../../../App/Context";
import { CiCalculator1 } from "react-icons/ci";
import { Bank } from "../../organisms";
import './Products.css'

function Products({ data }){
    let { addToCart } = useContext(Context)
    let [isActiv,setIsActiv] = useState(false)
    let [elem,setelem] = useState([])
    let willSend = (arg) => {
        addToCart(arg)
    } 

    let calc = (arg) => {
        setelem([arg])
        setIsActiv(true)
    }

   return(
    <div className='products'>
        {data.map(el => {
            return(
                <div className='card' key={el.id}>
                    <img src={el.image}/>
                    <h2>Price: {el.price}</h2>
                    <h3>Category: {el.category}</h3>
                    <div className='rating'><FaRegStar /> <p>{el.rating.rate}</p></div>
                    <div className="calulator" onClick={() => calc(el)}><CiCalculator1 /></div>
                    <button onClick={() => willSend(el)} className="btn">
                        <span className="btn__visible">Buy Now</span>
                        <span className="btn__invisible">Only {el.rating.count} left</span>
                    </button>
                </div>
            )
        })}
        <Bank elem={elem} isActiv={isActiv}/>
    </div>
   )
}

export { Products }