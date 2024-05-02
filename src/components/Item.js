import React, { useRef } from "react";

function Item({ name, category }) {
  const liRef = useRef(null);

  const handleAddToCart = () => {
    if (liRef.current) {
      liRef.current.classList.add("in-cart");
    }
  };

  return (
    <li ref={liRef} className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
