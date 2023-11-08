import React from 'react';
import { FaStar } from 'react-icons/fa';

const FoodDetail = ({ item }) => {
    const { name, advantage, description, firstImg, title, rating } = item;
    return (
        <section className='bg-white'>

            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={firstImg} className="w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div className='mt-0 my-4'>
                        <h1 className="text-3xl  my-2 font-black">{title}</h1>
                        <h3 className='text-xl font-bold'>Health Benefit:</h3>
                        <p className='items-center text-justify'>{advantage}</p>
                        <h3 className='text-xl font-bold'>Health Benefit:</h3>
                        <p className='items-center text-justify'>{advantage}</p>
                    </div>
                </div>
            </div>
            {/* only text section */}
            <div className='mt-0 my-4  px-4'>
                <h3 className='text-xl font-bold'>Description:</h3>
                <p className='items-center text-justify'>{description}</p>
            </div>

            {/* last part*/}
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='mt-0 my-4'>
                        <h3 className='text-xl font-bold'>Advantage:</h3>
                        <p className='items-center text-justify'>{description}</p>
                    </div>
                    <img src={firstImg} className="w-1/2 rounded-lg shadow-2xl" alt='' />
                </div>

            </div>
            <div className='p-4'>
                <p>was this helpful?</p>
                <p className='text-orange-400 flex'><FaStar></FaStar>  <FaStar></FaStar><FaStar></FaStar> </p>
            </div>
        </section>
    );
};

export default FoodDetail;
