import { Outlet } from 'react-router-dom'
import { Header } from '../../organisms/Header/Header.jsx'

function LayOut({ nav }){
    return(
        <>
            <Header nav={nav}/>
            <Outlet />
        </>
    )
}

export { LayOut }