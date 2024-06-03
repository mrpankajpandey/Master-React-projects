import React from 'react'

const Input = ({input}) => {

  return ( 
    <div className=' flex flex-col px-4 py-6'>
        <div className='mb-6'>

        <label className='text-xl' htmlFor="">Principle</label>
        <input id="principle" onChange={input} className='w-full text-xl outline-none rounded-md px-2 py-1' type="number" />
        </div>
        <div className='mb-6'>

        <label className='text-xl' htmlFor="">Interest</label>
        <input id='interest' onChange={input} className='w-full text-xl outline-none rounded-md px-2 py-1' type="number" />
        </div>
        <div>

        <label className='text' htmlFor="">Year's</label>
        <input id='year' onChange={input} className='w-full text-xl outline-none rounded-md px-2 py-1' type="number" />
        </div>
       
    </div>
  )
}

export default Input