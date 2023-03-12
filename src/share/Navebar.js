import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authprovider/Authprovider';


const Navebar = () => {

  const { user, userLogOut } = useContext(AuthContext);
       console.log(userLogOut);
 const handleLogout = () =>{
  userLogOut()
         .then(()=>{})
         .catch(error=>{

         })
 }


    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl" >Life-Book</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link>Media</Link></li>
            <li tabIndex={0}>
              <Link>
                Messanger
               
              </Link>
              
            </li>
            <li><Link>Top-post</Link></li>
           
           {  user?.email ?
             <li><Link><button onClick={handleLogout}>Logout</button></Link></li>
             :  <li><Link to='/login'>Login</Link></li>
           }
            



            <li><Link>About</Link></li>
            
          </ul>
        </div>
        
      </div>
      
    );
};

export default Navebar;