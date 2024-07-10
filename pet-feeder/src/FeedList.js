import { FeedItem } from "./FeedItem";

export function FeedList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {todos.length === 0 && "No Feed Time"}
            {todos.map(todo => {
                return (
                    <FeedItem
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
    )

}