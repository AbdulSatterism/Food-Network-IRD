import React from 'react';
import FoodDetail from './FoodDetail';
import useSingleFood from '../../../hooks/useSingleFood';
import MiniSidebarHome from '../../MiniSidebar/MiniSidebarHome';


const FoodDetails = () => {
    const [food] = useSingleFood()
    return (
        <div className='m-2 grid flex grid-flow-row-dense grid-cols-12  grid-rows-1 '>
            <div className='col-span-1   text-blue-600 '>
                <MiniSidebarHome></MiniSidebarHome>
            </div>
            <div className='col-span-11'>
                {
                    food.map(item => <FoodDetail
                        key={item._id}
                        item={item}
                    >

                    </FoodDetail>)
                }
            </div>

        </div>
    );
};

export default FoodDetails;