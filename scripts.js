const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const date = new Date();
$('#age').innerText = (+(date.getFullYear()) - 1996)

window.addEventListener('DOMContentLoaded', () => {
	$("body").classList.add('loaded');
}, false);

var rellax = new Rellax('.rellax', {
	round: true,
	vertical: true,
});