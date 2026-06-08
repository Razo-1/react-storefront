import { NavLink } from "react-router-dom"
import './Logo.css'

function Logo(){
    return(
        <div className="Logo">
            <h1><NavLink to={`/`}>Logo</NavLink></h1>
        </div>
    )
}

export { Logo }