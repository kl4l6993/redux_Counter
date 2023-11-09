import React, { useState } from 'react'
import './Counter.css'


function Counters() {

    var [count,setCount]=useState(0);

    return (
    <div className='row'>
      <h1 className='text-center mt-4'>COUNTER</h1>
      
      <div className='col-lg-12 col-md-12 col-sm-12'>
        <h2>Count: {count} </h2>
      </div>

      <div className='bt1 w-50 container text-center mt-4 col-lg-12 col-md-12 col-sm-12'>
        <button className='btn btn-primary ms-2 p-2' onClick={()=>setCount(++count)}>Increment</button>
        <button className='btn btn-primary ms-2 p-2'onClick={()=>setCount(--count)}>Decrement</button>
        <button className='btn btn-primary ms-2 p-2'onClick={()=>setCount(0)}>Reset</button>
      </div>

    </div>

  )
}

export default Counters