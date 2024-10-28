function cetch(latitude, longitude) {
    // &current=temperature_2m,relative_humidity_2m,precipitation,weather_code
    const LINK = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin`;
    
    fetch(LINK)
        .then(response => {
            if (!response.ok) {
            throw new Error('Errore nella risposta della richiesta');
            }
            return response.json(); // Convertire in formato JSON
        })
        .then(data => {
            updateDay(data);
            minTemp(data);
            maxTemp(data);
            updateTime(data);
            updateTemp(data);
            updateApparent(data);
            updateHumidity(data);
            updateProbability(data);
            updateWeather(data);
        })

    function updateDay(data) {
        const days = document.getElementsByClassName("day");
        for(let i = 0; i < days.length; i++)
            days[i].innerText = data.daily.time[i].slice(-2) + "/" + data.daily.time[i].slice(5, 7);
    }

    function minTemp(data) {
        const min = document.getElementById("min");
        min.innerText = Math.round(data.daily.temperature_2m_min[pageIndex]) + "°C";
    }

    function maxTemp(data) {
        const max = document.getElementById("max");
        max.innerText = Math.round(data.daily.temperature_2m_max[pageIndex]) + "°C";
    }

    function updateTime(data) {
        const hours = document.getElementsByClassName("time");
        for(let i = daynum; i < (hours.length + daynum); i++)
            hours[i - daynum].innerText = data.hourly.time[i].slice(-5);
    }

    function updateTemp(data) {
        const temps = document.getElementsByClassName("temp");
        for(let i = daynum; i < (temps.length + daynum); i++)
            temps[i - daynum].innerText = Math.round(data.hourly.temperature_2m[i]) + "°C";
    }

    function updateApparent(data) {
        const apparents = document.getElementsByClassName("apparent-temp");
        for(let i = daynum; i < (apparents.length + daynum); i++)
            apparents[i - daynum].innerText = Math.round(data.hourly.apparent_temperature[i]) + "°C";
    }

    function updateHumidity(data) {
        const humidities = document.getElementsByClassName("humidity");
        for(let i = daynum; i < (humidities.length); i++)
            humidities[i - daynum].innerText = data.hourly.relative_humidity_2m[i] + "%";
    }

    function updateProbability(data) {
        const probabilities = document.getElementsByClassName("probability");
        for(let i = daynum; i < (probabilities.length); i++)
            probabilities[i - daynum].innerText = data.hourly.precipitation_probability[i] + "%";
    }

    function updateWeather(data) {
        const weatherCodeIcons = document.getElementsByClassName('weathercode');
        let weather_code = data.hourly.weather_code;
        for (let i = daynum; i < (weatherCodeIcons.length + daynum); i++) {
            let code = weather_code[i];
            let day = wc[code].day.image;
            let night = wc[code].night.image;
            let icon;
            
            if(data.hourly.time[i].slice(-5, -3) > 20 || data.hourly.time[i].slice(-5, -3) < 6)
                icon = night;
            else
                icon = day;

            weatherCodeIcons[i - daynum].innerHTML = `<img src = ${icon}>`;
        }
    }
}