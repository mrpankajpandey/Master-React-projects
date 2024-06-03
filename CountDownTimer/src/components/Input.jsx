import React from 'react'

const Input = ({countStart, inputTime}) => {
  return (
    <div className='flex flex-col'>
      <div className='flex gap-4'>
        <input onChange={inputTime}  className='h-[50px] w-[80px] border-none text-black outline-none text-center m-2  text-xl' type="number" id='hours' placeholder='HH' />
        <input onChange={inputTime}   className='h-[50px] w-[80px] border-none text-black outline-none text-center m-2 p-3 text-xl' type="number" id='minutes' placeholder='MM' />
        <input onChange={inputTime}   className='h-[50px] w-[80px] border-none text-black outline-none text-center m-2 p-3 text-xl' type="number" id='seconds' placeholder='SS' />
      </div>
      <button onClick = {countStart} className='mt-3 px-5 py-2 text-white bg-green-500 cursor-pointer rounded-lg'>Start</button>
    </div>
  )
}

export default Input