'use strict';
const modal = document.querySelector('.wrap');
const closeButton = document.querySelector('span');
const showButton = document.querySelector('button');

closeButton.addEventListener('click', function () {
    modal.classList.add('bounceOutLeft');
});

showButton.addEventListener('click', function () {
    modal.classList.remove('hidden');
    modal.classList.add('animated', 'bounceInLeft');
});
