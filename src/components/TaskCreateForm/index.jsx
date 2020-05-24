import React from "react";

import "./TaskCreateForm.scss";

const TaskCreateForm = () => {
  return (
    <form className="task-create-form">
      <input
        className="task-create-form__control"
        type="text"
        placeholder="Название задачи"
      />
      <button className="button">Создать</button>
    </form>
  );
};

export default TaskCreateForm;
