export function FeedItem({ completed, id, title, total, toggleTodo, deleteTodo }) {
    return (
        <li>
            <label>
                
                <input
                type="checkbox"
                checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
                {total}
            </label>    
            <button onClick={()=> deleteTodo(id)} className="btn btn-dange">
                Delete Feed
            </button>
        </li>
    )
}