import React from "react";
import "./List.scss";

const TaskList = ({ children }) => {
  return <div className="task-list">{children}</div>;
};

export default TaskList;
