const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);
const interpolate = (a, b) => (a = +a, b -= a, t => a + b * t);

const date = new Date();
$('#age').innerText = (+(date.getFullYear()) - 1996)

let timeout = null;
window.addEventListener('DOMContentLoaded', () => {
	$("body").classList.add('loaded');

	timeout = setTimeout(() => {
		window.scrollTo(0, window.innerHeight * 1.1)
	}, 4000)
	window.addEventListener('scroll', e => {
		clearTimeout(timeout);
	});

}, false);

var rellax = new Rellax('.rellax', {
	round: true,
	vertical: true,
});

const opacity = interpolate(0.2, 1);
const buildThreshold = (n) => Array.from(Array(n+1).keys()).map(el=>el/n);
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		$(`#nav [data-id="${entry.target.dataset.navId}"]`).style.setProperty('--opacity', opacity((entry.intersectionRatio).toFixed(2)))
	})
}, {
	threshold: buildThreshold(100)
});

const buildNav = () => {
	let nav = ``;
	$$('[data-nav-id]').forEach(section => {
		nav += `<span data-id="${section.dataset.navId}">${section.dataset.navTitle}</span>`;
		observer.observe(section);
	})
	$('#nav').innerHTML = nav;
}
buildNav();