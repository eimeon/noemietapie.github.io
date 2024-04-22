/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    

});




document.addEventListener('DOMContentLoaded', () => {
   // Get all the expand buttons
const expandBtns = document.querySelectorAll('.expand-btn');

// Add event listeners to each expand button
expandBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const moreInfo = btn.nextElementSibling; // Get the sibling element which contains more information

        if (moreInfo.style.display === 'none') {
            moreInfo.style.display = 'block'; // Show more information
            btn.textContent = 'Less Information'; // Change button text
        } else {
            moreInfo.style.display = 'none'; // Hide more information
            btn.textContent = 'More Information'; // Change button text back
        }
    });
});

});


