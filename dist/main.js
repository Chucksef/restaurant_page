!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var r=()=>"\n        <h1>Hank's Hand-Grilled Franks</h1>\n        <h2>ESTD 1973</h2>\n        <h3>Backyard Grilling Forever</h3>\n        <p>Hank's signature hand-grilled franks are the perfect summer food served all year long. Come to any of our 12 Chicagoland locations, all open for drive-through 24/7!</p>\n    ";var o=()=>"\n        <h1>Bosco's Tacos</h1>\n        <h3>Appetizers</h3>\n        <h5>Little Tacos</h5>\n        <p>$8</p>\n        <h5>Taco Platter</h5>\n        <p>$11</p>\n        <h3>Entreés</h3>\n        <h5>Bosco's Bozo Taco</h5>\n        <p>$6</p>\n        <h5>3 Tacos</h5>\n        <p>$12</p>\n        <h5>Big Tacos</h5>\n        <p>$16</p>\n        <h5>Large Taco Platter</h5>\n        <p>$20</p>\n    ";var a=()=>"\n        <h1>Bosco's Tacos</h1>\n        <h3>Mall Location</h3>\n        <p>In the Flesham Mall between the abandoned Radio Shacks</p>\n    ";function c(e){let n=document.querySelector("#content"),t=document.createElement("article");t.innerHTML=e,n.appendChild(t)}function l(){document.querySelector("#content").innerHTML=""}document.querySelector("#home-tab").addEventListener("click",(function(){l(),c(r())})),document.querySelector("#menu-tab").addEventListener("click",(function(){l(),c(o())})),document.querySelector("#locations-tab").addEventListener("click",(function(){l(),c(a())})),c(r())}]);