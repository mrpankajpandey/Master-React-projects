import React,  { useEffect, useState }  from 'react'
import Input from './components/Input'
import Output from './components/Output'
const App = () => {
  const[principle, setPrinciple] = useState(0);
  const[interest, setInterest] = useState(0);
  const[year, setYear] = useState(0);
  const[emi, setEMI] = useState(0);

  const handleOnChange = (e) =>{
      
      const id = e.target.id;
      const value = parseInt(e.target.value);
      // console.log('ID :', id , "value : ", value);
      if(id === 'principle'){
          setPrinciple(value);
      }else if(id=== 'interest'){
          setInterest(value);
      }else{
          setYear(value)
      }
     console.log(principle, interest, year);

  }
  const calculateEMI = () =>{
          let r = interest;
          if(principle && r && year){
               r = r / 12 / 100 // per month
               const calcPow = Math.pow(1+r, year * 12);
               const amount = principle * ((r * calcPow) / ( calcPow -1));
               setEMI(Math.round(amount));
          }
  }
  useEffect(() => {
        calculateEMI();
  }, [principle, interest, year])

 
  return (
    <div className='h-screen flex flex-col items-center pt-12 bg-slate-400'>
      <div className='border rounded-md px-3 py-6 shadow-md bg-gray-400'>

      <h1 className='text-2xl font-semibold text-center'>Mortage Calculator</h1>
      <div className=''>
        <Input input = {handleOnChange}></Input>
      </div>
       <div><Output optEMI={emi}></Output></div>
      </div>
    </div>
  )
}

export default App