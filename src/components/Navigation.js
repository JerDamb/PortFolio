// import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
  // const [darkMode, setDarkMode] = useState(false)
  return (
    <div>
      <div className="sidebar">
        <div className="navigation">
          {/* <div className="menu">Menu</div> */}
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="navActive">
                <i className="fas fa-home"></i>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Knowledge" activeClassName="navActive">
                <i className="fas fa-clipboard-list"></i>
                Compétences
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/portfolio" activeClassName="navActive">
                <i className="fas fa-chart-area"></i>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/contact" activeClassName="navActive">
                <i className="fas fa-address-card"></i>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
