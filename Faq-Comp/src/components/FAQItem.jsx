import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const FAQItem = ({faq,index}) => {
    const [isShow , setIsShow] = useState(false);
    useEffect(() => {
        if(index ==0){
            setIsShow(true);
        }
    }, [])

    const handleClick = () =>{
        setIsShow((isShow) => !isShow);
    }
  return (
    <>
    <div className='faq-box bg-gray-300 text-left rounded-md px-4 py-6 mb-4 flex flex-col gap-4'>
        <div onClick={handleClick} className='faq-qus font-semibold cursor-pointer flex items-center justify-between text-xl '>
            <div  key={index}>{faq.question}</div>
            <button className={isShow==false ? 'tranform transition-[1.2s ease-in-out] rotate-180' :'' }> < IoIosArrowDown /> </button>
        </div>
        {isShow && <div key={index} className='faq-ans text-lg text-[#666] overflow-hidden'>{faq.answer}</div> }
        
    </div>
    </>
  )
}

export default FAQItem