import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom'

export const NavMenu=(props)=>{
    const [isMenuVisible, setIsMenuVisible]= useState(false);
    const route = useLocation();
    return (
        <nav>
        <ul className="md:flex md:w-full hidden">
            <li className={`${route.pathname==='/josef256_cv/' ? 'text-blue-500': 'text-gray-500' } pr-12 font-semibold  hover:text-blue-500 md:tracking-wide`}>
                <div className={`${route.pathname==='/josef256_cv/' ? 'border-b-2 border-blue-500': '' } py-6`}>
                <Link  to="/josef256_cv/">
                Home
                </Link>
                </div>
            </li>
            <li className={`${route.pathname==='/josef256_cv/portfolio' ? 'text-blue-500': 'text-gray-500' } pr-12 font-semibold  hover:text-blue-500 md:tracking-wide`}>
                <div className={`${route.pathname==='/josef256_cv/portfolio' ? 'border-b-2 border-blue-500': '' } py-6`}>
                <Link  to="/josef256_cv/portfolio">
                Portfolio
                </Link>
                </div>
            </li>
            {/* <li className="pr-12 font-semibold text-gray-500 hover:text-gray-700 md:tracking-wide">
                <div className="py-6 ">
                <Link to="/about">
                About
                </Link>
                </div>
            </li>  */}
            <li className={`${route.pathname==='/josef256_cv/contact' ? 'text-blue-500': 'text-gray-500' } pr-12 font-semibold  hover:text-blue-500 md:tracking-wide`}>
                <div className={`${route.pathname==='/josef256_cv/contact' ? 'border-b-2 border-blue-500': '' } py-6`}>
                <Link  to="/josef256_cv/contact">
                Contact
                </Link>
                </div>
            </li>
        </ul>
            <div className="md:hidden" onClick={()=>setIsMenuVisible(!isMenuVisible)}>
                <svg className={`${props.isScroll?'text-gray-600': 'text-white'} h-8 w-8`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <div className={`${isMenuVisible? "block": "hidden"} md:hidden p-4 shadow-lg bg-white absolute mx-4 right-0 rounded-md`}>
                <ul className="grid grid-cols-1 gap-6 grid-rows-2">
                    <li className={`${route.pathname==='/josef256_cv/' ?'text-blue-500': 'text-gray-500'} font-semibold  hover:text-blue-500 flex items-center`}>
                        <svg className={`${route.pathname==='/josef256_cv/' ?'text-blue-500': 'text-gray-500'}  hover:text-blue-500 h-4 w-4 mr-2`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                        </svg>
                        <Link  to="/josef256_cv/">
                            Home
                        </Link>
                    </li>
                    <li className={`${route.pathname==='/portfolio' ?'text-blue-500': 'text-gray-500'} font-semibold  hover:text-blue-500 flex items-center`}>
                        <svg className={`${route.pathname==='/portfolio' ?'text-blue-500': 'text-gray-500'}  hover:text-blue-500 h-4 w-4 mr-2`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                        </svg>
                        <Link to="/josef256_cv/portfolio">
                            Portfolio
                        </Link>
                    </li> 
                {/* <li className={`${route.pathname==='/about' ?'text-blue-500': 'text-gray-500'} font-semibold  hover:text-blue-500 flex items-center`}>
                        <svg className={`${route.pathname==='/about' ?'text-blue-500': 'text-gray-500'}  hover:text-blue-500 h-4 w-4 mr-2`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                        </svg>
                        <Link to="/about">
                            About
                        </Link>
                    </li> */}
                    <li className={`${route.pathname==='/josef256_cv/contact' ?'text-blue-500': 'text-gray-500'} font-semibold  hover:text-blue-500 flex items-center`}>
                        <svg className={`${route.pathname==='/josef256_cv/contact' ?'text-blue-500': 'text-gray-500'}  hover:text-blue-500 h-4 w-4 mr-2`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                        </svg>
                        <Link to="/josef256_cv/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
