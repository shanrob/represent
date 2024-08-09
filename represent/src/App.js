import "./App.css";
import React, { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My To-Do List</h1>
      </header>
      <ToDoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
