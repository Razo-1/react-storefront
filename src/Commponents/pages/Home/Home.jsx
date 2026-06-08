import one from '../../../Assest/Image/1.jpg'
import two from '../../../Assest/Image/2.jpg'
import three from '../../../Assest/Image/3.jpg'
import { SigUp } from '../../atoms/SigUp/SigUp' 
import { NavLink } from 'react-router-dom'
import style from './Home.module.css'

function Home(){

    return(
        <div className={style.main}>
            <div className={style.firstImage}>
                <h1>Discover a world of<br/> quality and style</h1>
                <div className={style.block}>
                    <button className={style.button}><NavLink to={`/Products`}><span>Shop</span></NavLink></button>
                    <SigUp />
                </div>
            </div>
            <div className={style.container}>
                <div className={style.second}>
                    <img src={two} />
                </div>
                <div className={style.three}>
                    <img src={three} />
                </div>
            </div>
        </div>
    )

}

export { Home }