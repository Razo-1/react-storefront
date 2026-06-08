import { Nav } from '../../atoms/Navigation/Navigation.jsx'


function NavBar({nav}){
    return(
        <ul>
            {nav.map((el,ind) => <li key={ind}><Nav nav={el}/></li>)}
        </ul>
    )
}