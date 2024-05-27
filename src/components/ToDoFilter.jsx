import React from "react";
import "./ToDoFilter.css";

const ToDoFilter = ({ filter, onFilterChange }) => {
  return (
    <div className="todo-filter">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => onFilterChange("all")}
      >
        All
      </button>
      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => onFilterChange("completed")}
      >
        Completed
      </button>
      <button
        className={filter === "pending" ? "active" : ""}
        onClick={() => onFilterChange("pending")}
      >
        Pending
      </button>
    </div>
  );
};

export default ToDoFilter;
