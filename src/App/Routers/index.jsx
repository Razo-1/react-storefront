import { createBrowserRouter } from 'react-router-dom';
import { LayOut } from '../../Commponents'
import { Products,Home,AboutUs,Order,Login } from '../../Commponents';


function getRouter({resource,data}){

    return createBrowserRouter([
    {
        path : '/',
        element : <LayOut nav={resource}/>,
        children : [
            {
                index : true,
                element : <Home />
            },
            {
                path : '/Products',
                element : <Products data={data}/>
            },
            {
                path : '/Order',
                element : <Order/>
            },
            {
                path : '/About Us',
                element : <AboutUs/>
            },
            {
                path : '/Sig-up',
                element : <Login/>
            }
        ]
    }
])
}


export { getRouter }