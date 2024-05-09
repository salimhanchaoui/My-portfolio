import React, { useState }  from 'react';
import {NavMenu} from "../components/NavMenu";

export const HeaderNav=()=>{
     const [isScroll, setIsScroll]= useState(false);
     window.onscroll = function (e) {  
         if(window.pageYOffset>0){
      setIsScroll(true);
    }else{
        setIsScroll(false);
    }
        } 
    return(
        <header className={`${isScroll ? 'bg-white shadow-lg': 'bg-transparent'} transition-all duration-500 ease-in-out fixed top-0 w-full`}>
           
            <div className="h-20 p-4 flex justify-between items-center  md:mx-32">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <img className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gray-400 " src={require('../assets/img/user_img.jpg')} />
                </div>
                <div className="pl-2 font-bold text-blue-500 md:tracking-wide">Youssef Hanchaoui</div>
            </div>
            <div >
                <NavMenu isScroll={isScroll}/>
            </div>
            </div>
        </header>
    )
}
