import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Thankyou() {

    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/')
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
  <h2 className="text-2xl font-bold mb-4">Thankyou</h2>
  <p>Your responses have been submitted successfully.</p>
  <div>
      <button onClick={handleClick} className=" p-5 w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200">Go back</button>
    </div>
  </div>
  
        
      );
}