const LATITUDE =  45.0705;
const LONGITUDE = 7.6868;

const LINK = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin`;

fetch(LINK)
    .then(response => {
        if (!response.ok) {
        throw new Error('Errore nella risposta della richiesta');
        }
        return response.json(); // Convertire in formato JSON
    })
    .then(data => {
        console.log('Dati del meteo:', data);
        updateDay(data);
        updateTime(data);
        updateTemp(data);
        // Puoi usare i dati qui per aggiornare l'interfaccia utente o altro
    })

function updateDay(data) {
    const days = document.getElementsByClassName("day");
    for(let i = 0; i < days.length; i++)
        days[i].innerText = data.daily.time[i].slice(-2) + "/" + data.daily.time[i].slice(5, 7);
}

function updateTime(data) {
    const hours = document.getElementsByClassName("time");
    for(let i = 0; i < hours.length; i++)
        hours[i].innerText = data.hourly.time[i].slice(-5);
}

function updateTemp(data) {
    const temps = document.getElementsByClassName("temp");
    for(let i = 0; i < temps.length; i++)
        temps[i].innerText = Math.round(data.hourly.temperature_2m[i]) + "°C";
}