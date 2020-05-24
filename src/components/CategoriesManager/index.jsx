import React from "react";

import List from "../List";
import CategoriesListItem from "../CategoriesListItem";
import "./CategoriesManager.scss";
import { NavLink, Switch, Route } from "react-router-dom";
import CategoryCreateForm from "../CategoryCreateForm";

const CategoriesManager = () => {
  return (
    <div className="categories-manager">
      <CategoryCreateForm />
      <List>
        <CategoriesListItem text="Продажи" />
        <CategoriesListItem text="Фронтенд" />
        <CategoriesListItem text="Фильмы и сериалы" />
        <CategoriesListItem text="Книги" />
        <CategoriesListItem text="Личное" />
        <CategoriesListItem text="Спорт" />
      </List>
    </div>
  );
};

export default CategoriesManager;
