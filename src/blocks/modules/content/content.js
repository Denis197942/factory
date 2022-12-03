let buttons = document.querySelectorAll('.button2'),
    modal = document.querySelector('.content__mod'),
    titles = document.querySelectorAll('.content__title'),
    subtitle = document.querySelector('.content__modules-subtitle'), 
    tabs = document.querySelectorAll('.content__tab'),
    wraps = document.querySelectorAll('.content__wrap');

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        modal.style.display = 'flex';
        subtitle.innerHTML = titles[i].innerHTML;
    });
}

modal.addEventListener('click', function(e) {
    if(e.target === modal) {
        this.style.display = 'none';
    }
});

for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
        this.className += ' content__tab_active';
        wraps[i].style.display = 'block';
    });
};

  