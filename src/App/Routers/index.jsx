import { createBrowserRouter } from 'react-router-dom';
import { LayOut } from '../../Commponents'

let router = createBrowserRouter([
    {
        path : '/',
        element : <LayOut />,
    }
])

export { router }