import React from 'react'

const Output = ({optEMI}) => {
  return (
    <div className='flex items-center justify-center '>
        <p className='text-lg '>Your EMI is :  {optEMI}</p>
    </div>
  )
}

export default Output