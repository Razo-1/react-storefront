import { NavLink } from 'react-router-dom'

function Nav({nav}){

    return(
        <NavLink to={`/${nav}`}>{nav}</NavLink>
    )
}

export { Nav }