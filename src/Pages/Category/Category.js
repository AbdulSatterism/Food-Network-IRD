import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFood from '../../hooks/useFood';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FoodItems from '../FoodItems/FoodItems';

const Category = () => {
    const [food, loading] = useFood();
    const categories = ['fruit', 'vegetable'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);


    const fruits = food.filter(fruit => fruit.category === 'fruit');
    const vegetables = food.filter(vege => vege.category === 'vegetable');



    if (loading) {
        return <span className="loading loading-spinner text-center loading-md"></span>
    }
    // TODO: tab button and search implement

    return (
        <div className='bg-white m-4 p-3 rounded '>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='flex gap-3 border-solid border-2 border-orange-200 p-1 rounded'>
                    <Tab className='btn bg-orange-200 text-orange-600 '>Fruits</Tab>
                    <Tab className='btn bg-orange-200 text-orange-600 '>Vagetables</Tab>
                </TabList>

                <TabPanel>

                    <FoodItems
                        items={fruits}
                    ></FoodItems>

                </TabPanel>
                <TabPanel>
                    <FoodItems
                        items={vegetables}
                    ></FoodItems>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Category;
/*
<div className='w-full h-[60px] mt-0 gap-4 p-4 rounded-xl border-solid border-2 border-orange-100  '>
                <div className='flex justify-between items-center mt-0'>

                    <Link > <button className="btn h-[30px] p-1 gap-1 active:bg-orange-200 active:text-orange-400 ">Fruits</button></Link>

                    <button className="btn h-[30px] p-1 gap-1 active:bg-orange-200 active:text-orange-400">Vegetables</button>
                </div>
            </div>
            <input type="text" placeholder="Search" className="input input-bordered w-32 h-10 my-2 md:w-auto" />


*/