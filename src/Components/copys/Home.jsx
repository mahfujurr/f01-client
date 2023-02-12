// import { useEffect, useState } from "react";
// import { useQuery } from "react-query";
// import 'react-tabs/style/react-tabs.css';
// import Item01 from "./Item01";



// function Home() {
//     const [cats, setDishes] = useState([]);
//     useEffect(() => {
//         fetch(`https://recyclelib-server.vercel.app/cats`)
//             .then(res => res.json())
//             .then(data => {
//                 setDishes(data);
//             })
//     }, [])
//     // const { data: cats = [], refetch, isLoading } = useQuery({
//     //     queryKey: ['cats'],
//     //     queryFn: () => fetch(`https://recyclelib-server.vercel.app/cats`)
//     //         .then(res => res.json())
//     // })

//     const [categoryName, setHomeProductName01] = useState('')
//     const HandleCategoryName = (e) => {
//         const homeProductName = e.target.value;
//         setHomeProductName01(homeProductName);
//     }
//     // const categoryColor = 'blue';
//     const info = {
//         categoryName,


//     }


//     const handleAddDish = () => {
//         fetch('https://recyclelib-server.vercel.app/cats', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(info)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.acknowledged) {
//                     alert('Category Added Successfully');
//                 }


//             })
//         // refetch();
//     }
//     if (cats.length===0) {
//         return <div className="flex items-center justify-center space-x-2 animate-bounce">
//             <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
//             <div className="w-8 h-8 bg-green-400 rounded-full"></div>
//             <div className="w-8 h-8 bg-black rounded-full"></div>
//         </div>
//     }
//     return (
//         <div className="pb-28">

//             <h1 className='text-white text-xl font-semibold text-center bg-black/90 py-5 w-full'>The Windermere Speakeasy Summary</h1>
//             {
//                 cats?.map(cat => <>
//                     <Item01 setHomeProductName01={setHomeProductName01} categoryName={cat?.categoryName} />

//                 </>)
//             }

//             <div className="flex w-full justify-center">

//                 <input type='text' placeholder='Type Category Name...' onChange={HandleCategoryName} className='py-4 bg-green-700 text-center font-semibold text-white text-xl' />
//                 <button className='border' onClick={handleAddDish}>Add another Category</button>
//             </div>

//         </div>
//     )
// }

// export default Home

