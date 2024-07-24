import React, { useState } from 'react';
import { useEffect } from 'react';
import { NewFeedForm } from './NewFeedForm';
import { FeedList } from './FeedList';
import { NewServingForm } from './NewServingForm';

function FeedPannel() {
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")
        if (localValue == null) return []

        return JSON.parse(localValue)
    })

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos))
    }, [todos])

    const [servings, setServings] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")
        if (localValue == null) return []

        return JSON.parse(localValue)
    })

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(servings))
    }, [servings])

    function addTodo(title) {
        setTodos(currentTodos => {
            return [
                ...currentTodos,
                { id: crypto.randomUUID(), title, completed: false },
            ]
        })
    }

    function addServing(title) {
        setServings(currentServing => {
            return [
                ...currentServing,
                { id: crypto.randomUUID(), title, completed: false}
            ]
        })
    }

    function toggleTodo(id, completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed }
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
        <>
            <NewFeedForm onSubmit={addTodo} />
            <NewServingForm onSubmit={addServing}/>
            <h1 className='header'>Feed Times</h1>
            <FeedList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </>
    )
}

export default FeedPannel;