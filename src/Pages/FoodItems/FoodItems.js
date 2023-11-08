import React from 'react';

const FoodItems = ({ items }) => {
    return (
        <>

            <div className="overflow-x-auto">
                <input type="text" placeholder="Search" className="input input-bordered w-32 h-10 my-2 md:w-auto" />
                <h1 className='text-xl my-2'>Food List</h1>
                <table className="table">
                    <tbody>
                        {
                            items.map(item => <tr key={item._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.firstImg} alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                            <div className="text-sm opacity-50">{item.subTitle}</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default FoodItems;