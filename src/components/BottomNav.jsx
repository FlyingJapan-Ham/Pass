import React from 'react';
import { Search, Heart, Map, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="bottom-nav">
      <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
        <Search size={24} />
        <span>Explore</span>
      </Link>
      <Link to="/wishlists" className={`nav-item ${isActive('/wishlists') ? 'active' : ''}`}>
        <Heart size={24} />
        <span>Wishlists</span>
      </Link>
      <Link to="/map" className={`nav-item ${isActive('/map') ? 'active' : ''}`}>
        <Map size={24} />
        <span>Map</span>
      </Link>
      <Link to="/profile" className={`nav-item ${isActive('/profile') ? 'active' : ''}`}>
        <User size={24} />
        <span>Profile</span>
      </Link>
      <style>{`
        .bottom-nav {
          background: white;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-around;
          padding: 12px 0;
          padding-bottom: calc(12px + env(safe-area-inset-bottom));
          z-index: 100;
          flex-shrink: 0; /* Prevent shrinking */
        }
        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          color: var(--text-secondary);
          font-size: 10px;
          cursor: pointer;
        }
        .nav-item.active {
          color: var(--primary);
        }
      `}</style>
    </div>
  );
};

export default BottomNav;
