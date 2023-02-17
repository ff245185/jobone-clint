import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../share/Footer';
import Homes from '../share/Homes';
import Navebar from '../share/Navebar';

const Main = () => {
    return (
        <div>
         <Homes/>
			<div className="lg:w-4/5 px-3 mx-auto">
				<Outlet />
			</div>
			<Footer />
        </div>
    );
};

export default Main;