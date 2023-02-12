import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Dish01 from "../Pages/Dish01";
import Home from "../Pages/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/dish/:id',
                element: <Dish01/>,
                loader: ({params}) => fetch(`https://recyclelib-server.vercel.app/dish/${params.id}`)
            },
            
           
        ]
    },
])

export default router;