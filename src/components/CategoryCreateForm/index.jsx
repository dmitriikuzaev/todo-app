import React from "react";

import "./CategoryCreateForm.scss";

const CategoryCreateForm = () => {
  return (
    <form className="category-create-form">
      <input
        className="category-create-form__control"
        type="text"
        placeholder="Название категории"
      />
      <button className="button">Создать</button>
    </form>
  );
};

export default CategoryCreateForm;
