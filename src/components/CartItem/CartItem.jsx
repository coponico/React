import React, { useContext } from 'react';
import CartContext from '../../store/CartContext';
import Bubble from '../Bubble/Bubble';

function CartItem({ item }) {
  const cartCtx = useContext(CartContext);

  return (
    <>
        <div className='cart-item'>
            <div className='cart-img-container'>
                <img src={ item?.imageUrl } alt="Imagen del producto" />
            </div>
            <p>{ item?.title }</p>
            <p>${ item?.price }</p>
        </div>
        <div className='bubble-close'>
          <Bubble isButton onBubbleClick={() => cartCtx.removeProduct(item.id)}>X</Bubble>
        </div>
        <div className='bubble-quantity'>
          <Bubble>{ item?.quantity }</Bubble>
        </div>
    </>
  )
}

export default CartItem 