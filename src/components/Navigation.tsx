import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={`navbar-item ${path === '/' ? 'has-background-grey-lighter' : ''}`}
          >
            Home
          </Link>

          <Link
            to="/people"
            className={`navbar-item ${path.startsWith('/people') ? 'has-background-grey-lighter' : ''}`}
          >
            People
          </Link>
        </div>
      </div>
    </nav>
  );
};
