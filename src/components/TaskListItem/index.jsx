import React from "react";

import ListItem from "./../ListItem";

const TaskListItem = (props) => {
  return (
    <ListItem
      showImportant
      showActions={["important", "delete", "edit", "complete"]}
      {...props}
    />
  );
};

export default TaskListItem;
