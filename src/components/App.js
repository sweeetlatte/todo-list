import React from "react";

import "../index.css";
import TodoApp from "../containers/TodoApp";
import Login from "../containers/Login";

export default function App({ auth }) {
    return (
        <div className="App">
            {auth && !auth.token && <Login />}
            {auth && auth.token && <TodoApp />}
        </div>
    );
}
