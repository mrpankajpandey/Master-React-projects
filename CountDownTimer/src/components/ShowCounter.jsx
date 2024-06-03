import React from 'react'

const ShowCounter = ({reset, hour, minute, second , isPasue, handleResume, handlePasue}) => {
  return (
    <div className='flex flex-col gap-4 items-center'> 
        <h1 className='text-6xl font-semibold'>Coundown Start</h1>
        <div className='flex text-5xl justify-center gap-3 '>
            <div>{hour < 10 ? `0${hour}` : hour}</div>
            <span>:</span>
            <div>{minute < 10 ? `0${minute}` : minute}</div>
            <span>:</span>
            <div>{second < 10? `0${second}`:second}</div>
            
        </div>
        <div className='flex gap-3 '>
          {!isPasue && ( 
            <button onClick={() => handlePasue()} className='px-4 py-2 bg-purple-600 rounded-lg ' >Pause</button>
          )}
           {isPasue && (
            <button onClick={() => handleResume()} className='px-4 py-2 bg-purple-600 rounded-lg ' >Resume</button>
           )}
            
            <button onClick={() => reset()} className='px-4 py-2 bg-green-400 rounded-lg'>Reset</button>
        </div>
    </div>
  )
}

export default ShowCounter