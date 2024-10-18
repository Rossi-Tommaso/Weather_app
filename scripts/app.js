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
        updateTime(data);
        // Puoi usare i dati qui per aggiornare l'interfaccia utente o altro
    })

function updateTime(data) {
    const time = data.daily.time[0];
    console.log("geouwiuwbgwariiyrihygrihgryggbryebygarigygrhrhagrihgarih");
    console.log(time);
}