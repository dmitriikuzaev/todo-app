import React, { useState, useEffect } from "react";

import List from "../List";
import TaskListItem from "../TaskListItem";
import "./Tasks.scss";
import TaskCreateForm from "../TaskCreateForm";
import TasksFilter from "../TasksFilter";

const tasks = [
  {
    id: 1,
    categoryId: 2,
    text: "Изучить JavaScript",
    completed: true,
  },
  {
    id: 2,
    categoryId: 2,
    text: "Изучить паттерны проектирования",
    completed: false,
  },
  {
    id: 3,
    categoryId: 2,
    text: "ReactJS Hooks (useState, useReducer, useEffect и т.д.)",
    completed: true,
  },
  {
    id: 4,
    categoryId: 2,
    text: "Redux (redux-observable, redux-saga)",
    completed: false,
  },
  {
    categoryId: 2,
    text: "123",
    completed: true,
    id: 5,
  },
  {
    categoryId: 1,
    text: "test",
    completed: false,
    id: 6,
  },
  {
    categoryId: 1,
    text: "qweqwe",
    completed: false,
    id: 7,
  },
  {
    categoryId: 1,
    text: "qweqwe",
    completed: true,
    id: 8,
  },
  {
    categoryId: 1,
    text: "123",
    completed: false,
    id: 9,
  },
  {
    categoryId: 4,
    text: "Купить 1984!",
    completed: true,
    id: 10,
  },
  {
    categoryId: 2,
    text: "222",
    completed: true,
    id: 12,
    important: true,
  },
];
const Tasks = (props) => {
  const categoryId = +props.match.params.id;
  const filter = "important"; // important completed date

  const tasksFilteredByCategory = categoryId
    ? tasks.filter((task) => task.categoryId === categoryId)
    : tasks;

  const tasksFiltered = filter
    ? tasksFilteredByCategory.filter((task) => task[filter])
    : tasksFilteredByCategory;

  return (
    <div className="tasks">
      <TasksFilter />
      <TaskCreateForm />
      <List>
        {tasksFiltered.map((task) => (
          <TaskListItem
            key={task.id}
            completed={task.completed}
            important={task.important}
            text={task.text}
          />
        ))}
      </List>
    </div>
  );
};

export default Tasks;
