/**
 * Define Global Variables
 * 
*/
const sections =document.querySelectorAll('section');
const navigationBar=document.getElementById('navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// create the navigation bar 
const createNavigationBar= () => {
    //loop around all sections
    for(section of sections){
        //get sectionID and section link
        let sectionDN=section.getAttribute('data-nav');
        let sectionID=section.getAttribute('id');
        //creating an item for each section
        let listElement= document.createElement('li');
        //add anchor tag as html content for listElement
        listElement.innerHTML=`<a class="menu__link" href='#${sectionID}'>${sectionDN}</a>`;
        
        //add listElement as a child for navigation bar
        navigationBar.appendChild(listElement);
    }
}
//build navigation bar
createNavigationBar();

// Add class 'active' to section when near top of viewport

//function for remove the active class status if it exists
function removeStatus(section){
    section.classList.remove('your-active-class');
};

//function for add the active class
function addStatus(section){
    section.classList.add('your-active-class');
}

//Set the active status function which toggling the active class for each section
function setActiveStatus(){
    sections.forEach(section=>{
        //getting the top of the section of the viewport
        const elementRect=section.getBoundingClientRect().top;
        removeStatus(section);
        //add the active status class if the section in viewport while scrolling
        if(elementRect<250&&elementRect>-250){
            addStatus(section);
        }
    });
};
//apply the setActiveStatus() function while scrolling
window.addEventListener("scroll",setActiveStatus);    

// Scroll to link method
function scrollingMove(){
    //get all anchors as navigationBar list
    const navigationBar=document.querySelectorAll(".navbar__menu ul a");
    navigationBar.forEach(item=>{
        item.addEventListener("click",clickBehaviour)
    });

};
//The listener of the event using scroll built-in method
function clickBehaviour(e){
    e.preventDefault();
    //get the link of the section.
    const link = this.getAttribute("href");
    //get the top offset of the section which will scroll to.
    const sectionTop = document.querySelector(link).offsetTop;
   
    //set the value of behaviour property to smooth and top property to the offsetTop of section
    scroll({
      top: sectionTop,
      behavior: "smooth"
    });
}
// Scroll to section on link click
scrollingMove();

//add active state for active link
window.onscroll = () => {
    //avtive sections and link
    sections.forEach(section => {
        //get the window location
        const sectionTop = section.getBoundingClientRect().top;
        const activeLink = document.querySelector(`a[href="#${section.id}"]`);
        if (sectionTop > 150 - section.offsetHeight && sectionTop < 150) {
            activeLink.classList.add("active");
        } else {
            activeLink.classList.remove("active");
        }
    }, )
}