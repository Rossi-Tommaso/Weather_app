const DAYLIST = [0, 24, 48, 72, 96, 120, 144];
const DAYS = document.querySelectorAll('.day');
let daynum = 0;

DAYS.forEach((day, index) => {
    day.addEventListener('click', () => {
        document.querySelector('.selected').classList.remove('selected');
        day.classList.add('selected');
        daynum = DAYLIST[index];
        cetch();
    });
});