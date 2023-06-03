import React, { useState } from "react";
import stockImg from "../assests/stock-image.png";
import star from "../assests/star.png";
import bag from "../assests/icons8-bag-48.png"
import back from "../assests/back.png"
import cart from "../assests/cart.png"
import {Link} from "react-router-dom";

const Product = () => {
  const [count, setCount] = useState(1);
  const price = 198; // Price of the product
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const [selectedSize, setSelectedSize] = useState('m');

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  const calculateTotalPrice = () => {
    return count * price;
  };
  return (
    <div className="w-[500px] font-sans overflow-hidden">
        <div className="relative">
      <img className="w-full h-[55vh]" src={stockImg} alt="" />
      <button className="absolute top-0 left-0 p-3 m-4 bg-gray-800 text-white rounded-full">
        <img src={back} alt="" />
      </button>
      <button className="absolute top-0 right-0 p-3 m-4 bg-white rounded-full">
        <img src={cart} alt="" />
      </button>
      </div>
      <div>
      <div className="flex p-4 shadow-inner rounded-t-2xl  justify-between">
        <div>
        <h1 className="text-[18px] font-bold">Roller Rabbit</h1>
        <span className="text-[12px] font-semibold text-slate-500">
          Vado Odelle Dress
        </span>
        <div className="flex gap-4">
        <img className=" flex self-center w-fit h-fit " src={star} alt="" />
        <span className="text-[12px] font-semibold text-slate-500">
          (320) reviews
        </span>
        </div>
        </div>
        <div>
        <div className="w-full text-center bg-gray-200 rounded-3xl">
            
          <div className="flex justify-center items-center">
            <button
              className="px-4 py-2  text-gray-600 font-bold text-xl "
              onClick={handleDecrement}
            >
              -
            </button>
            <h2 className="text-2xl font-semibold">{count}</h2>
            <button
              className="px-4 py-2  text-gray-600 font-bold text-xl "
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          </div>
          
          <span className="text-[14px] font-bold">Available in stock </span>
        </div>
        </div>
        <div className="p-4">
            <h1 className="text-[18px] font-bold">Size</h1>
            <div className="mt-2 flex justify-evenly ">
      <button
        className={`px-4 py-2 rounded-full ${
          selectedSize === 's' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => handleSizeChange('s')}
      >
        S
      </button>
      <button
        className={`px-4 py-2 rounded-full ${
          selectedSize === 'm' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => handleSizeChange('m')}
      >
        M
      </button>
      <button
        className={`px-4 py-2 rounded-full ${
          selectedSize === 'l' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => handleSizeChange('l')}
      >
        L
      </button>
      <button
        className={`px-4 py-2 rounded-full ${
          selectedSize === 'xl' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => handleSizeChange('xl')}
      >
        XL
      </button>
      <button
        className={`px-4 py-2 rounded-full ${
          selectedSize === 'xxl' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => handleSizeChange('xxl')}
      >
        XXL
      </button>
    </div>
        </div>
        <div className="p-4">
            <h1 className="text-[18px] font-bold" >Description</h1>
            <p className="text-gray-600">Get a little lift from these Sam Edelman sandals featuring ruched 
                straps and leather lace-up ties, while a braided jute sole makes a fresh statement for summer.</p>
        </div>
        <div className="flex justify-between">
            <div className="px-4">
            
                <span> Total Price</span><br/>
                <span className="text-[18px] font-bold">${calculateTotalPrice()}</span>
               
            </div>
          <div>
          <Link className="logo" to="/payment"> 
            <button className="flex gap-4 text-[18px] font-bold text-white bg-black py-4 px-6 rounded-3xl ">
                <img src={bag} alt="" />
                <span className="self-center">Buy Know</span>
            </button>
            </Link>
          </div>
        </div>
        </div>
    </div>
  );
};
export default Product;
