import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () =>
  <header className="main-header">
    <nav className="main-header__nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  </header>;

export default Header;
