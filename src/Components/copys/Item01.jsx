// import React, { useEffect, useState } from 'react';
// import { useQuery } from 'react-query';
// import { Link } from 'react-router-dom';

// const Item01 = ({ categoryName }) => {

//     // const hp01 = JSON.parse(localStorage.getItem('titleInfo01'));


//     // const HandleCategoryName = (e) => {
//     //     const homeProductName = e.target.value;
//     //     setHomeProductName01(homeProductName);
//     // }


//     // const dishnumber = '5';
//     const titleInfo01 = {
//         categoryName,
//     }

//     // useEffect(() => {
//     //     localStorage.setItem('titleInfo01', JSON.stringify(titleInfo01));
//     // }, [titleInfo01]);
//     const [dishes, setDishes] = useState([]);
//     useEffect(() => {
//         fetch(`https://recyclelib-server.vercel.app/${categoryName}`)
//             .then(res => res.json())
//             .then(data => {
//                 setDishes(data);
//             })
//     }, [])

//     // const { data: dishes = [], refetch, isLoading } = useQuery({
//     //     queryKey: ['dishes'],
//     //     queryFn: () => fetch(`https://recyclelib-server.vercel.app/${categoryName}`)
//     //         .then(res => res.json())
//     // })
//     console.log(categoryName);

//     const handleAddDish = () => {
//         fetch('https://recyclelib-server.vercel.app/dish', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(titleInfo01)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.acknowledged) {
//                     alert('Dish Added Successfully');
//                 }


//             })
//         refetch();
//     }
//     if (dishes.length===0) {
//         return <div className="flex items-center justify-center space-x-2 animate-bounce">
//             <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
//             <div className="w-8 h-8 bg-green-400 rounded-full"></div>
//             <div className="w-8 h-8 bg-black rounded-full"></div>
//         </div>
//     }

//     return (
//         <div className='flex flex-col items-center gap-10 justify-center min-w-[700px]'>

//             {/* 1st section start  */}

//             <div className='w-full lg:w-4/5 text-sm md:text-base '>
//                 <div className='bg-green-700 flex justify-center'>
//                     <input type='text' placeholder='type here...' defaultValue={categoryName} className='py-4 bg-green-700 text-center font-semibold text-white text-xl' />
//                 </div>



//                 <table className="table border text-center w-full backdrop-blur-sm bg-white/30">
//                     <thead className=''>
//                         <tr>
//                             <th>Product Name</th>
//                             <th>Sales Price</th>
//                             <th>GP%</th>
//                             <th>Total Cost</th>
//                             <th>Net Profit</th>
//                             <th>Edit</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             categoryName == dishes?.map(dish=> dish.categoryName) &&

//                             dishes?.map((dish, i) =>
//                                 <tr key={i}>
//                                     <th>{dish.dishName01}</th>
//                                     <th>{dish.dishEST01}</th>
//                                     <th>{dish.costMargin01}</th>
//                                     <th>{dish.totalCost01}</th>
//                                     <th>{dish.netProfit01}</th>
//                                     <th><Link to={`/dish/${dish._id}`} >Edit</Link></th>
//                                 </tr>
//                             )

//                         }


//                     </tbody>
//                 </table>

//                 <div>
//                     <button className='border' onClick={handleAddDish}>Add a dish</button>
//                 </div>


//             </div>

//         </div>

//     );
// };

// export default Item01;