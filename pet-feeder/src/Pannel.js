import React from 'react';

function Pannel({}) {

    return (
        
        <div className='card'>
            <h2 className='card-header'>Pet Feeder</h2>
            <div className='control'>
            <label className='controls'>1st Feed</label>
            <label className='controls'>2nd Feed</label>
            <label className='controls'>3rd Feed</label>
            <label className='controls'>4th Feed</label>
            <label className='controls'>5th Feed</label>
            <label className='controls'>6th Feed</label>
            </div>
            <div>            
            <input className='time-input' type="time" id="appt"  /> 
            <input className='time-input'type="time" id="appt"  />  
            <input className='time-input'type="time" id="appt"  />  
            <input className='time-input'type="time" id="appt"  />  
            <input className='time-input'type="time" id="appt"  />  
            <input className='time-input'type="time" id="appt"  />    
            </div>
            <div>
                <button>Set Feed</button>
                <button>Set Feed</button>
                <button>Set Feed</button>
                <button>Set Feed</button>
                <button>Set Feed</button>
                <button>Set Feed</button>
            </div>
        </div>
        
    )
}

export default Pannel;