import React from "react";
import classNames from "classnames";

import { ReactComponent as ImportantIcon } from "./../../assets/important.svg";
import { ReactComponent as DeleteIcon } from "./../../assets/delete.svg";
import { ReactComponent as EditIcon } from "./../../assets/edit.svg";
import { ReactComponent as CompleteIcon } from "./../../assets/complete.svg";
import "./ListItem.scss";

const ListItem = ({
  showImportant,
  showActions,
  important,
  completed,
  text = "Пусто :(",
}) => {
  return (
    <div
      className={classNames("task-list-item", {
        "task-list-item--completed": completed,
      })}
    >
      {showImportant && (
        <div
          className={classNames("task-list-item__important", {
            active: important,
          })}
        ></div>
      )}

      <div className="task-list-item__title">{text}</div>

      {showActions && showActions.length && (
        <div className="task-list-item__buttons-group">
          {showActions.includes("important") && (
            <a
              className="task-list-item__button task-list-item__button--important"
              href="/"
            >
              <ImportantIcon />
            </a>
          )}
          {showActions.includes("delete") && (
            <a
              className="task-list-item__button task-list-item__button--delete"
              href="/"
            >
              <DeleteIcon />
            </a>
          )}
          {showActions.includes("edit") && (
            <a
              className="task-list-item__button task-list-item__button--edit"
              href="/"
            >
              <EditIcon />
            </a>
          )}
          {showActions.includes("complete") && (
            <a
              className="task-list-item__button task-list-item__button--complete"
              href="/"
            >
              <CompleteIcon />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ListItem;
