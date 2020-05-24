import React from "react";

import "./TasksFilter.scss";

const TasksFilter = () => {
  return (
    <div className="tasks-filter">
      Сортировать по:
      <span className="tasks-filter__sort active">важным</span>
      <span className="tasks-filter__sort">выполненным</span>
      <span className="tasks-filter__sort">сначала старые</span>
      <span className="tasks-filter__sort">сначала новые</span>
    </div>
  );
};

export default TasksFilter;
