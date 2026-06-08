import { Logo,SigUp } from '../../atoms'
import { NavBar } from '../../molecules/NavBar/NavBar.jsx'


function Header({nav}){
    return(
        <header>
            <Logo/>
            <NavBar nav={nav}/>
            <SigUp/>
        </header>
    )
}

export { Header }