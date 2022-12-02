let button1 = document.querySelectorAll('.button1'),
    cross = document.querySelector('.modulWindow__cross'),
    modulWindow = document.querySelector('.modulWindow');

for(let elem of button1) {
    elem.addEventListener('click', function () {
        modulWindow.style.display = 'flex';
    });
}

cross.addEventListener('click', function () {
    modulWindow.style.display = 'none';
});