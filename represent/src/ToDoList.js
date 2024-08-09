import React from "react";
import "./App.css";
import Task from "./Task";
import TaskInput from "./TaskInput";

const ToDoList = (props) => {
  return (
    <div className="to-do-list">
      <TaskInput tasks={props.tasks} setTasks={props.setTasks} />
      {props.tasks.map((task, i) => (
        <Task
          key={i}
          index={i}
          details={task}
          setTasks={props.setTasks}
          tasks={props.tasks}
        />
      ))}
    </div>
  );
};

export default ToDoList;
