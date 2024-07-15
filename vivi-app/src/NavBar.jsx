import React, { useState } from 'react';
import menu from './menu';
import './navbar.css';

function NavBar({ setPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navigate = (e, path) => {
    e.preventDefault(); 
    window.history.pushState({}, '', path);
    setPage(path);
    setIsOpen(false);
  };

  return (
    <nav className="nav-bar">
      <div className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
        <i className="gg-menu"></i> 
      </div>
      <ul className={`nav-bar__list ${isOpen ? 'open' : ''}`}>
        {menu.map((item) => (
          <li className="nav-bar__item" key={item.name}>
            <a
              href={item.path}
              className="nav-bar__link" 
              onClick={(e) => navigate(e, item.path)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;