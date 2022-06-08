import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import CartContext from '../../store/CartContext';
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ item }) {
  const cartCtx = useContext(CartContext);
  function addHandler(quantityToAdd) {
    cartCtx.addProduct({quantity: quantityToAdd, ...item});
  }
  return (
    <div className="item-detail">
      <div className="left">
        <div className="img-detail-container">
          <img src={item?.imageUrl} alt="Imagen del producto"/>
        </div>
      </div>
      <div className="right">
        <div className="info-container">
          <h2>{item?.title}</h2>
          <p className="item-description">{item?.description? item.description:'Producto sin descripción'}</p>
          <p className='itemPrice'>${item?.price}</p>
          <div className="count-container">
            <ItemCount initial={1} stock={item?.stock} onAdd={addHandler} />
            {cartCtx.isInCart(item?.id) &&
                        <button className='button-brown mt'>
                            <Link to='/cart'>
                                Terminar compra ({ cartCtx.getCartQuantity() } items)
                            </Link>
                        </button>
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default ItemDetail;
