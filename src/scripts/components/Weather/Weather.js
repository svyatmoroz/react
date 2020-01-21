import React from 'react';
import {getWeather} from '../WeatherApi/WeatherApi';
import './Weather.css';
import Loading from '../UI/Loading/Loading';

class Weather extends React.Component {

    state = {
        loaded: true,
        city: null,
        weatherDesc: null,
        temp: null,
        tempLike: null,
        srcImg: null,
        pressure: null,
        humidity: null
    }
    
    componentDidMount() {
        getWeather()
        .then(res => {
            console.log(res);
            this.setState({
                loaded: false,
                city: res.name,
                weatherDesc: res.weather[0].description,
                temp: res.main.temp,
                tempLike: res.main.feels_like,
                srcImg: res.weather[0].icon,
                pressure: res.main.pressure,
                humidity: res.main.humidity
            })
        })
        .catch(e => console.log(e));
    }
    
    render() {
        const url = '/src/img/';
        return (
            <div className="Weather">
                {
                this.state.loaded
                ? <Loading />
                : <React.Fragment>
                    <h1>Погода</h1>
                    <p className="city">{this.state.city}</p>
                    <p className="temp">{this.state.temp} °C</p>
                    <p className="tempLike">Ощущается: {this.state.tempLike} °C</p>
                    <p className="weatherDesc">{this.state.weatherDesc}</p>
                    <img src={url+this.state.srcImg+'.png'} alt="weather"/>
                    <p className="info">Давление {this.state.pressure} мм рт.ст<br/>Влажность {this.state.humidity} %</p>
                  </React.Fragment>
                }
            </div>
        )
    }
}

export default Weather;