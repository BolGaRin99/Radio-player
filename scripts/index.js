import { radioPlayerInit } from './radioPlayer.js';

const playerBtn = document.querySelector('.player-btn');
const playerBlock = document.querySelector('.player-block');
const temp = document.querySelector('.temp');

const deactivationPlayer = () => {
    temp.style.display = 'none';
    playerBtn.classList.remove('active');
    playerBlock.classList.remove('active');
};

playerBtn.addEventListener('click', () => {
    deactivationPlayer();
    playerBtn.classList.add('active');
    playerBlock.classList.add('active');
});

// Инициализация радио
radioPlayerInit();

// Автоматическое нажатие кнопки радио при загрузке страницы
window.addEventListener('load', () => {
    playerBtn.click();
});