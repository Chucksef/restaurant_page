import home from './home.js';
import menu from './menu.js';
import locations from './locations.js';

function showPage(content) {
    let target = document.querySelector("#content");
    let element = document.createElement("article");
    element.innerHTML = content;
    target.appendChild(element);
}

function clearContent(lastElem) {
    
    let tabs = document.querySelectorAll(".tab");
    tabs.forEach(function(tab){
        tab.className = "tab";
    })
    
    lastElem.className = "tab selected";
    let target = document.querySelector("#content");
    target.innerHTML = "";

}

document.querySelector("#home-tab").addEventListener('click', function(e){
    clearContent(e.target);
    showPage(home());
    
})

document.querySelector("#menu-tab").addEventListener('click', function(e){
    clearContent(e.target);
    showPage(menu());

})

document.querySelector("#locations-tab").addEventListener('click', function(e){
    clearContent(e.target);
    showPage(locations());

})

showPage(home());