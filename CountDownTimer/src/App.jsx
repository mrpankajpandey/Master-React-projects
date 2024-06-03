import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import ShowCounter from "./components/ShowCounter";
import Toast, { Toaster } from 'react-hot-toast';



const App = () => {
  const [isStart, setIsStart] = useState(false);
  const [isPasue, setISPasue] = useState(false)
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(0);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = parseFloat(e.target.value);

    if (id == "hours") {
      setHours(value);
    } else if (id == "minutes") {
      setMinutes(value);
    } else{
      setSeconds(value);
    }
  };
  const handleStart = () => {
  if(hours < 0 || minutes <0 || seconds <0 ){
   
    Toast.error("Invalid Input ")
    return
  }else{

    setIsStart(true);
  }
    
  };
  const resetTimer = () =>{
    setHours(0)
    setMinutes(0)
    setSeconds(0)
    clearInterval(timerId)
  }
  const handleReset = () => {
      setIsStart(false);
      resetTimer()

    
  };
  const handlePasue  = () =>{
     setISPasue(true);
     clearInterval(timerId);
  }
  const handleResume = () =>{
    setISPasue(false);
    runTimer(hours, minutes, seconds)

  }
  const runTimer = (sec, min, hr, tid) =>{
      if(sec>0){
        setSeconds((s) => s-1);
      }else if(sec === 0 && min>0){
        setMinutes((m) => m-1);
        setSeconds(59);
      }else if(min===0){
        setHours((h) => h-1);
        setMinutes(59);
        setSeconds(59);
      }
      if(sec === 0 && min  === 0 && sec === 0){
       handleReset();
       Toast.success('Timer is Finished !')
       clearInterval(tid)
       return;
      }
  }
  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
          runTimer(seconds,minutes, hours, tid)
      }, 1000);
      setTimerId(tid);
    }
    return () =>{
      clearInterval(tid)
    }
  }, [isStart, hours, minutes, seconds]);
  return (
    <>
      <div className="h-screen w-full flex flex-col items-center text-white bg-black gap-5 p-10 border-gray-600">
        <Header></Header>
        {!isStart && (
          <Input inputTime={handleInput} countStart={handleStart}></Input>
        )}

        {isStart && <ShowCounter reset={handleReset} hour={hours} minute={minutes} second={seconds} pause={handlePasue} isPasue ={isPasue} handleResume ={handleResume} handlePasue ={handlePasue}></ShowCounter>}
      </div>
      <Toaster />
      
    </>
  );
};

export default App;
