import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authprovider/Authprovider';


const Navebar = () => {

  const { user, logOut } = useContext(AuthContext);
 const handleLogout = () =>{
         logOut()
         .then(()=>{})
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
            {/* <li><Link to='/login'>Login</Link></li> */}

            {/* <li><Link to='/logout'>
              <button
              onClick={handleLogout}
              
              >
                
                logout
                </button>
              </Link></li> */}

<>
							{user?.uid ? (
								<div className="text-white flex items-center gap-3">
									<span className="hidden md:block">{user?.displayName}</span>
									<button
										onClick={handleLogout}
										className="btn hidden sm:block  ">
										Logout
									</button>
								</div>
							) : (
								<div className="text-white">
									<Link to="/login"> Login </Link>
								</div>
							)}
						</>

            <li><Link>About</Link></li>
            
          </ul>
        </div>
        
      </div>
      
    );
};

export default Navebar;