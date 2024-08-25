import React from 'react';
import home from '../../../images/home.jpg';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (


        <div>
        

            <div className="hero my-[-10]">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={home} alt='' className="w-full lg:w-1/2" />
                    <div className='w-full lg:w-1/2'>
                        <h1 className="text-5xl font-bold">About Us!</h1>
                        <p className="py-6">Online rental platforms provide access to a vast array of rental properties in various locations. This allows you to browse listings from the comfort of your home and explore options that may not be available through traditional methods.Renting a home online eliminates the need to physically visit multiple properties or spend time driving around neighborhoods searching for "For Rent" signs. Instead, you can conveniently browse listings at any time and from any location with an internet connection.</p>
                        <Link to='' className="btn btn-primary">Rent Home</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutUs;