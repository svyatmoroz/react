import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Quiz from './components/Quiz/Quiz';
import MenuButton from './components/UI/Menubutton/MenuButton';
import Navigation from './components/Navigation/Navigation';
import Weather from './components/Weather/Weather';
import Error404 from './components/404/Error404';

export default class App extends React.Component {

    state = {
        open: false
    }

    onClickMenuHandler = () => {
        this.setState((prevState => {
            return {
                open: !prevState.open
            }
        }))
    }

    render() {
        return (
            <React.Fragment>
                <MenuButton 
                    onClickMenuHandler={this.onClickMenuHandler}
                    isOpen={this.state.open}
                />
                <Navigation 
                    isOpen={this.state.open}
                    onClickMenuHandler={this.onClickMenuHandler}
                />
                <Switch>
                    <Route path='/' exact render={() => <Quiz />}/>
                    <Route path="/weather" exact render={() =>  <Weather />} />
                    <Route render={() => <Error404 />} />
                </Switch>
            </React.Fragment>
        )
    }
}