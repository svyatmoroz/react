const getWeather = async() => {
    try {
        const res = await fetch('https://api.openweathermap.org/data/2.5/weather?id=569696&units=metric&appid=bc428a7ec06e8f8853137c56f7f7d2cc&lang=ru');
        const body = await res.json();
        return body;
    }
    catch(e) {
        console.log(e);
    }
}

export {getWeather};