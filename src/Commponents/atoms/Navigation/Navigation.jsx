import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Nav({nav}){

    return(
        <NavLink className={({isActive}) => isActive ? 'active' : '' } to={`/${nav === 'Home' ? '' : nav}`}>{nav}</NavLink>
    )
}

export { Nav }