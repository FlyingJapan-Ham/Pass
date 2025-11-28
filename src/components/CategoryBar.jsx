import React from 'react';
import { Coffee, Utensils, Beer, Pizza, Wine } from 'lucide-react';

const categories = [
  { name: 'Cafe', icon: Coffee },
  { name: 'Restaurant', icon: Utensils },
  { name: 'Bar', icon: Beer },
  { name: 'Pizza', icon: Pizza },
  { name: 'Winery', icon: Wine },
  { name: 'Pub', icon: Beer },
];

const CategoryBar = ({ selectedCategory, onSelectCategory }) => {
  const allCategories = [{ name: 'All', icon: Coffee }, ...categories];

  return (
    <div className="category-bar no-scrollbar">
      {allCategories.map((cat, index) => (
        <div
          key={index}
          className={`category-item ${selectedCategory === cat.name ? 'active' : ''}`}
          onClick={() => onSelectCategory(cat.name)}
        >
          <cat.icon size={24} />
          <span>{cat.name}</span>
        </div>
      ))}
      <style>{`
        .category-bar {
          display: flex;
          gap: 32px;
          padding: 24px var(--spacing-md);
          overflow-x: auto;
          border-bottom: 1px solid var(--border);
        }
        .category-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          min-width: 64px;
          cursor: pointer;
          opacity: 0.6;
          transition: opacity 0.2s;
        }
        .category-item:hover, .category-item.active {
          opacity: 1;
          color: var(--text-primary);
        }
        .category-item.active {
          border-bottom: 2px solid var(--text-primary);
          padding-bottom: 10px;
          margin-bottom: -12px; /* Compensate for padding to keep alignment */
        }
        .category-item span {
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default CategoryBar;
