/*
Website Name: KAII Lab | Creative Agency
Website URL: ?????????
Version: 1.0
Author: N/A
Author URL: N/A

1.  Basics
2.  Header
3.  Footer
4.  Elements
5.  Portfolio
6.  Pages
7.  Blog
8.  Transitions
9.  Media Quieries
*/



(function($){
"use strict";

$(document).ready(function() {


	var win_h 						= $(window).height(),
		win_w 						= $(window).width(),
		mouseX 						= win_w/2,
		mouseY 						= win_h/2,
		mouseNewX 					= win_w/2,
		mouseNewY 					= win_h/2,
		resizeTimer,
		scrollBar,
		is_desktop 					= true,
		is_small_desktop 			= false,
		is_tablet 					= false,
		is_mobile 					= false,
		is_full_screen				= $("html").hasClass("fullscreen"),
		is_full_width				= $("html").hasClass("fullwidth"),
		form_sending 				= false,
		overlayPath = document.querySelector('.overlay__path');


		// Math Helpers Functions Object
	        const math_helpers = {
		        //	Range Conversion Style 1
		        	map: (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c,

		        //	Range Conversion Style 2
			        convertRange: (oldValue, oldRangeMin, oldRangeMax, newRangeMin, newRangeMax) => {
			        		var oldRange = oldRangeMax - oldRangeMin,
								newRange = newRangeMax - newRangeMin,
								newValue = (((Math.abs(oldValue) - oldRangeMin)*newRange)/oldRange + newRangeMin);

							return newValue;
			        },

		        // Linear Interpolation LERP
		        	lerp: (a, b, n) => (1 - n) * a + n * b,

		        // Random float
		        	getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2),

		        //	Clamp
		        	clamp: (num, min, max) => num <= min ? min : num >= max ? max : num,

	        	//	Throttle
	        		throttle: (method, scope, duration) => {		//	fire resize every 50, or ever 200, instead of high speed
	        			clearTimeout(method._tId);
					    method._tId= setTimeout(function(){
					        method.call(scope);
					    }, duration);
	        		},

	    		//	Debounce
	    			debounce: (method, delay) => {				//	dont show his writing text, untill he stops writing for 2sec
					    clearTimeout(method._tId);
					    method._tId= setTimeout(function(){
					        method();
					    }, delay);
	    			}
		    };

	// ----------------------
	// Global
	// ----------------------

		//	Refreshing The Page If The Browser Back/Forward Button Was Used
			window.addEventListener( "pageshow", function ( event ) {
			  var historyTraversal = event.persisted || (typeof window.performance != "undefined" && window.PerformanceNavigationTiming.type === "back_forward");
			  if (historyTraversal) {
			    window.location.reload();
			  }
			});
		
		//	Responsiveness Flags & Browser Type

			if(win_w > 1680) {

				is_desktop 			= true;
				is_small_desktop 	= false;
				is_tablet 			= false;
				is_mobile 			= false;
			}
			else if(win_w <= 1680 && win_w > 1300) {

				is_desktop 			= false;
				is_small_desktop 	= true;
				is_tablet 			= false;
				is_mobile 			= false;
			}
			else if(win_w <= 1300 && win_w > 1024) {

				is_desktop 			= false;
				is_small_desktop 	= false;
				is_tablet 			= true;
				is_mobile 			= false;
			}
			else if(win_w <= 1024) {

				is_desktop 			= false;
				is_small_desktop 	= false;
				is_tablet 			= false;
				is_mobile 			= true;
			}

		//	Logo Animation Function
			//	End the logo animation and play the .hero gsap timeline and remove the overflow hidden
			function end_logo_animation() {


				$(".intro-overlay").addClass('hide_overlay');

				setTimeout(function(){
					$("html").addClass('show_scroll');
				}, 1800)

				hero_h1_tl.play();

			}

		//	Menu Layer Events

			//	Drop Menu Timeline
					// Change between css styles and gsap styles
				let menu_down_tl = gsap.timeline({paused: true});

					menu_down_tl.to("header nav",
								{
									duration: 1.5,
									y: 0,
									opacity: 1,
									ease: Expo.easeOut,
									overwrite: true,
									immediateRender: false,
								}
							);

					menu_down_tl.to("header nav ul > *",
							{
								duration: 1.5,
								x: 0,
								opacity: 1,
								ease: Expo.easeOut, 
								immediateRender: false,
								overwrite: true,
								stagger:
								{
								    from: "start",
								    amount: 0.5,
							  	}
							}, 0.3
						);

					menu_down_tl.to("header nav .nav-logo-cursor",
							{
								duration: 2.5,
								rotation: 180,
								scale: 1,
								y: 0,
								ease: Expo.easeOut, 
								immediateRender: false,
								overwrite: true,
							}, 0.1
						);

			//	Menu Button Events
				$("header button").on('click', function(e) {
			      	
			      	$("header").toggleClass("show_drop_menu");

			      	if ($("header").hasClass('show_drop_menu')) {
			      		menu_down_tl.timeScale(1).play();
			      	} else {
			      		menu_down_tl.timeScale(3).reverse();	//	making the reverse animating with double speed, which means 2.5 x faster
			      	}

			    });

			//	Hide Drop Menu if menu is dropped and scroll fires
		    	$(document).on('scroll', function(event) {

			    		math_helpers.throttle(function(){

			    			if ($("header").hasClass('show_drop_menu')) {

			    				$("header").removeClass("show_drop_menu");

			    				menu_down_tl.timeScale(3).reverse();

			    			}

						}, window, 50);

			    });

		//	Animate Hero SVG Waves Pathes

			//	Both left, right and contact us waves have 10 path variations to toggle between
			const left_wave_paths = [
				"M 0,0 L 0,0 L 0.3,0 C .17 .67, .86 .53, 0.5 1 L 0,1 Z",
				"M 0,0 L 0,0 L 0.3,0 C .17 .67, .36 .53, 0.5 1 L 0,1 Z",
				"M 0,0 L 0,0 L 0.2,0 C .17 .67, .86 .53, 0.4 1 L 0,1 Z",
				"M 0,0 L 0,0 L 0.3,0 C .37 .67, .86 .53, 0.5 1 L 0,1 Z",
				"M 0,0 L 0,0 L 0.3,0 C .17 .67, .86 .23, 0.3 1 L 0,1 Z",
				"M 0,0 L 0,0 L 0.15,0 C .17 .67, .86 .53, 0.5 1 L 0,1 Z",
				"M 0,0 L 0,0 L 0.25,0 C .47 .27, .86 .53, 0.5 1 L 0,1 Z",
				"M 0,0 L 0,0 L 0.3,0 C .37 .87, .86 .53, 0.5 1 L 0,1 Z",
				"M 0,0 L 0,0 L 0.3,0 C .67 .87, .26 .93, 0.3 1 L 0,1 Z",
				"M 0,0 L 0,0 L 0.5,0 C .77 .67, .86 .63, 0.5 1 L 0,1 Z",
			];

			const right_wave_paths = [
				"M 1,1 L 1,1 L 0.5,1 C .17 .67, .86 .53, 0.5 0 L 1,0 Z",
				"M 1,1 L 1,1 L 0.2,1 C .17 .27, .96 .53, 0.5 0 L 1,0 Z",
				"M 1,1 L 1,1 L 0,1 C .37 .67, .86 .53, 0.5 0 L 1,0 Z",
				"M 1,1 L 1,1 L 0,1 C .17 .67, .86 .53, 1 0 L 1,0 Z",
				"M 1,1 L 1,1 L 0,1 C .17 .27, .86 .53, 0.2 0 L 1,0 Z",
				"M 1,1 L 1,1 L 0.4,1 C .17 .67, .86 .53, 0.5 0 L 1,0 Z",
				"M 1,1 L 1,1 L 0,1 C .87 .17, .36 .53, 0.5 0 L 1,0 Z",
				"M 1,1 L 1,1 L 0.6,1 C .87 .17, .36 .53, 0.5 0 L 1,0 Z",
				"M 1,1 L 1,1 L 0.5,1 C .17 .37, .26 .13, 0.5 0 L 1,0 Z",
				"M 1,1 L 1,1 L 0.2,1 C .57 .87, .26 .13, 0.2 0 L 1,0 Z",
			];

			const contact_us_wave_paths = [
				"M 0,0 L 0,0 L 0,0 C .02 .87, .36 .83, 1 1 L 0,1 Z",
				"M 0,0 L 0,0 L 0.1,0 C .05 .27, .36 .83, 1 1 L 0,1 Z",
				"M 0,0 L 0,0 L 0,0 C .1 .87, .76 .83, 1 1 L 0,1 Z",
				"M 0,0 L 0,0 L 0,0.7 C .2 .27, .36 .83, 1 1 L 0,1 Z",
				"M 0,0 L 0,0 L 0,0 C .35 .87, .36 .83, 1 1 L 0,1 Z",
				"M 0,0 L 0,0 L 0.3,0 C .3 .87, .16 .83, 1 1 L 0,1 Z",
				"M 0,0 L 0,0 L 0,0 C .24 .87, .36 .83, 1 1 L 0,1 Z",
				"M 0,0 L 0,0 L 0,0.5 C .18 .87, .86 .83, 1 1 L 0,1 Z",
				"M 0,0 L 0,0 L 0,0 C .05 .87, .36 .83, 1 1 L 0,1 Z",
				"M 0,0 L 0,0 L 0,0.2 C .01 .47, .36 .83, 1 1 L 0,1 Z",
			];

			var count = 0;

			function animate_paths() {

				// Animate Left Wave
					gsap.to("#left_wave_path path", 
						{ 
							duration: 4,
							ease: "linear",
							attr: { d: left_wave_paths[count] },
							onComplete:animate_paths
						});


				// Animate Right Wave
					gsap.to("#right_wave_path path", 
						{ 
							delay: 1,
							duration: 4,
							ease: "linear",
							attr: { d: right_wave_paths[count] },
						});

				// Animate Contact Us Curve
					gsap.to("#contact_us_wave_path path", 
						{ 
							delay: 1,
							duration: 4,
							ease: Expo.easeInOut,
							attr: { d: contact_us_wave_paths[count] },
						});

				count ++;
				count = count > left_wave_paths.length - 1 ? 0 : count;

			}

			animate_paths();

		//	Header and Cookies Appear with scrollTop value
			ScrollTrigger.create({
			onUpdate: (self) => 
				{

					//	Header Changing
						if (self.scroll() > 50) {
							$("header").addClass('light_header');
						} else {
							$("header").removeClass('light_header');
						}

					//	Cookies Appear
						if (self.scroll() > 100) {
							$(".cookie-agree").addClass('show');
						}
				}
			});

		//	Hero Appears
			gsap.registerPlugin(ScrollTrigger);

			gsap.set(".hero h1 .word-measure", {
				y: -50,
				autoAlpha: 0
			});

			gsap.set(".hero p, .hero a", {
				autoAlpha: 0
			});

			gsap.set(".hero .hero-logo", {
				autoAlpha: 0,
				scale: 0.2
			});

			let hero_h1_tl = gsap.timeline({delay: 2});


			hero_h1_tl.to(".hero h1 .word-measure", {
			  	duration: 0.6,
			  	ease: Expo.easeOut,
			  	y: 0,
			  	autoAlpha: 1,
			  	force3D: true,
			  	stagger:
				{
				    from: "start",
				    amount: 0.5
			  	}
			});

			hero_h1_tl.to(".hero p, .hero a", {
			  	duration: 1.5,
			  	ease: Power2.easeOut,
			  	autoAlpha: 1,
			  	force3D: true
			}, 1);


			hero_h1_tl.to(".hero a svg", {
			  	scrollTrigger: {
			  		trigger: ".hero",
			  		scrub: 0.5
			  	},
			  	rotate: -800,
			  	force3D: true,
			});

			hero_h1_tl.to(".hero .hero-logo", {
			  	scrollTrigger: ".hero",
			  	duration: 5,
			  	ease: Power2.easeOut,
			  	scale: 1,
			  	autoAlpha: 0.03,
			  	rotation: 360,
			  	force3D: true,
			}, 1);

			hero_h1_tl.to(".hero .hero-logo",{			// infinite rotation tween but extremly slow
					      rotation: 360,
					      duration: 50,
					      repeat: -1,
					      ease: Power2.easeOut
					    },1);

			hero_logo_mouse_movement();

			hero_h1_tl.pause();	// Pause this timeline, only play it when the loader is finished


			//	Hero Logo Movement With Mouse
				function hero_logo_mouse_movement() {
					var x_value 			= null,
						y_value 			= null,
						x_change 			= null,
						y_change 			= null,
						scale_change 		= null,
						opacity_change 		= null,
						rotation_change		= null,
						requestID,
						vertical_svg_change_value 	= 0.1*win_h,
						horizontal_svg_change_value	= 0.1*win_w;


					$(document).on('mousemove', function(event) {

						event.preventDefault();
						x_value = event.clientX;	// min = 0, max = win_w
						y_value = event.clientY;	// min = 0, max = win_h

						x_change = math_helpers.convertRange(x_value, 0, win_w, -horizontal_svg_change_value, horizontal_svg_change_value);
						y_change = math_helpers.convertRange(y_value, 0, win_h, -vertical_svg_change_value, vertical_svg_change_value);
						scale_change = math_helpers.convertRange(y_value, 0, win_h, 1, 1.5);
						opacity_change = math_helpers.convertRange(x_value, 0, win_w, 0, 1);
						rotation_change = math_helpers.convertRange(x_value, 0, win_h, 0, 90);


						gsap.to(".hero .hero-logo", {
								duration: 5,
								x: -x_change, 
								y: -y_change,
							});

					});

				}

			//	Scroll Link Hover
				$(".hero a").hover(function() {


				}, function() {

				});

		//	Partners Appear
			function animate_partners(elem) {

				gsap.to(elem.querySelectorAll("img"),
					{
						duration: 1.5,
						x: 0,
						autoAlpha: 1,
						ease: Expo.easeOut, 
						immediateRender: false,
						overwrite: true,
						stagger:
						{
						    from: "start",
						    amount: 0.3
					  	}
					}
				);

			}

			function hide_partners(elem) {

				gsap.set(elem.querySelectorAll("img"), 
						{
							x: -50,
							autoAlpha: 0,
							overwrite: true,
						});

			}

			gsap.utils.toArray(".partners .logos").forEach(function(elem) {

				hide_partners(elem);	// hide all elements on load page start

				ScrollTrigger.create({
					// markers: true,
					start: "top 75%",
					trigger: elem,
					onEnter: function() { 
								animate_partners(elem);
							}, 
				});

			});

		//	What We Do Appear
			function animate_what_we_do(elem) {

				gsap.to(elem.querySelectorAll(".item"),
					{
						duration: 1.5,
						x: 0,
						autoAlpha: 1,
						ease: Expo.easeOut, 
						immediateRender: false,
						overwrite: true,
						stagger:
						{
						    from: "start",
						    amount: 0.3
					  	}
					}
				);

			}

			function hide_what_we_do(elem) {

				gsap.set(elem.querySelectorAll(".item"), 
						{
							x: -50,
							autoAlpha: 0,
							overwrite: true,
						});

			}

			gsap.utils.toArray(".services").forEach(function(elem) {

				hide_what_we_do(elem);	// hide all elements on load page start

				ScrollTrigger.create({
					// markers: true,
					start: "top 75%",
					trigger: elem,
					onEnter: function() { 
								animate_what_we_do(elem);
							},
				});

			});

		//	How We Do It
			function animate_how_we_do(elem) {

				gsap.to(elem.querySelectorAll(".step"),
					{
						duration: 2,
						x: 0,
						autoAlpha: 1,
						ease: Expo.easeOut, 
						immediateRender: false,
						overwrite: true,
						stagger:
						{
						    from: "start",
						    amount: 0.8,
							onStart() {
								// console.log(this.targets()[0]); // <= the current target

								this.targets()[0].classList.add("in-view");
							}
					  	}
					}
				);

			}

			function hide_how_we_do(elem) {

				gsap.set(elem.querySelectorAll(".step"), 
						{
							x: -70,
							autoAlpha: 0,
							overwrite: true,
						});

			}

			gsap.utils.toArray(".our_steps").forEach(function(elem) {

				hide_how_we_do(elem);	// hide all elements on load page start

				ScrollTrigger.create({
					// markers: true,
					start: "top 75%",
					trigger: elem,
					onEnter: function() { 
								animate_how_we_do(elem);
							}, 
				});

			});

		//	Projects Appear
			function animate_projects(elem) {

				gsap.to(elem,
					{
						duration: 2,
						x: 0,
						autoAlpha: 1,
						ease: Expo.easeOut, 
						immediateRender: false,
						overwrite: true,
						stagger:
						{
						    from: "start",
						    amount: 0.8,
							onStart() {
								// console.log(this.targets()[0]); // <= the current target

								this.targets()[0].classList.add("in-view");
							}
					  	}
					}
				);

			}

			function hide_projects(elem) {

				gsap.set(elem, 
						{
							x: -70,
							autoAlpha: 0,
							overwrite: true,
						});

			}

			gsap.utils.toArray(".project").forEach(function(elem) {

				hide_projects(elem);	// hide all elements on load page start

				ScrollTrigger.create({
					// markers: true,
					start: "top 75%",
					trigger: elem,
					onEnter: function() { 
								animate_projects(elem);
							}, 
				});

			});

		//	Rotating Logos
			gsap.to('.rotating-logos img:nth-of-type(2)', {
				scrollTrigger: {
					// markers: true,
					scrub: 3,
				},
				rotate: 1080,
			});

			gsap.to('.rotating-logos img:nth-of-type(1)', {
				scrollTrigger: {
					// markers: true,
					scrub: 0.5,
				},
				rotate: -1080,
			});

		//	Technologies Appear
			function animate_tech(elem) {

				gsap.to(elem.querySelectorAll("img"),
					{
						duration: 1.5,
						x: 0,
						autoAlpha: 1,
						ease: Expo.easeOut, 
						immediateRender: false,
						overwrite: true,
						stagger:
						{
						    from: "start",
						    amount: 0.3
					  	}
					}
				);

			}

			function hide_tech(elem) {

				gsap.set(elem.querySelectorAll("img"), 
						{
							x: -50,
							autoAlpha: 0,
							overwrite: true,
						});

			}

			gsap.utils.toArray(".tech-container").forEach(function(elem) {

				hide_tech(elem);	// hide all elements on load page start

				ScrollTrigger.create({
					// markers: true,
					start: "top 75%",
					trigger: elem,
					onEnter: function() { 
								animate_tech(elem);
							},
				});

			});

		//	Testimonials Swiper
			var myswiper = new Swiper(".swiper-container", {
			    	direction: 'horizontal',
			        speed: 1200,
			    	slidesPerView: 1,
			    	// autoHeight: true,
			    	roundLengths: true,
			    	loop: true,
			    	setWrapperSize: true,
			    	touchStartPreventDefault: false,
			    	// preventInteractionOnTransition: true,	//	prevent mousemove conflict between swiper an document
			    	spaceBetween: 200,
			        longSwipesRatio: 0.01,
					grabCursor: true,
					centeredSlides: true,
					parallax: true,
					autoplay: {
						delay: 3000,
					},
			        keyboard: {
						enabled: true,
						onlyInViewport: true,
					},
			        navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
			     });

		//	Blockquotes Stagger and Moving With Mouse

			//	Hide them all (setter)
				gsap.set(".testimonials .testimonials-swiper > img", {
								opacity: 0,
								y: "-200%",
							});

				gsap.to(".testimonials .testimonials-swiper > img",
						{
							duration: 1.5,
							ease: Expo.easeInOut,
							opacity: 1,
							y: 0,
							scrollTrigger: {
						      // markers: true,
						      trigger: ".testimonials .testimonials-swiper",
						      start: "top 80%",
						      end: "bottom 0%"
						    },
						    stagger: {
						    	from: "start",
						    	amount: 0.5,	// 0.5 is divided between the number of staggered elements start tweens
						    	// each: 0.5,	// 0.3 between every each tween start and the other
						    },
						    onStart: function(){
					    		blockquotes_mouse_movement();
						    }
						}
					)

			//	Mouse Interaction	
				function blockquotes_mouse_movement() {
					var x_value 			= null,
						y_value 			= null,
						x_change 			= null,
						y_change 			= null,
						scale_change 		= null,
						opacity_change 		= null,
						rotation_change		= null,
						requestID,
						vertical_svg_change_value 	= 0.1*win_h,
						horizontal_svg_change_value	= 0.1*win_w;


					$(document).on('mousemove', function(event) {


						event.preventDefault();
						x_value = event.clientX;	// min = 0, max = win_w
						y_value = event.clientY;	// min = 0, max = win_h

						x_change = math_helpers.convertRange(x_value, 0, win_w, -horizontal_svg_change_value, horizontal_svg_change_value);
						y_change = math_helpers.convertRange(y_value, 0, win_h, -vertical_svg_change_value, vertical_svg_change_value);
						scale_change = math_helpers.convertRange(y_value, 0, win_h, 0.7, 1);
						opacity_change = math_helpers.convertRange(x_value, 0, win_w, 0, 1);
						rotation_change = math_helpers.convertRange(y_value, 0, win_h, 0, 360);


						gsap.to(".testimonials .testimonials-swiper > img:nth-of-type(1)", {
								force3D: true,
								duration: 3,
								x: -x_change, 
								y: y_change,
								scale: scale_change,
								rotation: rotation_change
							});

						gsap.to(".testimonials .testimonials-swiper > img:nth-of-type(2)", {
								force3D: true,
								duration: 1.5,
								x: -x_change, 
								y: -y_change,
								opacity: opacity_change,
							});

						gsap.to(".testimonials .testimonials-swiper > img:nth-of-type(3)", {
								force3D: true,
								duration: 3,
								x: x_change*1.5, 
								y: -y_change*1.5,
								scale: scale_change/2, 
							});

						gsap.to(".testimonials .testimonials-swiper > img:nth-of-type(4)", {
								force3D: true,
								duration: 1.5,
								x: x_change/2, 
								y: y_change/2,
								opacity: opacity_change,
								rotation: rotation_change/2
							});

						gsap.to(".testimonials .testimonials-swiper > img:nth-of-type(5)", {
								force3D: true,
								duration: 3,
								x: x_change, 
								y: y_change,
								scale: scale_change,
							});

						gsap.to(".testimonials .testimonials-swiper > img:nth-of-type(6)", {
								force3D: true,
								duration: 1.5,
								x: x_change/2, 
								y: y_change/2,
								scale: scale_change,
							});

					});

				}

		//	Blog Posts Appear

			//	Hide Posts (Setter)
			gsap.set(".post", 
						{
							x: -50,
							opacity: 0,
							overwrite: true,
						});


			ScrollTrigger.create({
				// markers: true,
				start: "top 75%",
				trigger: '.posts-container',
				onEnter: function() { 
							gsap.to(".post",
								{
									duration: 1.5,
									x: 0,
									opacity: 1,
									ease: Expo.easeOut, 
									immediateRender: false,
									overwrite: true,
									stagger:
									{
									    from: "start",
									    amount: 0.6
								  	}
								}
							);
						},
			});

		//	Contact Form Appear & Pink Circle Movement

			//	Pink Cirlce Movement Function
				function circle_mouse_movement() {
					var x_value 			= null,
						y_value 			= null,
						x_change 			= null,
						y_change 			= null,
						requestID,
						vertical_svg_change_value 	= 0.1*win_h,
						horizontal_svg_change_value	= 0.1*win_w;


					$(document).on('mousemove', function(event) {

						console.log("mousemove")

						event.preventDefault();
						x_value = event.clientX;	// min = 0, max = win_w
						y_value = event.clientY;	// min = 0, max = win_h

						x_change = math_helpers.convertRange(x_value, 0, win_w, -horizontal_svg_change_value, horizontal_svg_change_value);
						y_change = math_helpers.convertRange(y_value, 0, win_h, -vertical_svg_change_value, vertical_svg_change_value);


						gsap.to(".contact-us .contact-info .pink-circle", {
								duration: 1.5,
								x: x_change, 
								y: y_change,
							});

					});

				}


			//	Hide All (Setter)
				gsap.set(".contact-info", 
							{
								x: -150,
								autoAlpha: 0,
								overwrite: true,
							});

				gsap.set(".contact-info .inner-wrapper *", 
							{
								x: -50,
								autoAlpha: 0,
								overwrite: true,
							});

				gsap.set(".contact-form *", 
							{
								x: -50,
								autoAlpha: 0,
								overwrite: true,
							});

				gsap.set(".pink-circle", 
						{
							width: 0.1*win_h,
							height: 0.1*win_h,
							overwrite: true,
						});

			//	Contact Us Timeline
				let contact_us_tl = gsap.timeline({paused: true});

					contact_us_tl.to(".contact-info",
							{
								duration: 3,
								x: 0,
								autoAlpha: 1,
								ease: Expo.easeOut,
								overwrite: true,
								immediateRender: false
							}
						);

					contact_us_tl.to(".pink-circle",
							{
								duration: 2,
								width: 0.7*win_h,
								height: 0.7*win_h,
								ease: Expo.easeOut, 
								immediateRender: false,
								overwrite: true,
								onStart: function(){
									circle_mouse_movement();
								}
							}, 0
						);

					contact_us_tl.to(".contact-info .inner-wrapper *, .contact-form *",
									{
										duration: 2,
										x: 0,
										autoAlpha: 1,
										ease: Expo.easeOut, 
										immediateRender: false,
										overwrite: true,
										stagger:
										{
										    from: "start",
										    amount: 1
									  	}
									}, 0.3
								);

			ScrollTrigger.create({
				// markers: true,
				start: "10% 80%",
				trigger: '.contact-info',
				onEnter: function() { 

							contact_us_tl.play();
						
						},
			});

		//	Footer Appear
				// Hide All Columns (Setter)
				gsap.set(".footer-inner-wrapper .column", 
							{
								y: -50,
								autoAlpha: 0,
								overwrite: true,
							});

				// Columns
				ScrollTrigger.create({
					// markers: true,
					start: "10% 80%",
					trigger: '.footer-inner-wrapper',
					onEnter: function() { 

								//	Contact Info Stagger
									gsap.to(".footer-inner-wrapper .column",
										{
											duration: 1.5,
											y: 0,
											autoAlpha: 1,
											ease: Expo.easeOut, 
											immediateRender: false,
											overwrite: true,
											stagger:
											{
											    from: "start",
											    amount: 0.4,
											    onStart() {
											      // console.log(this.targets()[0]); // <= the current target
											    	//	on start of the staggering element add this class
											    	this.targets()[0].classList.add("in-view");
											    }
										  	}
										}
									);
							
							},
				});



			//	Footer Rotating Logo (Setter)
				gsap.set("footer .footer-rotating-logo",
						{
							opacity: 0,
							scale: 0.1
						}
					);

			ScrollTrigger.create({
				// markers: true,
				start: "50% 80%",
				trigger: 'footer',
				onEnter: function() { 

						// Rotate to infinity
							let footer_logo_rotate_tl = gsap
							  .timeline()
							  .to("footer .footer-rotating-logo",
							  	{
									opacity: 0.1,
									scale: 1,
									duration: 5,
									ease: Expo.easeOut
							    },0)
							  .fromTo("footer .footer-rotating-logo",{
							      rotation: 0
							    },{
							      rotation: 360,
							      duration: 50,
							      repeat: -1,
							      ease: "linear"
							    },0)
							  .timeScale(1);
						
						},
			});

		//	Preloading
			var countImages = $('body img').size();

			$('body').imagesLoaded().always( function( instance ) {
				// Drawing layouts after loading all images.
				draw(false);	// 2e3mel el draw mn gheer el resize conditions (da mosh resize)


				console.log("done loading images")


				setTimeout(function(){
					end_logo_animation();
				}, 2000)

			});

		//	Resizing Event
			$(window).resize(function() {

				clearTimeout(resizeTimer);	// tewa22afo el setTimeout ely ta7to da(draw every 100ms)
				resizeTimer = setTimeout(function() {
					draw(true);
				}, 100);

			});





	/*
	===========================================================
	===========================================================
		Functions
	===========================================================
	===========================================================
	*/

		// Drawing layouts after loading all images.
			function draw(resize = false) {

				// ----------------------
				// Global
				// ----------------------
					win_h 			= $(window).height();
					win_w 			= $(window).width();


					if(win_w > 1680) {

						console.log("Device:: Wide Desktop");

						//	Refresh Page
							// if(is_small_desktop || is_tablet || is_mobile) {
							// 	window.location.reload(false);
							// }

						is_desktop 			= true;
						is_small_desktop 	= false;
						is_tablet 			= false;
						is_mobile 			= false;
					}
					else if(win_w <= 1680 && win_w > 1300) {

						console.log("Device:: Small Desktop");

						//	Refresh Page
							// if(is_desktop || is_tablet || is_mobile) {
							// 	window.location.reload(false);
							// }

						is_desktop 			= false;
						is_small_desktop 	= true;
						is_tablet 			= false;
						is_mobile 			= false;
					}
					else if(win_w <= 1300 && win_w > 1024) {

						console.log("Device:: Tablet");

						//	Refresh Page
							// if(is_desktop || is_small_desktop || is_mobile) {
							// 	window.location.reload(false);
							// }

						is_desktop 			= false;
						is_small_desktop 	= false;
						is_tablet 			= true;
						is_mobile 			= false;
					}
					else if(win_w <= 1024) {

						console.log("Device:: Mobile");

						//	Refresh Page
							// if(is_desktop || is_small_desktop || is_tablet) {
							// 	window.location.reload(false);
							// }

						is_desktop 			= false;
						is_small_desktop 	= false;
						is_tablet 			= false;
						is_mobile 			= true;
					}

			}

		


});
})(jQuery);