// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
	// Optional parameters
	slidesPerView: 4,
	loop: true,

	// If we need pagination
	pagination: {
	el: '.swiper-pagination',
	},

});


// функционал Сервис и Условия работы, при клике, что выводит на экран пользователю

document.getElementById('btn-clickActiv').addEventListener('click',function(){
	let newText2 = [
		'Работа с организациями на системе налогообложения',
		'Скидка в зависимости от объема заказа в месяц',
		'Доставка малыми и большими партиями в любые регионы России в краткие сроки',
		'Услуги фулфилмента для интернет-магазинов'
	];

	for (let i = 0; i < newText2.length; i++){
		let active = document.getElementById('active' + (i+1));
		if (active){
			active.textContent = newText2[i];
		}
	}
})

document.getElementById('btn-click').addEventListener('click',function(){
	let newText = [
		'Каждый заказ плотно упаковывается',
		'Отгружаем любой заказ в течение дня',
		'Наши менеджеры работают 7 дней в неделю и всегда на связи',
		'У нас только оригинальный и сертифицированный товар'
	];


	for (let i = 0; i < newText.length; i++){
		let active = document.getElementById('active' + (i+1));
		if (active){
			active.textContent = newText[i];
		}
	}
})


// Функционал Условия работы и Сервис, а именно меняем цвет и стили
let conditionOf = document.getElementById('btn-clickActiv');
let Service = document.getElementById('btn-click');

function toggleStyle(){
	conditionOf.style.color='';
	conditionOf.style.borderBottom = '';
	conditionOf.style.opacity = '';
	Service.style.color='';
	Service.style.borderBottom = '';
	Service.style.opacity = '';

	// Проверяем, какой элемент был кликнут
    if (this === conditionOf) {
        // Если кликнул на "Условие работы", применяем стили к "Сервису"
		conditionOf.style.color = 'blue';
        conditionOf.style.borderBottom = '2px solid blue';
		conditionOf.style.opacity = '1';
        
    } else {
       
		Service.style.color = 'blue';
        Service.style.borderBottom = '2px solid blue';
		Service.style.opacity = '1';
		conditionOf.style.opacity = '0.2';
    }
}
conditionOf.addEventListener('click', toggleStyle);
Service.addEventListener('click', toggleStyle);


// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
import { doc } from 'firebase/firestore/lite';
mobileNav();
