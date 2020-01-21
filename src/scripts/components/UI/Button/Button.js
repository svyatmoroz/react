import React from 'react';
import './Button.css';

const Button = props => {
    return( 
        <button onClick={props.onclick} className='Button'>
            Повторить
        </button>
    )
}

export default Button;