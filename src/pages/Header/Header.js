import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Context/Context';
import baribhara from '../../images/baribhara.png'

const Header = () => {
    const { user, logout } = useContext(Authcontext)
    const navigate = useNavigate()

    const handlelogout = () => {
        logout(
            navigate('/login')
        );
    }
    const navitems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/tolet'>ToLet</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/post'>post</Link></li>
        {
            user?.uid ?
                <>

                    <li><Link to='/mypost'>My post</Link></li>
                    <li><button onClick={handlelogout}>Logout</button></li>

                </>
                :
                <li><Link to='/login'>Login</Link></li>
        }


    </>


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navitems
                            }
                        </ul>
                    </div>
                    <img className='w-16' src={baribhara} alt=''></img>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navitems
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Header;