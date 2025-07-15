import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, handleLogout, onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <Link to="/" className="nav-logo" aria-label="Blog App Home">Blog App</Link>
        <div className="nav-items">
          {isAuthenticated && (
            <form onSubmit={handleSearchSubmit} className="nav-search">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="nav-search-input"
                aria-label="Search posts"
              />
              <button type="submit" className="nav-search-button" aria-label="Search">
                Search
              </button>
            </form>
          )}
          <ul className="nav-links">
            {isAuthenticated ? (
              <>
                <li><Link to="/" className="nav-link" aria-label="Home">Home</Link></li>
                <li><Link to="/profile" className="nav-link" aria-label="Profile">Profile</Link></li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="nav-link-button"
                    aria-label="Logout"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/login" className="nav-link" aria-label="Login">Login</Link></li>
                <li><Link to="/register" className="nav-link" aria-label="Register">Register</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;