import React from 'react';

const Home = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://images.unsplash.com/photo-1600164318544-79e55da1ac8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z29vZCUyMHRpbWVzfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">post you lovely phto</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-error">post now</button>
                </div>
            </div>
        </div>
    );
};

export default Home;