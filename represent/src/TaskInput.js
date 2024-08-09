import React from "react";
import "./App.css";

const TaskInput = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setTasks([
      ...props.tasks,
      {
        title: e.target.todo.value,
        description: e.target.todo.value,
        isDone: false,
      },
    ]);
    e.target.reset();
  };

  return (
    <div className="to-do-list">
      <form className="task-input" onSubmit={handleSubmit}>
        <input type="text" name="todo" placeholder="Add a task" />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskInput;
