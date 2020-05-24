import React from "react";

import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrap">
        <div className="search-panel">
          <input
            className="search-panel__control"
            type="text"
            placeholder="Поиск..."
          />
        </div>
        <div className="navbar__nav">
          <NavLink to="/categories-manager" className="navbar__link">
            Управление категориями
          </NavLink>
        </div>
      </div>

      <div className="user-panel">
        <div className="user-panel__avatar">
          <img
            src="https://sun7-7.userapi.com/c836333/v836333001/31193/dNxZpRF-z_M.jpg"
            alt="Фото Павла Дурова"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
