import { useState } from "react";

export function NewFeedForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")
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
            </div>
            <button className="btn">Set Time</button>
        </form>
    )
}