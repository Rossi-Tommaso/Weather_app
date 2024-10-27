const DAYLIST = [0, 24, 48, 72, 96, 120, 144];
const DAYS = document.querySelectorAll('.day');
let daynum = 0;
let pageIndex = 0;

DAYS.forEach((day, index) => {
    day.addEventListener('click', () => {
        document.querySelector('.selected').classList.remove('selected');
        day.classList.add('selected');
        daynum = DAYLIST[index];
        pageIndex = index;
        geocode();
    });
});

function geocode() {
    let city = document.getElementById("city").value;
    let provincia = document.getElementById("provincia").value;
    let country = document.getElementById("country").value;
    geocetch(city, provincia, country);
}