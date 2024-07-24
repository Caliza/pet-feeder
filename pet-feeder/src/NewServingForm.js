import { useState } from "react";

export function NewServingForm({onSubmit}) {
    const [newQuantity, setNewQuantity] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        if (newQuantity === "") return

        onSubmit(newQuantity)

        setNewQuantity("")
    }

    return (
        <form onSubmit={handleSubmit}
        className="new-item-form">
            <div className="form-row">
                <input
                value={newQuantity}
                onChange={e => setNewQuantity(e.target.value)}
                type="number"
                min="0"
                max="5"
                id="item"
                />
            </div>
            <button className="btn">Set Serve</button>
        </form>
    )
    
}