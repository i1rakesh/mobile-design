import React, { useState, useEffect } from 'react';
import loader from "../assests/loader.gif";
import ok from '../assests/icons8-ok.gif';
const Form = () => {
    const [submitted, setSubmitted] = useState(false);
    const [processing, setProcessing] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setProcessing(true);
      // submission delay with setTimeout
      setTimeout(() => {
  
        setSubmitted(true);
        setProcessing(false);
      }, 2000);
    };
  
    const handleReset = () => {
      setSubmitted(false);
    };
  
    useEffect(() => {
      if (submitted) {
        const timer = setTimeout(() => {
          handleReset();
        }, 5000);
  
        return () => clearTimeout(timer);
      }
    }, [submitted]);
  
    if (processing) {
      return (
        <div className="bg-pink-100 shadow-md rounded-lg p-[8rem] text-center " >
        <div className='justify-center self-center w-full flex'>
            <img  src={loader} alt="" />
            </div>
          <h2 className="text-2xl font-semibold mb-6" >Payment is processing</h2>
          <h4>Wait do not close this screen</h4>
        </div>
      );
    }
  
    if (submitted) {
      return (
        <div className="bg-pink-100 shadow-md rounded-lg p-[8rem] text-center " >
        <div className='justify-center self-center w-full flex'>
            <img  src={ok} alt="" />
            </div>
          <h2 className="text-2xl font-semibold mb-6" >Payment is processing</h2>
          <h4>Your order is now on the way.Please check your email for the receipt</h4>
        </div>
      );
    }
    return (
        
        <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="bg-pink-100 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Enter your Details</h2>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-2">
              Card Number
            </label>
            <input
              type="text"              
              required
              title="Please enter a 16-digit number"
              className="w-full border-2 border-black rounded-lg p-2"
              
              pattern="[0-9]{16}"
              placeholder="Enter card number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cardName" className="block text-gray-700 font-medium mb-2">
              Name on card
            </label>
            <input
              type="text"  
              required
              className="w-full border-2 border-black rounded-lg p-2"
              placeholder="Enter card name"
            />
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label htmlFor="expiryDate" className="block text-gray-700 font-medium mb-2">
                Expiration Date
              </label>
              <input
                type="text"
                required
                title="Enter in a format MM/YY"
                className="w-full border-2 border-black rounded-lg p-2"
                pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
                placeholder="MM/YY"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="cvv" className="block text-gray-700 font-medium mb-2">
                Security code 
              </label>
              <input
                type="text"
                required
                className="w-full border-2 border-black rounded-lg p-2"
                placeholder="Code"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium py-2 px-4 rounded-lg"
          >
            Pay Now
          </button>
        </form>
      </div>
    
    );
  };
  
  export default Form;