"use client"

import {  useState } from "react"

export default function CounterApp(){
    const [counter,setCounter] = useState(0);

    function addEffectValue(){
        setCounter(counter+1)
    }

    function decrementEffectValue(){
        
            setCounter(counter-1)
            if (counter <1) {
                setCounter(0)
            }
    }

    function resetCounter(){
        setCounter(0)
    }
    return(
        <main className="h-screen w-screen p-60 bg-slate-800 md:h-screen  md:p-24 md:w-screen max-sm:p-10 max-sm:w-screen max-sm:h-screen">
            <div className="border-2 border-slate-500 h-[500px] p-10 rounded-xl max-sm:border-[1.5px] max-sm:border-slate-500 max-sm:h-[520px]  max-sm:p-5">
            <h1 className="text-center text-5xl text-stone-100 font-serif max-sm:text-center max-sm:text-3xl">Counter App</h1>
            <p className="text-[160px]  text-center text-green-400 max-sm:text-[100px]">{counter}</p>
           <div className="flex justify-center max-sm:block md:flex md:justify-center">
           <button onClick={()=>addEffectValue()} className=" rounded-lg w-40 bg-gray-400 h-10 m-5 max-sm:rounded-md max-sm:w-20 max-sm:ml-20 max-sm:m-3 ">+</button>
           <button onClick={()=>decrementEffectValue()} className="rounded-lg w-40 bg-gray-400 h-10 m-5 max-sm:rounded-md max-sm:w-20 max-sm:ml-20 max-sm:m-3">-</button>
           </div>
         <div className="flex justify-center max-sm:block">
         <button onClick={()=>resetCounter()} className="rounded-lg w-40 bg-gray-400 h-10 max-sm:rounded-md max-sm:w-20 max-sm:ml-20 max-sm:m-3">reset</button>
         </div>
            </div>
        </main>
    )

}