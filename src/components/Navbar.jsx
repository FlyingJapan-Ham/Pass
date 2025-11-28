import React from 'react';
import { Search } from 'lucide-react';

const Navbar = ({ onSearch, onFilterClick }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleSearch = () => {
    onSearch(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="search-bar">
          <div className="search-icon-wrapper" onClick={handleSearch}>
            <Search size={20} className="search-icon" />
          </div>
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Search partners..."
              className="search-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="filter-icon" onClick={onFilterClick}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 3, overflow: 'visible' }}><path d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM11 26a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"></path></svg>
          </div>
        </div>
      </div>
      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: white;
          padding: var(--spacing-md) 0;
          box-shadow: var(--shadow-sm);
        }
        .search-bar {
          display: flex;
          align-items: center;
          background: white;
          border: 1px solid var(--border);
          border-radius: 1000px;
          padding: var(--spacing-sm) var(--spacing-md);
          box-shadow: 0 3px 10px rgba(0,0,0,0.1);
          gap: var(--spacing-md);
        }
        .search-input-wrapper {
          flex: 1;
        }
        .search-input {
          width: 100%;
          border: none;
          outline: none;
          font-size: 16px;
          font-weight: 500;
          color: var(--text-primary);
        }
        .search-input::placeholder {
            color: var(--text-secondary);
        }
        .search-icon-wrapper {
            cursor: pointer;
            display: flex;
            align-items: center;
        }
        .filter-icon {
          border: 1px solid var(--border);
          border-radius: 50%;
          padding: 8px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
