import React, { useState } from 'react';

function Pannel({}) {
const [newItem, setNewItem] = useState("") 
const [todos, setTodos] =useState([]) 

function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
        return [
            ...currentTodos,
            { id: crypto.randomUUID(), title: newItem, completed: false},
        ]

    })
    setNewItem("")
}

    return (
        
        <div className='card'>
            <h2 className='card-header'>Pet Feeder</h2>
            
            <div>            
            <input className='time-input' value={newItem} onChange={e => setNewItem(e.target.value)} type="time" id="appt"  />  
            </div>
            <div>
                <button className='feed-button'>Set Feed</button>
            </div>
        <ul className="list">
            {todos.map(todos => {
                return (<li key={todos.id}>
                    <label>
                    <input type="checkbox" checked={todos.completed}/>
                    {todos.title}
                    </label>
                </li>
                )
            })}
        </ul>    
        </div>
        
    )
}

export default Pannel;