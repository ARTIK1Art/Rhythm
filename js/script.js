"use strict"

const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	autoHeight: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
});