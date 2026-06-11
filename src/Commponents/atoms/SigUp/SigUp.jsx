import { NavLink } from 'react-router-dom'
import './SigUp.css'

function SigUp(){
    return(
        <div>
            <NavLink to={'/Sig-up'} className={({isActive}) => isActive ? '' : ''}><button className="button">Sig up</button></NavLink>
        </div>
    )
}

export { SigUp }