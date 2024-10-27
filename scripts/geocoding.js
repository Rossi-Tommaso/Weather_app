function geocetch(city, provincia, country) {
    const LINK = `http://api.positionstack.com/v1/forward?access_key=262787dd3b28751cd5b9eddab4200e30&query=${city},${provincia},${country}`;
    
    fetch(LINK)
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore nella risposta della richiesta');
            }
            return response.json(); // Convertire in formato JSON
        })
        .then(data => {
            updateCoordinates(data);
        })

    function updateCoordinates(data) {
        let button = document.getElementById("invio-button");
        let latitude = data.data[0].latitude;
        let longitude = data.data[0].longitude;
        let outputRicerca = document.createElement(`div`);
        outputRicerca.innerText = `Risultato della ricerca: ${data.data[0].label}`;
        button.append(outputRicerca);
        cetch(latitude, longitude);
    }
}