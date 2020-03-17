import home from './home.js';
import menu from './menu.js';
import locations from './locations.js';

function showPage(content) {
    let target = document.querySelector("#content");
    let element = document.createElement("article");
    element.innerHTML = content;
    target.appendChild(element);
}

function resetPage(clickedElem) {
    
    // clear all tabs to only have class: 'tab'
    let tabs = document.querySelectorAll(".tab");
    tabs.forEach(function(tab){
        tab.className = "tab";
    })

    let relevantLI;
    if( clickedElem.nodeName == "EM" ) {
        relevantLI = clickedElem.parentNode;
    } else {
        relevantLI = clickedElem.nodeName == "LI" ? clickedElem : undefined;
    }

    relevantLI.className = "tab selected";

    // actually clear content...
    let target = document.querySelector("#content");
    target.innerHTML = "";

}

document.querySelector("#home-tab").addEventListener('click', function(e){
    resetPage(e.target);
    showPage(home());
    
})

document.querySelector("#menu-tab").addEventListener('click', function(e){
    resetPage(e.target);
    showPage(menu());

})

document.querySelector("#locations-tab").addEventListener('click', function(e){
    resetPage(e.target);
    showPage(locations());

})

showPage(home());