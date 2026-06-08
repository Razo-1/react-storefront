import { FaRegStar } from "react-icons/fa6";
import './Products.css'

function Products({ data }){
    console.log(data);
    
   return(
    <div className='products'>
        {data.map(el => {
            return(
                <div className='card' key={el.id}>
                    <img src={el.image}/>
                    <h2>Price: {el.price}</h2>
                    <h3>Category: {el.category}</h3>
                    <div className='rating'><FaRegStar /> <p>{el.rating.rate}</p></div>
                    <button class="btn">
                        <span className="btn__visible">Buy Now</span>
                        <span className="btn__invisible">Only {el.rating.count} left</span>
                    </button>
                </div>
            )
        })}
    </div>
   )
}

export { Products }