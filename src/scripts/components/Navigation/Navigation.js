import React from 'react';
import NavItem from './NavItem/NavItem';
import './Navigation.css';


export default class Navigation extends React.Component {
    
    state = {
        links: [
            {name: 'Квиз', to: '/', exact: true},
            {name: 'Погода', to: '/weather', exact: false},
            {name: '404', to: '/404', exact: false}
        ]
    }
 
    render() {
        let cls = ['Navigation'];
        if(this.props.isOpen) {
            cls.push('open');
        }
        return (
            <nav className={cls.join(' ')}>
                <ul>
                    {this.state.links.map((item, index) => {
                        return (
                            <NavItem onClickMenuHandler={this.props.onClickMenuHandler} key={index} name={item.name} to={item.to} exact={item.exact} />
                        )
                    })}
                </ul>
            </nav>
        )
    }
}