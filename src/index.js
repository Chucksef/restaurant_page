import home from './home.js';
import menu from './menu.js';
import locations from './locations.js';

function showPage(content) {
    let target = document.querySelector("#content");
    let element = document.createElement("article");
    element.innerHTML = content;
    target.appendChild(element);
}

function clearContent() {
    let target = document.querySelector("#content");
    target.innerHTML = "";
}

document.querySelector("#home-tab").addEventListener('click', function(){
    clearContent();
    showPage(home());
})

document.querySelector("#menu-tab").addEventListener('click', function(){
    clearContent();
    showPage(menu());
})

document.querySelector("#locations-tab").addEventListener('click', function(){
    clearContent();
    showPage(locations());
})

showPage(home());