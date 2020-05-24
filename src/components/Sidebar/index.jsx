import React from "react";

import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">Задачи</div>
      <div className="sidebar__menu">
        <div className="sidebar__menu-item">
          <NavLink exact to="/" className="sidebar__menu-link">
            Все задачи
          </NavLink>
        </div>
        <div className="sidebar__menu-item">
          <div className="sidebar__menu-item">
            <NavLink to="/category/1" className="sidebar__menu-link">
              Продажи
            </NavLink>
          </div>
          <div className="sidebar__menu-item">
            <NavLink to="/category/2" className="sidebar__menu-link">
              Фронтенд
            </NavLink>
          </div>
          <div className="sidebar__menu-item">
            <NavLink to="/category/3" className="sidebar__menu-link">
              Фильмы и сериалы
            </NavLink>
          </div>
          <div className="sidebar__menu-item">
            <NavLink to="/category/4" className="sidebar__menu-link">
              Книги
            </NavLink>
          </div>
          <div className="sidebar__menu-item">
            <NavLink to="/category/5" className="sidebar__menu-link">
              Личное
            </NavLink>
          </div>
          <div className="sidebar__menu-item">
            <NavLink to="/category/6" className="sidebar__menu-link">
              Спорт
            </NavLink>
          </div>
          <div className="sidebar__menu-item">
            <NavLink to="/category/none" className="sidebar__menu-link">
              Без категории
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
