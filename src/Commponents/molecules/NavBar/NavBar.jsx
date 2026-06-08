import { Nav } from '../../atoms/Navigation/Navigation.jsx'
import './NavBar.css'

function NavBar({nav}){
    
    return(
        <ul className='menu'>
            {nav.map((el,ind) => <li key={ind}><Nav nav={el}/></li>)}
        </ul>
    )
}

export { NavBar }