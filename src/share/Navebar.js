import React from 'react';
import { Link } from 'react-router-dom';


const Navebar = () => {
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
            <li><Link>About</Link></li>
            
          </ul>
        </div>
        
      </div>
      
    );
};

export default Navebar;