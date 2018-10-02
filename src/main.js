import './styles.scss';
import anime from 'animejs';

let paramName = getUrlParameter("name").split("");
let paramLngt = paramName.length;

paramName.map( (letter) => {
    createSVGLetters(paramLngt, letter);
});

function createSVGLetters(lngt, letter){
    let svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#svg_${letter}`);
    svgElem.style = `width: ${100/lngt}%`;
    svgElem.appendChild(useElem);

    let el = document.querySelector('.svg__wrapper');
    el.insertAdjacentElement('beforeend', svgElem);
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};