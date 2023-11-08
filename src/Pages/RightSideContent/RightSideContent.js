import React from 'react';
import { FaTextHeight } from 'react-icons/fa';

const RightSideContent = () => {
    return (
        <div className='w-full bg-white m-2 p-2 shadow-md rounded'>
            <div className=' flex inline items-center text-orange-400 '>
                <p><FaTextHeight></FaTextHeight></p>
                <p>  Setting</p>
            </div>
            <div className='form-control'>

                <label className="label">
                    <span className="label-text">paragraph fort size 17</span>
                </label>
                <input type="range" min={0} max="100" value="40" className="range range-xs" />
            </div>
            <div className="form-control ">
                <label className="label">
                    <span className="label-text">Choose vitamin</span>
                </label>
                <select className="select select-bordered">
                    <option disabled selected>Pick one</option>
                    <option>Vitamin A</option>
                    <option>Vitamin C</option>
                    <option>Vitamin C</option>
                </select>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Turn off subtitle</span>
                    <input type="checkbox" className="toggle" checked />
                </label>
            </div>
        </div>
    );
};

export default RightSideContent;