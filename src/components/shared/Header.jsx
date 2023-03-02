import React from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">
        <Link className="header__logo-link" to="/">
          e-commerce
        </Link>
      </h1>
      <nav>
        <ul className="header__list">
          <li>
            <Link className="header__link" to="/user/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="header__link" to="/">
              Purchases
            </Link>
          </li>
          <li>
            <Link className="header__link" to="/">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
