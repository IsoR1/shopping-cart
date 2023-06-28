import React, { useState } from "react";
import categories from "../data/categories";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      {categories.map((el) => (
        <div className="sidebar-card">
          <span className="sidebar-option">{el[0].category.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
