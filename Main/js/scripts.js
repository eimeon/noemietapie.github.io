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
        console.log('Button clicked:', btn);
        const moreInfo = btn.nextElementSibling; // Get the sibling element which contains more information
        console.log('Next sibling:', moreInfo);

        if (moreInfo && (moreInfo.style.display === 'none' || !moreInfo.style.display)) {
            moreInfo.style.display = 'block'; // Show more information
            btn.textContent = 'Less info'; // Change button text
        } else if (moreInfo) {
            moreInfo.style.display = 'none'; // Hide more information
            btn.textContent = 'More info'; // Change button text back
        }
    });
});


});



document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.getElementsByClassName("close")[0];

    const images = document.getElementsByClassName("img-portfolio-modal");
    for (let img of images) {
        img.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});

function showContent(contentId) {
    // Hide all content sections
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Show the selected content
    var selectedContent = document.getElementById(contentId);
    selectedContent.classList.add('active');

}