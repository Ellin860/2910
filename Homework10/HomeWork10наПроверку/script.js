const menuActive = document.querySelector('.hiddenMenu'); // Находим меню
const burger = document.querySelector('.rightBut displ'); // Находим кнопку бургера
const menuClose = document.querySelector('.closed'); // Находим кнопку крестика

function toggleMenu() {
	menuActive.classList.toggle('hidden'); //
}

burger.addEventListener('click', toggleMenu); // 
menuClose.addEventListener('click', toggleMenu); // 