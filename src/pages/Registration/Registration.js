import React, { useContext } from 'react';
import home from '../../images/home.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Context/Context';

const Registration = () => {
    const navigate=useNavigate()
const {createuser}=useContext(Authcontext)
const handleregistration=event=>{
    event.preventDefault();
    const form=new FormData(event.target);
    const email=form.get('email');
    const password=form.get('password')
    console.log(email,password)
    createuser(email,password)
    .then(result=>{
        const user=result.user;
        console.log(user)
        navigate('/')
    })
    .catch(error=>{
        console.log(error)
    })
}
    return (
        <div>
        <div className="hero mt-20 ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="hidden lg:w-1/2 lg:block">
                    <img width={'1000px'} alt='' src={home}></img>
             </div>
                <div className="card shrink-0 w-full lg:w-1/2   ">
                   
                    <form className="card-body lg:max-w-lg " onSubmit={handleregistration}>
                    <p className='text-center text-4xl font-bold'>Registration</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter Password" className="input input-bordered" required />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gray-700 text-white">Sing Up</button>
                        </div>
                        <p className='text-sm text-center'>Already Have Any Account? Please <Link className='text-blue-600' to="/login">LogIn</Link></p>

                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Registration;