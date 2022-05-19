import React from 'react';

function Bubble({ children, isButton, onBubbleClick }) {
  return (
    <div className={`bubble ${isButton ? 'bubble-button' : ''}`} onClick={() => isButton && onBubbleClick()}>
        { children }
    </div>
  )
}

export default Bubble