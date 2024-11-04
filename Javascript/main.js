/* this is javascript library mixitup, for filtering and animation on a webpage */
//  swipper:
//  initialising mixitup on element .projects_container
var mixerProjects = mixitup('.projects_container', {
    //  now the elements that are for filtering are selected by: 
    selectors: {
        target: '.project_item'
    },
    //  this is the duration of filtering
    animation: {
        duration: 800
    }
});
mixerProjects.hide()
/*this block of code will be dedicated to add and remove active-wrok
so that the clicked filter will have style of active-work and the nonclicked
will have the standard style */
const styleWork = document.querySelectorAll('.category_btn');
//  this line is to find all elements with the class .category_btn, which are all the buttons to filter
//  the . before the element must be included!
function activeWork() {
    //  this is a function that is called when you click on any of the filters
    styleWork.forEach((btnList) => btnList.classList.remove('active-work'));
    
    this.classList.add('active-work');
    //  when the class activeWork() is called, onclick in this case
    //  it puts active-work on the clicked filter
}
styleWork.forEach((btnList) => btnList.addEventListener('click', activeWork));
//  adding eventlistener on every styleWork and will be called when clicked 'click'

/*--------------------  Email Javascript --------------------*/
/*--------------------  Active Link --------------------
//  we are taking the list of nav_link class
const navlink = document.querySelectorAll('.nav_link');
function activeLink(){
    //  active link is a class in .nav-menu li a
    navlink.forEach((a) => a.classList.remove('active_link'))
    //  then making a loop to go threw all the nav_link and remove active_link
    this.classList.add('active_link');
    //  then at the end we are going to add class active-link which is
    //  opacity: 0.5;
}
navlink.forEach((a)=> a.addEventListener('click', activeLink))
//  on clink on navlink add function activeLink
*/