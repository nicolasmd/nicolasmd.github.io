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

// Activate tooltips globally
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});
// Parse tooltips to replace {xstars} syntax by font awesome circles
$('[data-bs-toggle="tooltip"]').each(function (index) {
    const originalTitle = $(this).attr('data-bs-original-title');
    const search = /\{([1-5])(stars)\}/;
    if (match = originalTitle.match(search)) {
        let replace = '<div class="col text-nowrap">';
        for (let i = 0; i < 5; i++) {
            replace += match[1] <= i ? '<i class="fa-regular fa-circle"></i>&nbsp;' : '<i class="fa fa-circle"></i>&nbsp;';
        }
        replace += '</div>'
        $(this).attr('data-bs-original-title', originalTitle.replace(match[0], replace));
    }
});
