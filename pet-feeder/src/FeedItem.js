export function FeedItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
            <label>
                <input
                type="checkbox"
                checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button onClick={()=> deleteTodo(id)} className="btn btn-dange">
                Delete Feed
            </button>
        </li>
    )
}