import React from 'react';
import { useSelector } from 'react-redux';

function Output() {
  const data=useSelector((state=>{
    return state.user;
    console.log(data);
  }))
  return (
    <>
      {data.map((mydata,index)=>{
        return(
        
            <li key={index}>{mydata}</li>
        )
      })} 
    </>
  )
}

export default Output


