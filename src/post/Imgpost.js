import React from 'react';
import { Link } from 'react-router-dom';

const Imgpost = () => {
    return (
      <div className=' grid grid-cols-2 gap-2 ml-14px mt-4 mb-8  '>
         <div className='flex-1 w-64'> <h1 className='text-4xl'> <span className='text-red-600  '>please upload your</span>  <br/>photo  and <span className='text-green-500'>enjoy your easy life </span></h1> <div>
         <button className="btn btn-info"><Link to='/about'>info</Link></button></div> </div>
     
            <div className="card w-96 bg-gray-700 shadow-2xl border-gray-900 mt-5 mx-7 text-white">
        <figure className="px-10 pt-10 ">
          <img src="https://wallpapers-hub.art/wallpaper-images/266770.jpg" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"><input type="text" placeholder="Title" className="input input-bordered input-xs w-full max-w-xs text-black" /></h2>
          <p><input type="text" placeholder="description" className="input input-bordered input-sm w-full max-w-xs text-black" /></p>
          <div className="card-actions">
            <button className="btn btn-primary">UPload</button>
          </div>
        </div>
      </div>

     
      </div>
      
    );
};

export default Imgpost;