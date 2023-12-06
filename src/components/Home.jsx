import React, { useState } from 'react'
import { TextField } from '@mui/material'
// import Stack from '@mui/material'
// import {Button} from '@mui/material'
// import Button from '@mui/material-next/Button';



export const Home = () => {

    const [principle,setPrinciple] = useState(0);
    const [time,setTime] = useState(0);
    const [rate,setRate] = useState(0);
    let [calculate,setCalculate] = useState(0);

    const calcSi = (e) => {
        e.preventDefault();

        if (principle===0 || time===0 || rate===0) {
            alert("Please enter the values");
        } else {
            let calculate = (parseInt(principle)*parseInt(time)*parseInt(rate))/100;
            console.log(calculate)
            setCalculate(parseInt(calculate));            
        }
    }

    function clickHandler(event) {
        setCalculate(0);
        setPrinciple(0);
        setTime(0);
        setRate(0);
    };

  return (
    <div className=' flex justify-center items-center flex-col gap-y-10 border h-[600px] w-[1080px] mx-auto shadow-[0_20px_50px_rgba(48,_47,_77,_0.7)] mt-28'>
        <div className='rounded-lg gap-y-2 h-[80%] w-[50%] border bg-[#E1F2FE]'>
                <div className='flex flex-col justify-center items-center mb-10 mt-8 '>
                    <p className='text-xl mb-2 opacity-[70%]'>Your Simple Interest is</p>
                    <h2 className='text-4xl opacity-[80%]'>{calculate}</h2>
                </div>
            <form onSubmit={calcSi}>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <div>
                        <TextField type='number' value={principle || ""} onChange={(event)=>setPrinciple(event.target.value)} label="Principle Amount" variant='outlined'/>
                    </div>
                    <div>
                        <TextField type='number' value={time || ""} onChange={(event)=>setTime(event.target.value)} label="Total Time" variant='outlined'/>
                    </div>
                    <div>
                        <TextField type='number' value={rate || ""} onChange={(event)=>setRate(event.target.value)} label="Rate of Interest" variant='outlined'/>
                    </div>
                    <div className='opacity-[90%]'>
                        <button 
                        className='text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700  mt-6'
                        >Calculate</button>
                    </div>
                </div>
            </form>
                        <button
                        onClick={clickHandler} 
                        class=" font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white  dark:hover:bg-gray-700 ml-56 mb-8">
                        Reset
                        </button>
        </div>

    </div>
  )
}
