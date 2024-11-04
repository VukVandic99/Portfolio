/*--------------------  Background Header --------------------*/
function scrollHeader(){
    const header = document.getElementById('header');
    //  when the scroll is greater than 50 vp height:
    //  add the schroll-header to header tag
    if(this.scrollY >= 50)
    //  as soon as we start scrolling then we add a class:
        header.classList.add('scroll-header');
    else 
    // else if we get back up it removes
        header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*--------------------  Menu toggle javascript --------------------*/
const navMenu = document.getElementById('nav_menu'), navToggle = document.getElementById('nav_toggle'),
navClose = document.getElementById('nav_close');

//  menu show
//  if we have navtoggle in responsive then:
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show_menu');
    })
}

//  menu hide
//  if we have navtoggle in responsive then:
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show_menu');
    })
}

/*--------------------  Remove menu mobile --------------------*/
const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu = document.getElementById('nav_menu');
    //  when we click on each link we remove the show menu class
    navMenu.classList.remove('show_menu')
}
navLink.forEach((n) => n.addEventListener('click', linkAction))