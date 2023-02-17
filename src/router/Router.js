import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";
import Main from "../main/Main";




const router = createBrowserRouter([
 
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/home',
                element:<Home></Home>
            },
        ]
    }


])

export default router;