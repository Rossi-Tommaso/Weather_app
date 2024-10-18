const days = document.querySelectorAll('.day');

days.forEach(day => {
    day.addEventListener('click', () => {
        document.querySelector('.selected').classList.remove('selected');
        day.classList.add('selected');
    });
});