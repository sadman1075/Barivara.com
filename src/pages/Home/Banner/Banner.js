import React from 'react';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className=''>
            <div className="carousel  w-full mt-10">
                <div id="slide1" className="carousel-item relative w-full ">
                    <div className='carousal-img w-full h-full'>
                        <img src={banner1} alt='' className='w-full h-full'></img>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2  right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle bg-orange-600">❮</a>
                        <a href="#slide2" className="btn btn-circle ml-3 bg-gray-400">❯</a>
                    </div>
                    <div className="absolute grid justify-between transform -translate-y-1/2  left-5 top-1/2 gap-7 lg:ml-36">
                        <p className='text-2xl lg:text-6xl text-white font-bold '>Want To Rent House? </p>
                        <p className='text-2xl lg:text-6xl text-white font-bold '>We Are Here TO </p>
                        <p className='text-2xl lg:text-6xl text-white font-bold '>Help You!!!</p>
                          

                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <div className='carousal-img w-full h-full'>
                        <img src={banner2} alt='' className='w-full h-full'></img>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2  right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle bg-orange-600">❮</a>
                        <a href="#slide3" className="btn btn-circle ml-3 bg-gray-400">❯</a>
                    </div>
                    <div className="absolute grid justify-between transform -translate-y-1/2  left-5 top-1/2 gap-7 lg:ml-36">
                        <p className='text-2xl lg:text-6xl text-white font-bold '>Want To Rent House? </p>
                        <p className='text-2xl lg:text-6xl text-white font-bold '>We Are Here TO </p>
                        <p className='text-2xl lg:text-6xl text-white font-bold '>Help You!!!</p>
                          

                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    <div className='carousal-img w-full h-full'>
                        <img src={banner3} alt='' className='w-full h-full'></img>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2  right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle bg-orange-600">❮</a>
                        <a href="#slide1" className="btn btn-circle ml-3 bg-gray-400">❯</a>
                    </div>
                    <div className="absolute grid justify-between transform -translate-y-1/2  left-5 top-1/2 gap-7 lg:ml-36">
                        <p className='text-2xl lg:text-6xl text-white font-bold '>Want To Rent House? </p>
                        <p className='text-2xl lg:text-6xl text-white font-bold '>We Are Here TO </p>
                        <p className='text-2xl lg:text-6xl text-white font-bold '>Help You!!!</p>
                          

                    </div>
                </div>
           

            </div>
          
        </div>
    );
};

export default Banner;