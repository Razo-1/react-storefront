import { Logo,SigUp } from '../../atoms'
import { NavBar } from '../../molecules/NavBar/NavBar.jsx'
import './Header.css'

function Header({nav}){
    return(
        <header className='Header'>
            <div className='container'>
                <Logo/>
                <NavBar nav={nav}/>
                <SigUp/>
            </div>
        </header>
    )
}

export { Header }