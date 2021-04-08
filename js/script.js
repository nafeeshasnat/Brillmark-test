var secondarySlider = new Splide( '#secondary-slider', {
    fixedWidth : 370,
    height     : 400,
    gap        : 30,
    rewind     : true,
    pagination : true,
    autoplay   : true,
    perPage     : 2,
    breakpoints : {
        '600': {
            fixedWidth : 370,
            height     : 400,
        }
    },
    classes: {
		arrows: 'splide__arrows your-class-arrows',
		arrow : 'splide__arrow your-class-arrow',
		prev  : 'splide__arrow--prev your-class-prev',
		next  : 'splide__arrow--next your-class-next',
	},
} ).mount();


