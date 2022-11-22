import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./Mall.css"

const Mall = () => {
    let navigate=useNavigate();
    const {image} = useParams();
    const {id} = useParams();

    const mall="CARNIVAL Cinema DownTown Mall, Kolkata"

    const nav=()=>{navigate(`/Theater/${mall}/${image}/${id}`)}
  return (
    <div className='showMalls'>
        <h2>SHOW TIMES</h2>
        <div  className='showMalls_malls'>
        <h2 >CARNIVAL Cinema DownTown Mall, Kolkata</h2>
        <div className='showMalls_contents'>
        <h3>English-2D</h3>
        <div className='showMalls_timings'>
            <h4 onClick={()=>  nav()}>11:30AM</h4>
            <h4 onClick={()=>  nav()}>2:30PM</h4>
        </div>   
        </div>
        </div>

       

    </div>
  )
}

export default Mall