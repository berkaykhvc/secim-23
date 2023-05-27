import React from "react";
import secimlogo from "./screens/secimlogo.png";
import "./screens/Banner.css"
import {useNavigate} from "react-router-dom";

function Nav() {
  const history = useNavigate();

  return (    
    <div className="navb z-10">
      <div className="flex flex-col justify-center lg:flex-row lg:justify-around">
        <button onClick={() => history("/")} className="h-10 w-30 bg-red-800 order-3 hover:bg-red-900 active:bg-rose-800 text-white font-bold py-2 px-4 mt-10 rounded md:text-md lg:text-md zl:h-10 tl:h-16 lg:w-1/6 lg:order-first">
          Cumhurbaşkanı Seçim Sonuçları
        </button>
        <img onClick={() => history("/")} className="flex m-auto w-60 order-first h-25 mt-5 cursor-pointer lg:order-1 lg:mt-5 lg:m-0" 
        src={secimlogo} 
        alt="" />
        <button onClick={() => history("/milletvekili")} className="h-10 w-30 bg-red-800 hover:bg-red-900 active:bg-rose-800 text-white font-bold py-2 px-4 mt-10 rounded lg:h-10 lg:order-2 lg:w-1/6">
          Milletvekili Seçim Sonuçları  
        </button>
      </div>
      <hr class="h-[2px] mt-10 bg-red-900 border-0 lg:mt-5 xl:h-[4px] mb-[3px]"></hr>
    </div>
  );
}

export default Nav;
