import React from 'react';

function Item({ item }) {
  return (
    <div className='card'>
        <div className='header'>{ item?.title }</div>
        <div className='content'>
            <div className='img-container'>
                <img className='product-img' src={ item?.imageUrl } alt="Imagen del producto" />
            </div>
        </div>
        <div className='footer'>{ item?.price }</div>
    </div>
  )
}

export default Item