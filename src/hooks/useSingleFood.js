import { useEffect, useState } from 'react';

const useSingleFood = () => {

    const [food, setFood] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('food.json')
            .then(res => res.json())
            .then(data => {
                setFood(data)
                setLoading(false)
            })
    }, [])
    return [food, loading]

};

export default useSingleFood;


