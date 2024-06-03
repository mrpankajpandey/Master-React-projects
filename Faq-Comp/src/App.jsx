import React from 'react'
import FAQComp from './components/FAQComp'

const App = () => {
  return (
    <>
    <div className='h-screen flex flex-col items-center  mt-16 '>
      <div className='w-1/2  flex flex-col border px-5 py-6 gap-6 shadow-md '>

     <h1 className='text-2xl font-semibold mb-5 text-center'>Frequently asked Questions ?</h1>
    <FAQComp></FAQComp>
      </div>
    </div>
    </>

  )
}

export default App