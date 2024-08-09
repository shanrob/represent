import React from "react";
import "./App.css";

// This is the Task component that will be used in the ToDoList component
const Task = (props) => {
  // This is the state that will be used to determine if the task is being edited
  const [editing, setEditing] = React.useState(false);
  // This is the reference to the input field that will be used to edit the task
  const inputRef = React.useRef(null);

  // This function will be called when the edit button is clicked
  const editTask = () => {
    setEditing(true);
  };

  // This effect will be called when the editing state changes
  React.useEffect(() => {
    // If editing is true and the inputRef exists, focus on the input field
    // and set the cursor to the end of the input
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);

  // This function will be called when the input field is blurred (click away)
  const handleInputBlur = () => {
    setEditing(false);
  };

  // This function will be called when the input field value changes.
  // It will update the task description in the tasks state
  const handleInputChange = (e) => {
    props.setTasks(
      props.tasks.map((task, i) =>
        i === props.index ? { ...task, description: e.target.value } : task
      )
    );
  };

  // This function will be called when the form is submitted
  const handleInputSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  // This function will be called when the delete button is clicked
  function deleteTask() {
    props.setTasks(props.tasks.filter((task, i) => i !== props.index));
  }

  // This is the JSX for the Task component
  // It returns a div with the task description and two buttons: Edit and Delete
  // If the task is being edited, it will return an input field instead of the task description
  return (
    <div className="task">
      <input className="done-box" type="checkbox"></input>
      {editing ? (
        <form onSubmit={handleInputSubmit}>
          <input
            ref={inputRef}
            type="text"
            name="edit-task"
            defaultValue={props.details?.description}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          ></input>
        </form>
      ) : (
        <p>{props.details.description}</p>
      )}
      <div className="task-buttons">
        <button onClick={editTask}>Edit</button>
        <button onClick={deleteTask}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
