import React, { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCounter] = useState(initial);
  const canAdd = count <= stock;
  const suma = () => {
    setCounter(count + 1);
  };

  const resta = () => {
    if (count > 1) {
      setCounter(count - 1);
    }
  };
  return (
    <div>
      <div>
        <button className="addStock" onClick={resta}>-</button>
        <h3>{count}</h3>
        <button className="subStock" onClick={suma}>+</button>
      </div>
      <div>
        <button className="addToCartBtn" onClick={() => onAdd(count)} disabled={!canAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
