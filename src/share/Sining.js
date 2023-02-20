import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../authprovider/Authprovider'
import {FcGoogle} from 'react-icons/fc'
import { GoogleAuthProvider } from 'firebase/auth';
const Sining = () => {





 const {createUserEmail,continewWithGoogle}= useContext(AuthContext)


  
    const handleCreateAccount = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUserEmail(email,password)
          .then(result =>{
            const user = result.user;
            console.log(user);
          })
    }


    const googleProvider = new GoogleAuthProvider();
    const GoogleNext = () =>{
        continewWithGoogle(googleProvider)
        .then(result=>{
            const user = result.user
            console.log(user);
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Create a new account!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleCreateAccount} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Make your account</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            
                            <input type="text" placeholder="name" name='name' className="input input-bordered" />
                            <label className="label">
                                
                            </label>

                            <input type="text" placeholder="password" name='password'className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>

                            <p>if you are create a account <Link to='/login' className='text-red-600 '>here</Link></p>


                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <button onClick={GoogleNext} className="btn mt-6"><FcGoogle/>Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sining;