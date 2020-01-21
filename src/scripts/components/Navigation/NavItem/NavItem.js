import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavItem.css';

const NavItem = props => {
    return (
        <li className="NavItem">
            <NavLink onClick={props.onClickMenuHandler} to={props.to} exact={props.exact}>{props.name}</NavLink>
        </li>
    )
}

export default NavItem;