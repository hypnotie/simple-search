const content = document.querySelector('input');
const symbols = document.querySelector('p');
const txtCounter = document.querySelector('p span');

document.addEventListener('click', toggleSearch);
document.addEventListener('keyup', closeSearch);
content.addEventListener('keyup', txtSetCounter);
content.addEventListener('keydown', txtRepeat);

function toggleSearch(event) {
	if (event.target.closest('button')) {
		content.classList.toggle('hidden');
		symbols.classList.toggle('hidden');
	}
	if ((!event.target.closest('input')) && (!event.target.closest('button'))) {
		content.classList.remove('hidden');
		symbols.classList.remove('hidden');
	}
}

function closeSearch(event) {
	if (event.code === 'Escape') {
		content.classList.remove('hidden');
		symbols.classList.remove('hidden');
	}
}

function txtSetCounter() {
	txtCounter.innerHTML = content.value.length;
}

function txtRepeat(event) {
	if (event.repeat) txtSetCounter();
}