/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

var card12 = document.querySelector(".card--12");

card12.addEventListener('mousemove', function (e) {

  var wh = window.innerHeight / 2,
  ww = window.innerWidth / 2;
  card12.style.setProperty('--mouseX12', (e.clientX - ww) / 25);
  card12.style.setProperty('--mouseY12', (e.clientY - wh) / 25);

});

card12.addEventListener('mouseleave', function (e) {

  card12.style.setProperty('--mouseX12', 0);
  card12.style.setProperty('--mouseY12', 0);

});

