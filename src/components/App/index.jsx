import React from "react";
import { Switch, Route } from "react-router-dom";

import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Tasks from "../Tasks";
import CategoriesManager from "../CategoriesManager";

function App() {
  return (
    <div className="app">
      <div className="app__sidebar">
        <Sidebar />
      </div>
      <div className="app__wrapper">
        <div className="app__navbar">
          <Navbar />
        </div>
        <div className="app__content">
          <Switch>
            <Route path={["/category/:id", "/"]} component={Tasks} />
            <Route path="/categories-manager" component={CategoriesManager} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
