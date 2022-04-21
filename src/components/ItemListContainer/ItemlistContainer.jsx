import React from 'react';

function ItemListContainer({greeting}) {
  return (
    <div className='list-item-container'>
        <p>{greeting}</p>
    </div>
  )
}

export default ItemListContainer