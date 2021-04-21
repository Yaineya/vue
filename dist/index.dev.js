"use strict";

var plus = document.querySelector(".plus");
plus.addEventListener('onclick', counterPlus);
var inp = document.querySelector('.inp');

function counterPlus() {
  inp.value = inp.value + 1;
}