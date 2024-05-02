import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // State for managing the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Event handler for when the category selection changes
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Filtering items based on the selected category
  const filteredItems = selectedCategory === "All" 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
