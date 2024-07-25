import { useState } from "react";

export function NewFeedForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("")
    const [newQuantity, setNewQuantity] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")

        e.preventDefault();
        if (newQuantity === "") return

        onSubmit(newQuantity)

        setNewQuantity("")
    }

    return (
        <form onSubmit={handleSubmit}
        className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">Set Feed</label>
                
                <input
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                type="time"
                id="item"
                />             
                <input
                value={newQuantity}
                onChange={e => setNewQuantity(e.target.value)}
                type="number"
                min="0"
                max="5"
                id="item"
                />
            </div>
            <button className="btn">Set Time</button>
        </form>
    )
}