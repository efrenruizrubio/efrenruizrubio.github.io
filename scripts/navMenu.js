if(window.innerWidth < 768){
    const navToggle = document.querySelector('.nav-toggle');
    const button = document.querySelector('.header__aside__button');
    const items = Array.from(document.querySelectorAll('.header__list__item'));
    items.forEach(i => {
        i.addEventListener('click', toggleMenu);
    })
    navToggle.addEventListener('click', toggleMenu);
    button.addEventListener('click', toggleMenu);

    function toggleMenu (){
        document.body.classList.toggle('nav-open');  
    }
}