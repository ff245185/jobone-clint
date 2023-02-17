import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";
import Main from "../main/Main";
import Login from '../share/Login'
import Sining from "../share/Sining";






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
            {
                path:'/sining',
                element:<Sining></Sining>
            }
        ]
    }


])

export default router;