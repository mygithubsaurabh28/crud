import React, { useState } from 'react';
import './First.css';
import { useDispatch } from 'react-redux';
import {adduser} from './Slice';


function First() {
  const [name,setVal]=useState('');
  
  const dispatch=useDispatch();
  function change(e){
    setVal(e.target.value);
  }



  return (
    <>
      <div className='main'>
        <div className='center'>
           <h2>ToDo List</h2>

           <input id="int" value={name} type='text' placeholder='Add a Items' onChange={change}/>
           <button onClick={()=>dispatch(adduser(name))} id="btn">+</button>
        </div>

      </div>
    </>
  )
}

export default First;
