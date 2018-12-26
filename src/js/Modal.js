import anime from 'animejs';

const modal = function(){
    let modal = document.querySelector(".js-modal--content");
    let trigger = document.querySelector('.js-modal--trigger');
    let closeButton = document.querySelector('.js-modal--close');

    function toggleModal() {
        modal.classList.toggle("--show");
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
}

exports.modal = modal;