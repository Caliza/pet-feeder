import React from 'react';

function Pannel({}) {

    return (
        
        <div className='card'>
            <h2 className='card-header'>Pet Feeder</h2>
            <div className='control'>
            <label className='controls'>Set Time</label>
            <label className='controls'>Set Time</label>
            <label className='controls'>Set Time</label>
            <label className='controls'>Set Time</label>
            <label className='controls'>Set Time</label>
            <label className='controls'>Set Time</label>
            </div>
            <div>            
            <input type="time" id="appt"  /> 
            <input type="time" id="appt"  />  
            <input type="time" id="appt"  />  
            <input type="time" id="appt"  />  
            <input type="time" id="appt"  />  
            <input type="time" id="appt"  />    
            </div>
        </div>
        
    )
}

export default Pannel;