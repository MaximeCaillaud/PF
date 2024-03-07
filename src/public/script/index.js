let offsetStart = 0;
let offsetEnd = 0;

window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll', ( window.pageYOffset - offsetStart ) / ( document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight ));
    console.log(( window.pageYOffset - offsetStart ) / ( document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight ));
}, false);


let menu = document.getElementById('menu');
let menubutton = document.getElementById('menu-button');
let closemenu = document.getElementById('close-menu');
menubutton.addEventListener('click', () => {
    menu.classList.toggle('open');
});

closemenu.addEventListener('click', () => {
    menu.classList.toggle('open');
});

let suitepage2 = document.getElementById('suitepage2');
let page2 = document.getElementById('page2');
suitepage2.addEventListener('click', () => {
    document.querySelector('.actual').classList.remove('actual');
    page2.classList.add('actual');
});