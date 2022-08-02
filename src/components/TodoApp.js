import React, { useState, useEffect } from "react";

export default function TodoApp({ todos, addTodo, fetchTodos, checkTodo }) {
    const [text, setText] = useState("");

    function refreshPage() {
        window.location.reload();
    }

    function clearStorage() {
        localStorage.clear();
        refreshPage();
        return;
    }

    // useEffect(() => {
    //     fetchTodos();
    // }, [fetchTodos]);

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    if (text !== "") {
                        addTodo(text);
                        setText("");
                    }
                }}
            >
                Add
            </button>
            <button onClick={clearStorage}>Logout</button>
            <ul>
                {todos && todos.map((todo, index) =>
                    <li
                        key={todo.id}
                        onClick={() => {
                            if (todo.completed === false) checkTodo(index)
                        }}
                        style={{
                            textDecoration: todo.completed === true ? "line-through" : ""
                        }}
                    >
                        {todo.title}
                    </li>
                )}
            </ul>
        </div>
    );
}
