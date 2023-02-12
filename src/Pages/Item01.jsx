import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const Item01 = () => {

    const hp02 = JSON.parse(localStorage.getItem('categoryName2'));

    const [categoryName, setHomeProductName02] = useState(hp02 ? hp02 : '')
    const HandleCategoryName = (e) => {
        const homeProductName = e.target.value;
        setHomeProductName02(homeProductName);
    }
    const categoryNumber = 'b';
    const titleInfo01 = {
        categoryName,
        categoryNumber

    }

    useEffect(() => {
        localStorage.setItem('categoryName2', JSON.stringify(categoryName));
    }, [categoryName]);

    const { data: dishes2 = [], refetch, isLoading } = useQuery({
        queryKey: ['dishes2'],
        queryFn: () => fetch(`https://recyclelib-server.vercel.app/b`)
            .then(res => res.json())
    })


    const handleAddDish = () => {
        fetch('https://recyclelib-server.vercel.app/dish', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(titleInfo01)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Dish Added Successfully');
                }


            })
        refetch();
    }
    const handleDelete = (id) => {
        fetch(`https://recyclelib-server.vercel.app/dish/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Dish Deleted Successfully');
                }


            })

    }
    if (isLoading) {
        return <Loader></Loader>
    }
    refetch();
    return (
        <div className='flex flex-col items-center gap-10 justify-center min-w-[700px] py-4'>

            {/* 1st section start  */}

            <div className='w-full lg:w-4/5 text-sm md:text-base '>
                <div className={`bg-green-700 flex justify-center`}>
                    <input type='text' placeholder='type here...' onChange={HandleCategoryName} defaultValue={categoryName} className='py-4 bg-green-700 text-center font-semibold text-white text-xl' />
                </div>



                <table className="table border text-center w-full backdrop-blur-sm bg-white/30">
                    <thead >
                        <tr className='bg-green-200 p-1'>
                            <th></th>
                            <th>Product Name</th>
                            <th>Sales Price</th>
                            <th>GP%</th>
                            <th>Total Cost</th>
                            <th>Net Profit</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {


                            dishes2?.map((dish, i) =>
                                <tr key={i} className='p-1'>
                                    <th>{i + 1}</th>
                                    <th>{dish.dishName01}</th>
                                    <th>£{dish.dishEST01 ? dish.dishEST01 : '0.00'}</th>
                                    <th>{isNaN(dish.costMargin01) ? '00' : dish.costMargin01}%</th>
                                    <th>£{dish.totalCost01 ? dish.totalCost01 : '0.00'}</th>
                                    <th>£{isNaN(dish.netProfit01) ? '0.00' : dish.netProfit01}</th>
                                    <th className='text-blue-500'><Link to={`/dish/${dish._id}`} >Edit</Link></th>
                                    <th className='text-red-500'><button onClick={() => handleDelete(dish._id)} >Delete</button></th>
                                </tr>
                            )

                        }


                    </tbody>
                </table>

                <div className='w-full flex mt-2 justify-center'>
                    <button className='border-2 bg-black text-white hover:bg-white hover:text-black ease-in-out duration-300 py-2 px-5 font-semibold rounded-2xl' onClick={handleAddDish}>Add a dish</button>
                </div>


            </div>

        </div >

    );
};

export default Item01;