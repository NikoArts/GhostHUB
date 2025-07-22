const Swipe1 = document.createElement('audio');
		Swipe1.src = 'Swipe1.ogg';
		Swipe1.preload = 'auto';
		document.body.appendChild(Swipe1);
	
const Swipe2 = document.createElement('audio');
		Swipe2.src = 'Swipe2.ogg';
		Swipe2.preload = 'auto';
		document.body.appendChild(Swipe2);

function Enter() {
	const overlay = document.getElementById('fade-overlay');
	const initial = document.getElementById('initial-layout');
	const next = document.getElementById('new-layout');

	document.getElementById("initial-layout").classList.add("slide-up");

	overlay.style.pointerEvents = 'auto';
	overlay.style.opacity = 1;
	
	Swipe1.currentTime = 0;
	Swipe1.play();

	setTimeout(() => {
		initial.style.display = 'none';
		next.style.display = 'flex';
		overlay.style.opacity = 0;
		overlay.style.pointerEvents = 'none';
		Swipe2.currentTime = 0;
		Swipe2.play();
	}, 1000);
}

function toggleDescription(button) {
	const desc = button.closest('.story-info').querySelector('.description');
	desc.classList.toggle('expanded');
	button.textContent = desc.classList.contains('expanded') ? 'свернуть' : 'читать больше';
	Swipe1.currentTime = 0;
	Swipe1.play();
}

function goToStory(url) {
	window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {
	const btn = document.querySelector('.magical-button');
	if (!btn) return;
	const txt = btn.textContent;
	btn.textContent = '';
	const span = document.createElement('span');
	span.textContent = txt;
	const div = document.createElement('div');
	btn.appendChild(span);
	btn.appendChild(div);
});

var Audio = new Audio('Mind.ogg'); 

window.addEventListener('load', function (){
		Audio.play(); 
	Audio.loop = true;
	Audio.muted = false;
	Audio.volume = 0.1;
});