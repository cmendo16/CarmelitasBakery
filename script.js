'use strict';

const leftBtn = document.querySelector('.carousel-btn.left');
const rightBtn = document.querySelector('.carousel-btn.right');

const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
const navItems = Array.from(document.querySelectorAll('.nav-item'));
const CAROUSEL_SIZE = carouselItems.length;

// initializing the first carousel item and nav item as active
if (carouselItems.length > 0 && navItems.length > 0) {
    carouselItems[0].classList.add('active');
    navItems[0].classList.add('active');
}

leftBtn.addEventListener('click', swipeLeft);// adding event listener to left btn 
rightBtn.addEventListener('click', swipeRight);// adding event listener to the right btn 

// definiing the function for swiping left 
function swipeLeft() {
    const currentCarouselItem = document.querySelector('.carousel-item.active');
    const currentIndex = carouselItems.indexOf(currentCarouselItem);
    let nextIndex = currentIndex === 0 ? CAROUSEL_SIZE - 1 : currentIndex - 1;

    carouselItems[currentIndex].classList.remove('active');
    navItems[currentIndex].classList.remove('active');
    carouselItems[nextIndex].classList.add('active');
    navItems[nextIndex].classList.add('active');
}

// defining the function for when we swipe right 
function swipeRight() {
    const currentCarouselItem = document.querySelector('.carousel-item.active');
    const currentIndex = carouselItems.indexOf(currentCarouselItem);
    let nextIndex = currentIndex === CAROUSEL_SIZE - 1 ? 0 : currentIndex + 1;

    carouselItems[currentIndex].classList.remove('active');
    navItems[currentIndex].classList.remove('active');
    carouselItems[nextIndex].classList.add('active');
    navItems[nextIndex].classList.add('active');
}

// iterating through the navItems array and adding an event listener
navItems.forEach((navItem, index) => {
    navItem.addEventListener('click', () => {
        if (!navItem.classList.contains('active')) {
            const currentCarouselItem = document.querySelector('.carousel-item.active');
            const currentIndex = carouselItems.indexOf(currentCarouselItem);

            carouselItems[currentIndex].classList.remove('active');
            navItems[currentIndex].classList.remove('active');
            carouselItems[index].classList.add('active');
            navItems[index].classList.add('active');
        }
    });
});
