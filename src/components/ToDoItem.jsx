import React from "react";
import "./ToDoItem.css";

const ToDoItem = ({ task, index, removeTask, toggleTaskCompletion }) => {
  return (
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
      <button onClick={() => removeTask(index)}>Remove</button>
    </li>
  );
};

export default ToDoItem;
