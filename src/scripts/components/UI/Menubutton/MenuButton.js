import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './MenuButton.css';

const MenuButton = props => {
    return(
        <div onClick={props.onClickMenuHandler} className="MenuButton">
            {props.isOpen
            ? <FontAwesomeIcon icon={faTimes} size="2x"/>
            : <FontAwesomeIcon icon={faBars} size="2x"/>
            }
        </div>
    )
}

export default MenuButton;