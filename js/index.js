/*===============toggle icon navbar ===============*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
};
/*===============scroll sections active link ===============*/

// Select all the sections in the document and store them in the 'sections' variable.
let sections = document.querySelectorAll("section");

// Select all the navigation links within the 'header nav' element and store them in the 'navLinks' variable.
let navLinks = document.querySelectorAll("header nav a");

// Assign a function to the 'onscroll' event of the window. This function will be triggered whenever the user scrolls the page.
window.onscroll = () => {
  // Get the current vertical scroll position of the page.
  let top = window.scrollY;

  // Loop through each 'section' element in the 'sections' NodeList.
  sections.forEach((sec) => {
    // Get the offset from the top of the document to the current 'section' element minus 150 pixels. This is the offset value at which the 'section' is considered to be in the viewport.
    //the distance between the top of the <section> and the top of the document. By subtracting 150 pixels from this value, an offset is created, 
    //meaning the <section> is considered to be in the viewport 150 pixels before it actually reaches the top of the visible area.
    let offset = sec.offsetTop - 100;

    // Get the height of the current 'section' element.
    let height = sec.offsetHeight; // incloding the padding , not including the margines or borders 
    // Get the 'id' attribute of the current 'section' element. This will be used to identify the corresponding navigation link.
    let id = sec.getAttribute("id");

    // Check if the current vertical scroll position is greater than or equal to the offset and less than the offset plus the height of the 'section'. This indicates that the 'section' is currently in the viewport.
    if (top >= offset && top < offset + height) {
      // Loop through each 'navLinks' element in the 'navLinks' NodeList.
      navLinks.forEach((link) => {
        // Remove the 'active' class from all navigation links. This ensures that only the link corresponding to the current 'section' will have the 'active' class.
        link.classList.remove("active");
      });

      // Select the navigation link that corresponds to the current 'section' by using the 'id' attribute in the href value. Add the 'active' class to this navigation link to highlight it.
      document
        .querySelector(`header nav a[href="#${id}"]`)
        .classList.add("active");
    }
  });

  /*===============sticky navbar ===============*/
let header = document.querySelector('header') ;
header.classList.toggle('sticky', window.scrollY > 100) ;

/*===============remove toggle icon navbar when scrolling ===============*/

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

/*=================SCROLL REVEAL =========================*/

ScrollReveal({ 
  // reset: true ,
 distance: '80px' ,
 duration: 2000,
 dely: 200

});

ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img , .services-container , .portfolio-box , .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p , .about-content', { origin: 'right' });


/*================= typed js========================*/

const typed = new Typed('.multiple-text',{
  strings: ['Engineering Student' , 'Human' , 'programmmmmer'] ,
  typedSpeed:100,
  backspeed:100,
  backDelay:1000,
  loop: true 
});