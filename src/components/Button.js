
import React from 'react'

const ButtonInline = ({
    onClick,
    type = 'button',
    children
  }) =>
    <button
      type={type}
      className="button-inline"
      onClick={onClick}
    >
      {children}
    </button>

const Button = ({
    onCLick,
    className,
    type= 'button',
    children
}) => 
    <button
        type={type}
        className={className}
        onClick={onCLick}
    >
        {children}
    </button>

export default Button

export {
    ButtonInline
}