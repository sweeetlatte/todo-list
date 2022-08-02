import React from "react";

import "../index.css";
import TodoApp from "../bindings/TodoApp";
import Login from "../bindings/Login";

export default function App({ auth }) {
    return (
        <div className="App">
            {auth && !auth.token && <Login />}
            {auth && auth.token && <TodoApp />}
        </div>
    );
}
