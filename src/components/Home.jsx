import React, {useState} from "react";
import menu from '../assests/menu.png'
import filter from '../assests/filtter.png'
import profile from '../assests/Rectangle 97.png'
import Slider from '../components/Slider'
import Search from '../assests/search.png'
import bag from '../assests/bag-image.png'
import shoe from '../assests/shoe-image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faShoppingCart, faBell } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
const  Home = () =>{
   
    const [activeButton, setActiveButton] = useState('home');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
    return(
        <div className="w-[500px] p-6 pt-2 font-sans overflow-hidden">
        <div className="flex justify-between">
            <img className="w-fit h-fit" src={menu} alt="" />
            <img className="w-fit" src={profile} alt="" /> 
        </div>
        <div>
            <h1 className="text-[25px] font-bold">Welcome, <br /> <span className="font-semibold text-slate-500"> Our Fashions App</span></h1>
        </div>
        <div className="my-4">
            <form className="flex gap-4 " action="">
            <div className="relative w-[80%]">
      <input
        type="text"
        className="w-full h-10 p-6 rounded-full bg-gray-200"
        placeholder="Search"
      />
      <div className="absolute top-0 right-0 h-full flex items-center justify-center pr-3">
      <img className=" w-8 h-8 " src={Search} alt="" />
      </div>
    </div>
                <img className="w-fit h-fit" src={filter} alt="" />
            </form>
        </div>
        <div>
        <Slider/>
        </div> 
        <div>
            <div className="flex justify-between my-2">
        <h1 className="text-[18px] font-bold">New Arrivals</h1>
        <span className=" text-[12px] flex font-semibold text-slate-500 self-center">View all</span>
        </div>
        <div className="flex gap-6">
        <Link className="logo" to="/product"> 
           <div className="text-center">
            <img src={bag} alt="" />
            <h4 className="mt-2 text-[14px] font-bold">The Marc Jacobs </h4>
            <h4>Traveler Tote</h4>
            <span className="text-[14px] font-bold">$195.00</span>
            </div> 
            </Link>
            <Link className="logo" to="/product"> 
            <div className="text-center">
            <img src={shoe} alt="" />
            <h4 className="mt-2 text-[14px] font-bold">The Marc Jacobs </h4>
            <h4>Traveler Tote</h4>
            <span className="text-[14px] font-bold">$195.00</span>
            </div> 
            </Link>
        </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 h-16 bg-white rounded-t-2xl shadow-inner flex justify-around items-center">
      <div
        className={`flex flex-col items-center ${
          activeButton === 'home' ? 'text-gray-800' : 'text-gray-400'
        }`}
        onClick={() => handleButtonClick('home')}
      >
        <FontAwesomeIcon icon={faHome} />
        <span className="text-sm font-bold">Home</span>
      </div>
      <div
        className={`flex flex-col items-center ${
          activeButton === 'search' ? 'text-gray-800' : 'text-gray-400'
        }`}
        onClick={() => handleButtonClick('search')}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="text-sm font-bold">Cart</span>
      </div>
      <div
        className={`flex flex-col items-center ${
          activeButton === 'add' ? 'text-gray-800' : 'text-gray-400'
        }`}
        onClick={() => handleButtonClick('add')}
      >
        <FontAwesomeIcon icon={faBell} />
        <span className="text-sm font-bold">Alert</span>
      </div>
      <div
        className={`flex flex-col items-center ${
          activeButton === 'profile' ? 'text-gray-800' : 'text-gray-400'
        }`}
        onClick={() => handleButtonClick('profile')}
      >
        <FontAwesomeIcon icon={faUser} />
        <span className="text-sm font-bold">Profile</span>
      </div>
    </div>
        </div>
        
    )
}
export default Home 