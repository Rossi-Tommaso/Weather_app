const LATITUDE = 45.0705;
const LONGITUDE = 7.6868;

const LINK = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin`;

function cetch() {
    fetch(LINK)
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore nella risposta della richiesta');
            }
            return response.json(); // Convertire in formato JSON
        })
        .then(data => {
            console.log(data);
        })
}

cetch();