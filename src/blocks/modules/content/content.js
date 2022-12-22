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

if (window.matchMedia("(max-width: 768px)").matches) {
    const header = document.querySelector('.content__tabs'),
      tab = document.querySelectorAll('.content__tab'),
      content = document.querySelectorAll('.content__wrap');

      function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove('content__tab_active');
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add('content__tab_active');

    }

    hideTabContent();
    showTabContent();  

    header.addEventListener('click', function(e) {
        const target = e.target;
        // if(target.classList.contains(tab.replace(/\./, "")) || target.parentNode.classList.contains(tab.replace(/\./, ""))) 
            tab.forEach((item, i) => {
                if(target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        
    });


  
  }

