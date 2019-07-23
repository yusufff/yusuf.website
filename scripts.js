const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const date = new Date();
$('#age').innerText = (+(date.getFullYear()) - 1996)