import React from 'react';

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="category-filter">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`category-button ${category === selectedCategory ? 'selected' : ''}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
