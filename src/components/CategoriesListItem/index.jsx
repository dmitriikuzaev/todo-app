import React from "react";

import ListItem from "./../ListItem";

const CategoriesListItem = ({ text }) => {
  return <ListItem showActions={["delete", "edit"]} text={text} />;
};

export default CategoriesListItem;
