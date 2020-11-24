var toggleMenu = function() {
    var banner = document.querySelector('.banner');
    var menu = document.querySelector('.navbar');
    var button = document.querySelector('.header__menu-left');
    var overlay = document.querySelector('.overlay-menu');
    var body = document.querySelector('body');
    var btn = document.querySelector('.header__menu-left button');
        button.addEventListener('click', function() {
            menu.classList.toggle('show');
            banner.classList.toggle('translate');
            body.classList.toggle ('overflow');
            overlay.classList.toggle('show-overlay');
            btn.classList.toggle('close');
    })
        overlay.addEventListener('click', function() {
            menu.classList.remove('show');
            banner.classList.remove('translate');
            body.classList.remove ('overflow');
            overlay.classList.remove('show-overlay');
    })
}
toggleMenu();
// var activeMenu = function() {
//     var menu = document.querySelectorAll('.nav__list a');
//     for (var i = 0; i < menu.length; i++) {
//         menu[i].addEventListener('click', function () {
//            menu[i].classList.toggle('active');
//            for (let j=0; j<menu.length; j++) {
//             menu[j].classList.remove('active');
//         }
//         this.classList.add('active');
//         })
//     }
// }
// activeMenu();