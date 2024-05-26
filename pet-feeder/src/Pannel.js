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
function toggleTodo(id, completed) {
    setTodos(currentTodos => {
        return currentTodos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed}
            }
            return todo
        })
    })
}
function deleteTodo(id) {
    setTodos(currentTodos => {
        return currentTodos.filter(todo => todo.id !== id)
    })
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
            {todos.map(todo => {
                return (<li key={todo.id}>
                    <label>
                        <input 
                        type="checkbox" 
                        checked={todo.completed}
                        onChange={e => toggleTodo(todo.id, e.target.checked)}
                        />
                        {todo.title}
                    </label>
                    <button 
                        onClick={() =>deleteTodo(todo.id)}className="btn btn-danger"
                    >
                        Delete
                    </button>
                </li>
                )
            })}
        </ul>    
        </div>
        
    )
}

export default Pannel;