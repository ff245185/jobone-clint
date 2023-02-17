import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";
import Main from "../main/Main";
import Login from '../share/Login'






const router = createBrowserRouter([
 
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
        ]
    }


])

export default router;