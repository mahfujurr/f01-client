import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import Modal01 from './Modal';

const Dish01 = () => {
    const d01 = useLoaderData();
    const borderClass = 'w-full text-center border border-black/60 border-dotted outline-none '
    const [date01, setDate01] = useState(d01?.date01);
    const HandleDate01 = (e) => {
        const date01 = e.target.value;
        setDate01(date01);
    }

    const [dishName01, setDishName01] = useState(d01?.dishName01);
    const HandleDishName = (e) => {
        const dishName01 = e.target.value;
        setDishName01(dishName01);
    }

    // dish eastemate cost 
    const [dishEST01, setDishEST01] = useState(d01?.dishEST01);
    const HandleEST = (e) => {
        const dishEST01 = e.target.value;
        setDishEST01(parseFloat(dishEST01).toFixed(2));
    }

    // --------------------------------------
    // table dish product name
    const [dishPName011, setDishPName011] = useState(d01?.dishPName011);
    const HandlePName011 = (e) => {
        const dishPName = e.target.value;
        setDishPName011(dishPName);
    }
    // table dish product qantity
    const [dishQTY011, setDishQTY011] = useState(d01?.dishQTY011);
    const HandleQTY011 = (e) => {
        const dishQTY011 = e.target.value;
        setDishQTY011(dishQTY011);
    }


    const [dishCost011, setDishCost011] = useState(d01?.dishCost011);
    const HandleCost011 = (e) => {
        const dishCost011 = e.target.value;
        setDishCost011(parseFloat(dishCost011).toFixed(2));
    }
    // --------------------------------------
    // table dish product name
    const [dishPName012, setDishPName012] = useState(d01?.dishPName012);
    const HandlePName012 = (e) => {
        const dishPName = e.target.value;
        setDishPName012(dishPName);
    }
    // table dish product qantity
    const [dishQTY012, setDishQTY012] = useState(d01?.dishQTY012);
    const HandleQTY012 = (e) => {
        const dishQTY012 = e.target.value;
        setDishQTY012(dishQTY012);
    }


    const [dishCost012, setDishCost012] = useState(d01?.dishCost012);
    const HandleCost012 = (e) => {
        const dishCost012 = e.target.value;
        setDishCost012(parseFloat(dishCost012).toFixed(2));
    }
    // --------------------------------------
    // table dish product name
    const [dishPName013, setDishPName013] = useState(d01?.dishPName013);
    const HandlePName013 = (e) => {
        const dishPName = e.target.value;
        setDishPName013(dishPName);
    }

    // table dish product qantity
    const [dishQTY013, setDishQTY013] = useState(d01?.dishQTY013);
    const HandleQTY013 = (e) => {
        const dishQTY013 = e.target.value;
        setDishQTY013(dishQTY013);
    }


    const [dishCost013, setDishCost013] = useState(d01?.dishCost013);
    const HandleCost013 = (e) => {
        const dishCost013 = e.target.value;
        setDishCost013(parseFloat(dishCost013).toFixed(2));
    }
    // --------------------------------------
    // table dish product name
    const [dishPName014, setDishPName014] = useState(d01?.dishPName014);
    const HandlePName014 = (e) => {
        const dishPName = e.target.value;
        setDishPName014(dishPName);
    }
    // table dish product quantity
    const [dishQTY014, setDishQTY014] = useState(d01?.dishQTY014);
    const HandleQTY014 = (e) => {
        const dishQTY014 = e.target.value;
        setDishQTY014(dishQTY014);
    }


    const [dishCost014, setDishCost014] = useState(d01?.dishCost014);
    const HandleCost014 = (e) => {
        const dishCost014 = e.target.value;
        setDishCost014(parseFloat(dishCost014).toFixed(2));
    }
    // --------------------------------------
    // table dish product name
    const [dishPName015, setDishPName015] = useState(d01?.dishPName015);
    const HandlePName015 = (e) => {
        const dishPName = e.target.value;
        setDishPName015(dishPName);
    }
    // table dish product quantity
    const [dishQTY015, setDishQTY015] = useState(d01?.dishQTY015);
    const HandleQTY015 = (e) => {
        const dishQTY015 = e.target.value;
        setDishQTY015(dishQTY015);
    }

    // table dish priduct cost 
    const [dishCost015, setDishCost015] = useState(d01?.dishCost015);
    const HandleCost015 = (e) => {
        const dishCost015 = e.target.value;
        setDishCost015(parseFloat(dishCost015).toFixed(2));
    }
    // --------------------------------------
    // table dish product name
    const [dishPName016, setDishPName016] = useState(d01?.dishPName016);
    const HandlePName016 = (e) => {
        const dishPName = e.target.value;
        setDishPName016(dishPName);
    }
    // table dish product quantity
    const [dishQTY016, setDishQTY016] = useState(d01?.dishQTY016);
    const HandleQTY016 = (e) => {
        const dishQTY016 = e.target.value;
        setDishQTY016(dishQTY016);
    }

    // table dish priduct cost 
    const [dishCost016, setDishCost016] = useState(d01?.dishCost016);
    const HandleCost016 = (e) => {
        const dishCost016 = e.target.value;
        setDishCost016(parseFloat(dishCost016).toFixed(2));
    }
    // --------------------------------------
    // table dish product name
    const [dishPName017, setDishPName017] = useState(d01?.dishPName017);
    const HandlePName017 = (e) => {
        const dishPName = e.target.value;
        setDishPName017(dishPName);
    }
    // table dish product quantity
    const [dishQTY017, setDishQTY017] = useState(d01?.dishQTY017);
    const HandleQTY017 = (e) => {
        const dishQTY017 = e.target.value;
        setDishQTY017(dishQTY017);
    }

    // table dish priduct cost 
    const [dishCost017, setDishCost017] = useState(d01?.dishCost017);
    const HandleCost017 = (e) => {
        const dishCost017 = e.target.value;
        setDishCost017(parseFloat(dishCost017).toFixed(2));
    }
    // --------------------------------------
    // table dish product name
    const [dishPName018, setDishPName018] = useState(d01?.dishPName018);
    const HandlePName018 = (e) => {
        const dishPName = e.target.value;
        setDishPName018(dishPName);
    }
    // table dish product quantity
    const [dishQTY018, setDishQTY018] = useState(d01?.dishQTY018);
    const HandleQTY018 = (e) => {
        const dishQTY018 = e.target.value;
        setDishQTY018(dishQTY018);
    }

    // table dish priduct cost 
    const [dishCost018, setDishCost018] = useState(d01?.dishCost018);
    const HandleCost018 = (e) => {
        const dishCost018 = e.target.value;
        setDishCost018(parseFloat(dishCost018).toFixed(2));
    }
    // --------------------------------------
    // table dish product name
    const [dishPName019, setDishPName019] = useState(d01?.dishPName019);
    const HandlePName019 = (e) => {
        const dishPName = e.target.value;
        setDishPName019(dishPName);
    }
    // table dish product quantity
    const [dishQTY019, setDishQTY019] = useState(d01?.dishQTY019);
    const HandleQTY019 = (e) => {
        const dishQTY019 = e.target.value;
        setDishQTY019(dishQTY019);
    }

    // table dish priduct cost 
    const [dishCost019, setDishCost019] = useState(d01?.dishCost019);
    const HandleCost019 = (e) => {
        const dishCost019 = e.target.value;
        setDishCost019(parseFloat(dishCost019).toFixed(2));
    }
    // --------------------------------------
    // table dish product name
    const [dishPName0110, setDishPName0110] = useState(d01?.dishPName0110);
    const HandlePName0110 = (e) => {
        const dishPName = e.target.value;
        setDishPName0110(dishPName);
    }
    // table dish product quantity
    const [dishQTY0110, setDishQTY0110] = useState(d01?.dishQTY0110);
    const HandleQTY0110 = (e) => {
        const dishQTY0110 = e.target.value;
        setDishQTY0110(dishQTY0110);
    }

    // table dish priduct cost 
    const [dishCost0110, setDishCost0110] = useState(d01?.dishCost0110);
    const HandleCost0110 = (e) => {
        const dishCost0110 = e.target.value;
        setDishCost0110(parseFloat(dishCost0110).toFixed(2));
    }
    // --------------------------------------

    // secondary in ===============================================================================================
    // table dish product quantity
    const [dishPName011Sec, setDishPName011Sec] = useState(d01?.dishPName011Sec);
    const HandlePName011Sec = (e) => {
        const dishPName = e.target.value;
        setDishPName011Sec(dishPName);
    }

    const [dishQTY011Sec, setDishQTY011Sec] = useState(d01?.dishQTY011Sec);
    const HandleQTY011Sec = (e) => {
        const dishQTY011Sec = e.target.value;
        setDishQTY011Sec(dishQTY011Sec);
    }


    const [dishCost011Sec, setDishCost011Sec] = useState(d01?.dishCost011Sec);
    const HandleCost011Sec = (e) => {
        const dishCost011Sec = e.target.value;
        setDishCost011Sec(parseFloat(dishCost011Sec).toFixed(2));
    }

    // --------------------------------------
    const [dishPName012Sec, setDishPName012Sec] = useState(d01?.dishPName012Sec);
    const HandlePName012Sec = (e) => {
        const dishPName = e.target.value;
        setDishPName012Sec(dishPName);
    }

    const [dishQTY012Sec, setDishQTY012Sec] = useState(d01?.dishQTY012Sec);
    const HandleQTY012Sec = (e) => {
        const dishQTY012Sec = e.target.value;
        setDishQTY012Sec(dishQTY012Sec);
    }


    const [dishCost012Sec, setDishCost012Sec] = useState(d01?.dishCost012Sec);
    const HandleCost012Sec = (e) => {
        const dishCost012Sec = e.target.value;
        setDishCost012Sec(parseFloat(dishCost012Sec).toFixed(2));
    }

    // --------------------------------------
    const [dishPName013Sec, setDishPName013Sec] = useState(d01?.dishPName013Sec);
    const HandlePName013Sec = (e) => {
        const dishPName = e.target.value;
        setDishPName013Sec(dishPName);
    }

    const [dishQTY013Sec, setDishQTY013Sec] = useState(d01?.dishQTY013Sec);
    const HandleQTY013Sec = (e) => {
        const dishQTY013Sec = e.target.value;
        setDishQTY013Sec(dishQTY013Sec);
    }


    const [dishCost013Sec, setDishCost013Sec] = useState(d01?.dishCost013Sec);
    const HandleCost013Sec = (e) => {
        const dishCost013Sec = e.target.value;
        setDishCost013Sec(parseFloat(dishCost013Sec).toFixed(2));
    }
    // =================================================================================================
    const [handlePrepared011, setHandlePrepared011] = useState(d01?.handlePrepared011);
    const HandlePrepared011 = (e) => {
        const handlePrepared = e.target.value;
        setHandlePrepared011(handlePrepared);
    }
    const [handlePrepared012, setHandlePrepared012] = useState(d01?.handlePrepared012);
    const HandlePrepared012 = (e) => {
        const handlePrepared = e.target.value;
        setHandlePrepared012(handlePrepared);
    }
    const [handlePrepared013, setHandlePrepared013] = useState(d01?.handlePrepared013);
    const HandlePrepared013 = (e) => {
        const handlePrepared = e.target.value;
        setHandlePrepared013(handlePrepared);
    }
    const [handlePrepared014, setHandlePrepared014] = useState(d01?.handlePrepared014);
    const HandlePrepared014 = (e) => {
        const handlePrepared = e.target.value;
        setHandlePrepared014(handlePrepared);
    }

    // --------------------------------------
    //  modal info
    const [modalInfo, setModalInfo] = useState({});


    const totalCost011Sec = dishQTY011Sec && dishCost011Sec ? parseFloat(dishQTY011Sec * dishCost011Sec).toFixed(2) : '0.00';
    const totalCost012Sec = dishQTY012Sec && dishCost012Sec ? parseFloat(dishQTY012Sec * dishCost012Sec).toFixed(2) : '0.00';
    const totalCost013Sec = dishQTY013Sec && dishCost013Sec ? parseFloat(dishQTY013Sec * dishCost013Sec).toFixed(2) : '0.00';

    const totalCost01Sec = parseFloat(parseFloat(totalCost011Sec) + parseFloat(totalCost012Sec) + parseFloat(totalCost013Sec)).toFixed(2);

    const totalCost011 = dishQTY011 && dishCost011 ? parseFloat(dishQTY011 * dishCost011).toFixed(2) : '0.00';
    const totalCost012 = dishQTY012 && dishCost012 ? parseFloat(dishQTY012 * dishCost012).toFixed(2) : '0.00';
    const totalCost013 = dishQTY013 && dishCost013 ? parseFloat(dishQTY013 * dishCost013).toFixed(2) : '0.00';
    const totalCost014 = dishQTY014 && dishCost014 ? parseFloat(dishQTY014 * dishCost014).toFixed(2) : '0.00';
    const totalCost015 = dishQTY015 && dishCost015 ? parseFloat(dishQTY015 * dishCost015).toFixed(2) : '0.00';
    const totalCost016 = dishQTY016 && dishCost016 ? parseFloat(dishQTY016 * dishCost016).toFixed(2) : '0.00';
    const totalCost017 = dishQTY017 && dishCost017 ? parseFloat(dishQTY017 * dishCost017).toFixed(2) : '0.00';
    const totalCost018 = dishQTY018 && dishCost018 ? parseFloat(dishQTY018 * dishCost018).toFixed(2) : '0.00';
    const totalCost019 = dishQTY019 && dishCost019 ? parseFloat(dishQTY019 * dishCost019).toFixed(2) : '0.00';
    const totalCost0110 = dishQTY0110 && dishCost0110 ? parseFloat(dishQTY0110 * dishCost0110).toFixed(2) : '0.00';


    const totalCost01Pri = parseFloat(parseFloat(totalCost011) + parseFloat(totalCost012) + parseFloat(totalCost013) + parseFloat(totalCost014) + parseFloat(totalCost015) + parseFloat(totalCost016) + parseFloat(totalCost017) + parseFloat(totalCost018) + parseFloat(totalCost019) + parseFloat(totalCost0110)).toFixed(2);

    const totalCost01 = parseFloat(parseFloat(totalCost01Pri) + parseFloat(totalCost01Sec)).toFixed(2);

    const netProfit01 = parseFloat(dishEST01 - totalCost01).toFixed(2);
    const costMargin01 = parseFloat((netProfit01 / dishEST01) * 100).toFixed(2);

    // const id = Math.random().toString(36).substr(2, 18);

    const dish01localStorageInfo = {
        totalCost011,
        dishName01,
        dishEST01,
        dishPName011Sec,
        dishPName012Sec,
        dishPName013Sec,
        dishQTY011Sec,
        dishQTY012Sec,
        dishQTY013Sec,
        dishCost011Sec,
        dishCost012Sec,
        dishCost013Sec,
        dishPName011,
        dishPName012,
        dishPName013,
        dishPName014,
        dishPName015,
        dishPName016,
        dishPName017,
        dishPName018,
        dishPName019,
        dishPName0110,
        dishQTY011,
        dishQTY012,
        dishQTY013,
        dishQTY014,
        dishQTY015,
        dishQTY016,
        dishQTY017,
        dishQTY018,
        dishQTY019,
        dishQTY0110,
        dishCost011,
        dishCost012,
        dishCost013,
        dishCost014,
        dishCost015,
        dishCost016,
        dishCost017,
        dishCost018,
        dishCost019,
        dishCost0110,
        totalCost01,
        netProfit01,
        costMargin01,
        date01,
        handlePrepared011,
        handlePrepared012,
        handlePrepared013,
        handlePrepared014,
        modalInfo


    }


    const handleSave = () => {

        fetch(`https://recyclelib-server.vercel.app/dish/${d01._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dish01localStorageInfo)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Dish Updated Successfully');



            })

    }




    return (
        <div className='pb-24 '>
            <h1 className='text-white text-xl font-semibold text-center bg-blue-900 py-5'>RECIPE COST CALCULATOR</h1>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col lg:flex-row w-4/5 mt-5 bg-gray-200 p-3'>

                    {/* heading and value start */}

                    <div className='flex items-center  lg:w-1/2'>
                        <div className='w-1/3 text-blue-900 flex flex-col items-start justify-center gap-1 font-semibold'>
                            <h1>Date</h1>
                            <h1>Dish Name</h1>
                            <h1>Est. Sales Price</h1>
                            <h1>Total Cost</h1>
                            <h1>Cost Margin</h1>
                            <h1>Net Profit</h1>
                        </div>
                        <div className='w-1/3 flex flex-col gap-1 text-center justify-center items-center'>
                            <input type="date" name="" id="" defaultValue={d01?.date01} onChange={HandleDate01} className='w-full text-center outline-none' />
                            <input type="text" defaultValue={d01?.dishName01} onChange={HandleDishName} name="dishName1" className='w-full text-center outline-none' id="" />
                            <div className='flex bg-white justify-center'>
                                <h1 className='pl-10 pr-1'>£ </h1>
                                <input type="number" defaultValue={parseFloat(d01?.dishEST01).toFixed(2)} onChange={HandleEST} className='w-1/2 text-start outline-none' name="dishName1 " id="" />
                            </div>
                            <h1>£ {totalCost01}</h1>
                            <h1>{isFinite(costMargin01) ? costMargin01 : '00.00'}%</h1>
                            <h1>£ {isNaN(netProfit01) ? '0.00' : netProfit01}</h1>

                        </div>
                    </div>


                    {/* graph section  */}
                    <div className='lg:w-1/2 flex justify-center'>
                        <div>
                            <div style={{ width: "200px" }}>
                                <CircularProgressbar
                                    value={costMargin01}
                                    text={`${isNaN(costMargin01) ? '00' : costMargin01}%`}
                                />

                            </div>
                        </div>
                    </div>
                    <div className='fixed bottom-3 left-5 flex flex-col gap-1'>
                        <button className='border-2 bg-black text-white hover:bg-white hover:text-black ease-in-out duration-300 py-3 px-5 font-semibold rounded-2xl' onClick={handleSave}>Save</button>
                        <Link to='/' className='border-2 bg-black text-white hover:bg-white hover:text-black ease-in-out duration-300 py-3 px-5 font-semibold rounded-2xl'>Home</Link>


                    </div>
                </div>
                {/* heading and value end */}

                {/*primary Ingredients section start */}
                <div className='lg:w-4/5 mt-5 flex flex-col lg:flex-row gap-5'>
                    <div className='px-2 lg:px-0 lg:w-1/2'>
                        <h1 className='pl-5 py-2 bg-blue-900 text-white font-semibold '>PRIMARY INGREDIENTS</h1>
                        <div className='flex  text-center bg-gray-300 text-sm lg:text-base'>
                            <div className='w-2/5 flex flex-col justify-center items-center'>
                                <h1>Product Name</h1>
                                <input type="text" onChange={HandlePName011} defaultValue={d01?.dishPName011} className={borderClass} />
                                <input type="text" onChange={HandlePName012} defaultValue={d01?.dishPName012} className={borderClass} />
                                <input type="text" onChange={HandlePName013} defaultValue={d01?.dishPName013} className={borderClass} />
                                <input type="text" onChange={HandlePName014} defaultValue={d01?.dishPName014} className={borderClass} />
                                <input type="text" onChange={HandlePName015} defaultValue={d01?.dishPName015} className={borderClass} />
                                <input type="text" onChange={HandlePName016} defaultValue={d01?.dishPName016} className={borderClass} />
                                <input type="text" onChange={HandlePName017} defaultValue={d01?.dishPName017} className={borderClass} />
                                <input type="text" onChange={HandlePName018} defaultValue={d01?.dishPName018} className={borderClass} />
                                <input type="text" onChange={HandlePName019} defaultValue={d01?.dishPName019} className={borderClass} />
                                <input type="text" onChange={HandlePName0110} defaultValue={d01?.dishPName0110} className={borderClass} />

                                <h1 className='bg-blue-900 w-full text-white'>Total</h1>
                            </div>
                            <div className='w-1/5 flex flex-col justify-center items-center '>
                                <h1>Qty.</h1>
                                <input type="number" onChange={HandleQTY011} defaultValue={isNaN(d01?.dishQTY011) ? '0' : d01?.dishQTY011} className={borderClass} />
                                <input type="number" onChange={HandleQTY012} defaultValue={isNaN(d01?.dishQTY012) ? '0' : d01?.dishQTY012} className={borderClass} />
                                <input type="number" onChange={HandleQTY013} defaultValue={isNaN(d01?.dishQTY013) ? '0' : d01?.dishQTY013} className={borderClass} />
                                <input type="number" onChange={HandleQTY014} defaultValue={isNaN(d01?.dishQTY014) ? '0' : d01?.dishQTY014} className={borderClass} />
                                <input type="number" onChange={HandleQTY015} defaultValue={isNaN(d01?.dishQTY015) ? '0' : d01?.dishQTY015} className={borderClass} />
                                <input type="number" onChange={HandleQTY016} defaultValue={isNaN(d01?.dishQTY016) ? '0' : d01?.dishQTY016} className={borderClass} />
                                <input type="number" onChange={HandleQTY017} defaultValue={isNaN(d01?.dishQTY017) ? '0' : d01?.dishQTY017} className={borderClass} />
                                <input type="number" onChange={HandleQTY018} defaultValue={isNaN(d01?.dishQTY018) ? '0' : d01?.dishQTY018} className={borderClass} />
                                <input type="number" onChange={HandleQTY019} defaultValue={isNaN(d01?.dishQTY019) ? '0' : d01?.dishQTY019} className={borderClass} />
                                <input type="number" onChange={HandleQTY0110} defaultValue={isNaN(d01?.dishQTY0110) ? '0' : d01?.dishQTY0110} className={borderClass} />

                                <h1 className='w-full bg-blue-900 text-blue-900'>.</h1>
                            </div>
                            <div className='w-1/5 flex flex-col justify-center items-center '>
                                <h1>Cost(per unit)</h1>
                                <input type="number" onChange={HandleCost011} defaultValue={isNaN(d01?.dishCost011) ? '0.00' : d01?.dishCost011} className={borderClass} />
                                <input type="number" onChange={HandleCost012} defaultValue={isNaN(d01?.dishCost012) ? '0.00' : d01?.dishCost012} className={borderClass} />
                                <input type="number" onChange={HandleCost013} defaultValue={isNaN(d01?.dishCost013) ? '0.00' : d01?.dishCost013} className={borderClass} />
                                <input type="number" onChange={HandleCost014} defaultValue={isNaN(d01?.dishCost014) ? '0.00' : d01?.dishCost014} className={borderClass} />
                                <input type="number" onChange={HandleCost015} defaultValue={isNaN(d01?.dishCost015) ? '0.00' : d01?.dishCost015} className={borderClass} />
                                <input type="number" onChange={HandleCost016} defaultValue={isNaN(d01?.dishCost016) ? '0.00' : d01?.dishCost016} className={borderClass} />
                                <input type="number" onChange={HandleCost017} defaultValue={isNaN(d01?.dishCost017) ? '0.00' : d01?.dishCost017} className={borderClass} />
                                <input type="number" onChange={HandleCost018} defaultValue={isNaN(d01?.dishCost018) ? '0.00' : d01?.dishCost018} className={borderClass} />
                                <input type="number" onChange={HandleCost019} defaultValue={isNaN(d01?.dishCost019) ? '0.00' : d01?.dishCost019} className={borderClass} />
                                <input type="number" onChange={HandleCost0110} defaultValue={isNaN(d01?.dishCost0110) ? '0.00' : d01?.dishCost0110} className={borderClass} />

                                <h1 className='w-full bg-blue-900 text-blue-900'>.</h1>
                            </div>
                            <div className='w-1/5 flex flex-col justify-center items-center '>
                                <h1>Total Cost</h1>
                                <h1 className='w-full bg-white border border-black/60 border-dotted'>£ {isNaN(totalCost011) ? '0.00' : totalCost011}</h1>
                                <h1 className='w-full bg-white border border-black/60 border-dotted'>£ {isNaN(totalCost012) ? '0.00' : totalCost012}</h1>
                                <h1 className='w-full bg-white border border-black/60 border-dotted'>£ {isNaN(totalCost013) ? '0.00' : totalCost013}</h1>
                                <h1 className='w-full bg-white border border-black/60 border-dotted'>£ {isNaN(totalCost014) ? '0.00' : totalCost014}</h1>
                                <h1 className='w-full bg-white border border-black/60 border-dotted'>£ {isNaN(totalCost015) ? '0.00' : totalCost015}</h1>
                                <h1 className='w-full bg-white border border-black/60 border-dotted'>£ {isNaN(totalCost016) ? '0.00' : totalCost016}</h1>
                                <h1 className='w-full bg-white border border-black/60 border-dotted'>£ {isNaN(totalCost017) ? '0.00' : totalCost017}</h1>
                                <h1 className='w-full bg-white border border-black/60 border-dotted'>£ {isNaN(totalCost018) ? '0.00' : totalCost018}</h1>
                                <h1 className='w-full bg-white border border-black/60 border-dotted'>£ {isNaN(totalCost019) ? '0.00' : totalCost019}</h1>
                                <h1 className='w-full bg-white border border-black/60 border-dotted'>£ {isNaN(totalCost0110) ? '0.00' : totalCost0110}</h1>


                                <h1 className='w-full bg-blue-900 text-white'>£ {totalCost01Pri}</h1>
                            </div>


                        </div>

                        {/*primary Ingredients section end */}

                        {/*SECONDARY Ingredients section start */}


                        <h1 className='pl-5 py-2  mt-5 bg-green-900 text-white font-semibold '>SECONDARY INGREDIENTS</h1>
                        <div className='flex  text-center bg-gray-300 text-sm lg:text-base '>
                            <div className='w-2/5 flex flex-col justify-center items-center'>
                                <h1 className=''>Product Name</h1>
                                <input type="text" onChange={HandlePName011Sec} defaultValue={d01?.dishPName011Sec} className={borderClass} />
                                <input type="text" onChange={HandlePName012Sec} defaultValue={d01?.dishPName012Sec} className={borderClass} />
                                <input type="text" onChange={HandlePName013Sec} defaultValue={d01?.dishPName013Sec} className={borderClass} />

                                <h1 className='bg-green-900 w-full text-white'>Total</h1>
                            </div>
                            <div className='w-1/5 flex flex-col justify-center items-center '>
                                <h1>Qty.</h1>
                                <input type="text" onChange={HandleQTY011Sec} name="qty" defaultValue={isNaN(d01?.dishQTY011Sec) ? '0' : d01?.dishQTY011Sec} className={borderClass} />
                                <input type="text" onChange={HandleQTY012Sec} name="qty" defaultValue={isNaN(d01?.dishQTY012Sec) ? '0' : d01?.dishQTY012Sec} className={borderClass} />
                                <input type="text" onChange={HandleQTY013Sec} name="qty" defaultValue={isNaN(d01?.dishQTY013Sec) ? '0' : d01?.dishQTY013Sec} className={borderClass} />

                                <h1 className='w-full bg-green-900 text-green-900'>.</h1>
                            </div>
                            <div className='w-1/5 flex flex-col justify-center items-center '>
                                <h1>Cost(per unit)</h1>
                                <input type="text" onChange={HandleCost011Sec} name="cost" defaultValue={isNaN(d01?.dishCost011Sec) ? '0.00' : d01?.dishCost011Sec} className={borderClass} />
                                <input type="text" onChange={HandleCost012Sec} name="cost" defaultValue={isNaN(d01?.dishCost012Sec) ? '0.00' : d01?.dishCost012Sec} className={borderClass} />
                                <input type="text" onChange={HandleCost013Sec} name="cost" defaultValue={isNaN(d01?.dishCost013Sec) ? '0.00' : d01?.dishCost013Sec} className={borderClass} />

                                <h1 className='w-full bg-green-900 text-green-900'>.</h1>
                            </div>
                            <div className='w-1/5 flex flex-col justify-center items-center '>
                                <h1>Total Cost</h1>
                                <h1 className='w-full bg-white border border-black/60 border-dotted'>£ {isNaN(totalCost011Sec) ? '0.00' : totalCost011Sec}</h1>
                                <h1 className='w-full bg-white border border-black/60 border-dotted'>£ {isNaN(totalCost012Sec) ? '0.00' : totalCost012Sec}</h1>
                                <h1 className='w-full bg-white border border-black/60 border-dotted'>£ {isNaN(totalCost013Sec) ? '0.00' : totalCost013Sec}</h1>


                                <h1 className='w-full bg-green-900 text-white'>£ {totalCost01Sec}</h1>
                            </div>


                        </div>


                    </div>

                    <div className='px-2 lg:px-0 lg:w-1/2'>
                        <div className='w-full flex justify-center'>
                            <img className='w-1/2 ' src={d01?.modalInfo?.image} alt="" />
                        </div>
                        <div>
                            <h1 className='font-bold pt-5'>PREPARATION</h1>
                            <p className='text-sm'>{d01?.modalInfo?.preparation}</p>
                            <Modal01 setModalInfo={setModalInfo} d01={d01?.modalInfo} />
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-4/5'>
                    <h1 className='pl-5 py-2 w-full mt-5 bg-blue-900 text-white font-semibold '>ALLERGIES</h1>
                    <div className='h-24 bg-gray-200 p-3'>
                        <p>{d01?.modalInfo?.allergies}</p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-5 mt-5'>
                    <div>
                        <div className='flex'>
                            <h1>Prepared By</h1>
                            <input type="text" onChange={HandlePrepared011} defaultValue={d01?.handlePrepared011} className='border border-b-2 border-dotted border-t-0 border-r-0 border-l-0 border-black outline-none text-center' />
                        </div>
                        <div className='flex mt-2'>
                            <h1>Occupation</h1>
                            <input type="text" onChange={HandlePrepared012} defaultValue={d01?.handlePrepared012} className='border border-b-2 border-dotted border-t-0 border-r-0 border-l-0 border-black outline-none text-center' />
                        </div>
                    </div>
                    <div>
                        <div className='flex'>
                            <h1>Approved By</h1>
                            <input type="text" onChange={HandlePrepared013} defaultValue={d01?.handlePrepared013} className='border border-b-2 border-dotted border-t-0 border-r-0 border-l-0 border-black outline-none text-center' />
                        </div>
                        <div className='flex mt-2'>
                            <h1>Occupation</h1>
                            <input type="text" onChange={HandlePrepared014} defaultValue={d01?.handlePrepared014} className='border border-b-2 border-dotted border-t-0 border-r-0 border-l-0 border-black outline-none text-center' />
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Dish01;