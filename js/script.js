document.addEventListener('DOMContentLoaded', function() {
	$('.technic-slider').slick({
		arrows:true,
		adaptiveHeight:true,
		centerPadding: 0,
		slidesToShow:4,
		responsive:[
			{
				breakpoint: 1188,
				settings: {
					slidesToShow:3,
				}
			},
			{
				breakpoint: 887,
				settings: {
					slidesToShow:2,
				}
			},
			{
				breakpoint: 605,
				settings: {
					slidesToShow:1,
				}
			}
		]
	});
	$('.work-slider').slick({
		arrows:true,
		adaptiveHeight:true,
		centerPadding: 0,
		slidesToShow:2,
		responsive:[
			{
				breakpoint: 520,
				settings: {
					slidesToShow:1,
				}
			},
		]
	});
	// maskedInput
	$(".phone-input").mask("+7(999) 999-9999");
});

// modulWindows
const orderBtnCallTop = document.querySelector('.call__order-btn__header');
const orderBtnCallBottom = document.querySelector('.call__order-btn__footer');
const formOrderCallClose = document.querySelector('.form__order-call__icon');
const formOrderSend = document.querySelector('.modul-page__sendBtn');
const orderCall = document.querySelector('.form__order-call__back');

if (orderBtnCallTop) {	
	orderBtnCallTop.addEventListener("click", function(e){
		document.body.classList.add('lock');
		orderCall.classList.add('active');
		console.log('ModulWindow "orderCall" opened by upper btn. Body locked')
	});
}
if (orderBtnCallBottom) {	
	orderBtnCallBottom.addEventListener("click", function(e){
		document.body.classList.add('lock');
		orderCall.classList.add('active');
		console.log('Modul Window "orderCall" opened by bottom btn. Body locked')
	});
}
if (formOrderCallClose) {
	formOrderCallClose.addEventListener("click", function(e){
		document.body.classList.remove('lock');
		orderCall.classList.remove('active');
		console.log('Modul Window "orderCall" closed by close btn. Body unlocked')
	});
}
if (formOrderSend) {
	// formOrderSend.addEventListener("click", function(e){
	// 	document.body.classList.remove('lock');
	// 	orderCall.classList.remove('active');
	// 	console.log('Modul Window "orderCall" closed by send btn. Body unlocked')
	// });
}

const orderService = document.querySelector('.form__order-service__back');
const orderServiceBtn = document.querySelector('.cost-order__btn');
const orderServiceClose = document.querySelector('.form__order-service__icon');
const formOrderServiceSend = document.querySelector('.form-service__send');


if (orderServiceBtn) {	
	orderServiceBtn.addEventListener("click", function(e){
		document.body.classList.add('lock');
		orderService.classList.add('active');
		console.log('ModulWindow "orderService" opened. Body locked')
	});
}
if (orderServiceClose) {
	orderServiceClose.addEventListener("click", function(e){
		document.body.classList.remove('lock');
		orderService.classList.remove('active');
		console.log('Modul Window "orderService" closed by close btn. Body unlocked')
	});
}
if (formOrderServiceSend) {
	// formOrderServiceSend.addEventListener("click", function(e){
	// 	document.body.classList.remove('lock');
	// 	orderService.classList.remove('active');
	// 	console.log('Modul Window "orderService" closed by send btn. Body unlocked')
	// });
}