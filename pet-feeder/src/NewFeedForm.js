import { useState } from "react";
import { NewServingForm } from "./NewServingForm";

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
            <NewServingForm/>
            <button className="btn">Set Time</button>
        </form>
    )
}