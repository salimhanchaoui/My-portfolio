import React from 'react';

export const ProjectCard=(props)=>{
    const img=props.img;
return (
    <div className="my-4  md:w-96 w-full  shadow-lg rounded-lg bg-gray-100">
    <div className="bg-gray-400 rounded-lg ">
        <img className="md:w-96 w-full  h-56 object-contain" src={props.img}/>
    </div>
    <div className="p-2 md:p-4 grid grid-cols-1 gap-4 ">
<div className="font-bold text-gray-800 uppercase">{props.title}</div>
        <div className="text-sm font-semibold text-gray-600 leading-6">
      {props.content}
        </div>
        <div className="flex flex-wrap">
            {props.tags.map((item, index)=>{
                return(
                <div key={index} className="m-2 p-1 bg-gray-400 rounded-full text-xs font-semibold text-gray-800">{item}</div>
                ) 
            })}
        </div>
    </div>
</div> 
)
}