/*
Website Name: OpenDraw - Feras Al Masri
Website URL: ?????????
Version: 1.0
Author: N/A
Author URL: N/A
*/


  (function () {

  	console.log("sasass")

  	// GSAP Plugin Registeration
  		gsap.registerPlugin(ScrollTrigger);

  		// ScrollTrigger.config({
			//   ignoreMobileResize: true,
			// });

  	//	Variables
	  	const loader_el = document.querySelector('.intro-loader');
	  	const hero_section = document.querySelector("section.hero");
	  	const whole_diagram_svg_el = hero_section.querySelector(".right-cont > svg");
	  	const dark_blue_box_els = document.querySelectorAll("g.dark-blue-box");
	  	const dark_blue_text_els = document.querySelectorAll("g.dark-blue-text");
	  	const yellow_box_els = document.querySelectorAll("g.yellow-box");
	  	const yellow_text_els = document.querySelectorAll("g.yellow-text");
	  	const orange_box_els = document.querySelectorAll("g.orange-box");
	  	const orange_text_el = document.querySelectorAll("g.orange-text");
	  	const red_box_els = document.querySelectorAll("g.red-box");
	  	const red_text_el = document.querySelector("g.red-top-text");
	  	const green_box_els = document.querySelectorAll("g.green-box");
	  	const green_text_els = document.querySelectorAll("g.green-text");
	  	const purple_box_els = document.querySelectorAll("g.purple-box");
	  	const purple_text_els = document.querySelectorAll("g.purple-text");
	  	const light_blue_box_els = document.querySelectorAll("g.light-blue-box");
	  	const light_blue_text_els = document.querySelectorAll("g.light-blue-text");
	  	const text_gs = document.querySelectorAll("g.svg-text-el");
	  	const wiring_diag_g = document.querySelector("g.wiring-diagram");
	  	const step_text_els = hero_section.querySelectorAll(".left-cont .step-el");
	  	const scroll_down_popup = hero_section.querySelector(".scroll-down-popup");
	  	const scroll_down_popup_inner = hero_section.querySelector(".scroll-down-popup > div");
	  	const hero_table_el = hero_section.querySelector(".right-cont table");
	  	const parts_calc_el = hero_section.querySelector("#parts-calculator");
	  	const signup_cont = hero_section.querySelector(".signup-cont");
	  	const signup_logo = hero_section.querySelector(".signup-cont > svg");
	  	const signup_form = signup_cont.querySelector(".form-cont");
	  	const purple_logo_group = signup_logo.querySelector("g:first-of-type");
	  	const purple_logo_group_bbox = purple_logo_group.getBBox();
	  	const text_logo_group = signup_logo.querySelector("g:last-of-type");
	  	const text_logo_group_pathes = text_logo_group.querySelectorAll("path");
		  const boxElements = [
						  light_blue_box_els,
						  purple_box_els,
						  green_box_els,
						  orange_box_els,
						  dark_blue_box_els,
						  yellow_box_els,
						  red_box_els,
						];
			const textElements = [
						  light_blue_text_els,
						  purple_text_els,
						  green_text_els,
						  orange_text_el,
						  dark_blue_text_els,
						  yellow_text_els,
						  red_text_el,
						];



	// Remove Loading and enable scrolling after document loaded
		window.onload = function() {
			setTimeout(function() {
			    loader_el.classList.add('hide');
			    setTimeout(function() {
			    	document.documentElement.scrollTop = 0;
				    document.documentElement.classList.remove('no-scroll');
				}, 500);
			}, 1000);

			// Check if the scroll position is at the top
			  let checkScroll = setInterval(function() {
			    if (document.documentElement.scrollTop === 0) {
			      clearInterval(checkScroll); // Stop checking once at the top
			      startGSAP(); // Call your function after scroll to top
			    }
			  }, 10); // Check every 10 milliseconds
		};




	// GSAP Main Function (this function called after making sure the page is scrolled to top)

		function startGSAP() {

			//	GSAP Sets
		  	gsap.set([dark_blue_box_els, dark_blue_text_els, yellow_box_els, yellow_text_els, orange_box_els, orange_text_el, red_box_els, red_text_el, green_box_els, green_text_els, purple_box_els, purple_text_els, light_blue_box_els, light_blue_text_els], 
		  		{ 
		  			autoAlpha: 0,
		  			scale: 0.5,
		  			transformOrigin: '50% 50%'
		  		});

		  	step_text_els.forEach(el => {
				    gsap.set(el.querySelectorAll("span")[0], { autoAlpha: 0, yPercent: 100 });

				    if (el.querySelectorAll("span")[1]) {	// second span in step text (subheading)
					    gsap.set(el.querySelectorAll("span")[1], { autoAlpha: 0, yPercent: 500 });
				    }

				    if (el.querySelector("svg")) {
					    gsap.set(el.querySelector("svg"), { autoAlpha: 0, yPercent: 100, scale: 0.5 });
				    }

				});

		  	gsap.set(hero_table_el, { autoAlpha: 0, xPercent: 50 });
	  	  gsap.set(purple_logo_group, { autoAlpha: 0, y: 50, transformOrigin: 'center' });
			  gsap.set(text_logo_group_pathes, { autoAlpha: 0, y: 50 });
			  gsap.set(whole_diagram_svg_el, { autoAlpha: 0, scale: 0.9 });
			  gsap.set(signup_form.children, { autoAlpha: 0, y: 50 });
			  gsap.set(scroll_down_popup_inner, { autoAlpha: 0, y: 30 });
			  gsap.set(parts_calc_el, { autoAlpha: 0,  xPercent: 50});
				gsap.set("svg.mobile-arrow-down", { autoAlpha: 0, yPercent: 50 });
				gsap.set("#mobile-plain-wiring-diagram", { autoAlpha: 0, yPercent: 50 });
				gsap.set("#mobile-wiring-diagram", { autoAlpha: 0, yPercent: 50 });
				gsap.set(".mock-table", { autoAlpha: 0, yPercent: 50 });
				gsap.set("#mobile-parts-calculator", { autoAlpha: 0, yPercent: 50 });


			//	Update ScrollTrigger on resize
		  		let resizeTimeout;
					window.addEventListener('resize', () => {
					    clearTimeout(resizeTimeout);
					    resizeTimeout = setTimeout(() => {
					    		console.log("refresh gsap resize")
					        ScrollTrigger.refresh();
					    }, 200); // Adjust the timeout duration as needed
					});


			//	Intro Timeline (For both Desktop and Mobile)
	      const intro_tl = gsap.timeline();

	      intro_tl.to(purple_logo_group, {
			    autoAlpha: 1,
			    y: 0,
			    duration: 0.5,
			    delay: 1
			  });

			  intro_tl.to(text_logo_group_pathes, {
			    autoAlpha: 1,
			    y: 0,
			    duration: 0.5,
			    stagger: {
			      each: 0.09,
			    },
			  }, "<=10%");

			  intro_tl.to(signup_form.children, {
			    autoAlpha: 1,
			    y: 0,
			    duration: 0.5,
			    stagger: {
			      each: 0.09,
			    },
			  }, "<=80%");

			  intro_tl.to(scroll_down_popup_inner, {
			    autoAlpha: 1,
			    y: 0,
			    duration: 0.5,
			  }, "<=80%");


			//	GSAP Media Query
				let mm = gsap.matchMedia();

				mm.add("(min-width: 1025px)", () => {
					// console.log("Desktop Animation");
					desktop_TL();
				});

				mm.add("(max-width: 1024px)", () => {
				  // console.log("Mobile Animation");
					mobile_TL();
				});


			//	Desktop Timeline Function
				function desktop_TL() {

					//	Scroll Trigger Timeline
						const desktop_scrub_timeline = gsap.timeline({
						  scrollTrigger: {
						    trigger: hero_section,
						    pin: true,
						    start: "top top",
						  	end: "+=1200%",
						    scrub: 1,
						    onUpdate: (self) => {

						      if (self.progress.toFixed(1) >= 0.5) {
						      	console.log("more 50%");
						      	scroll_down_popup_inner.style.display = "none";
						      } else {
						      	console.log("less 50%");
						      	scroll_down_popup_inner.style.display = "flex";
						      }
						    
						    }
						  }
						});

					//	Hide Signup SVG logo
						desktop_scrub_timeline.to(signup_logo, {
						    autoAlpha: 0,
						    yPercent: -50,
						    duration: 2,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  });

					//	Hide Signup form
						desktop_scrub_timeline.to(signup_form, {
						    autoAlpha: 0,
						    yPercent: -50,
						    duration: 2,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=30%")

					//	Hide Scroll Down Popup
						desktop_scrub_timeline.to(scroll_down_popup, {
						    autoAlpha: 0,
						    yPercent: -50,
						    duration: 2,
						    ease: "power2.inOut",
						    // overwrite: true,
						  }, "<=10%")

					//	Show plain wiring diagram
						desktop_scrub_timeline.to(whole_diagram_svg_el, {
						    autoAlpha: 1,
						    scale: 1,
						    duration: 2,
						    overwrite: "auto",
						  }, "<=40%")

					//	Show first step text
						desktop_scrub_timeline.to(step_text_els[0].querySelector('span'), {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<")

					//	Show first text SVG Icon
						desktop_scrub_timeline.to(step_text_els[0].querySelector('svg'), {
						    autoAlpha: 0.1,
						    yPercent: 0,
						    scale: 1,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=20%")

					//	Hide first text
						desktop_scrub_timeline.to(step_text_els[0].querySelector('span'), {
						    autoAlpha: 0,
						    yPercent: -100,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  })

					//	Hide first text SVG icon
						desktop_scrub_timeline.to(step_text_els[0].querySelector('svg'), {
						    autoAlpha: 0,
						    yPercent: -100,
						    scale: 1.5,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=30%")

					//	Show second main text
						desktop_scrub_timeline.to(step_text_els[1].querySelectorAll('span')[0], {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=30%")

					//	Show second subheading text
						desktop_scrub_timeline.to(step_text_els[1].querySelectorAll('span')[1], {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=30%")

					//	Show second text SVG Icon
						desktop_scrub_timeline.to(step_text_els[1].querySelector('svg'), {
						    autoAlpha: 0.1,
						    yPercent: 0,
						    scale: 1,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<")

					//	Show wiring diagram colored boxes
						boxElements.forEach((els, index) => {
						  desktop_scrub_timeline.to(els, {
						    autoAlpha: 1,
						    scale: 1,
						    duration: 0.5,
						    overwrite: "auto",
						    stagger: {
						      each: 0.5,
						    },
						  });						
						});

					//	Show wiring diagram text boxes
						textElements.forEach((els) => {
						  desktop_scrub_timeline.to(els, {
						    autoAlpha: 1,
						    scale: 1,
						    duration: 0.5,
						    overwrite: "auto",
						    stagger: {
						      each: 0.5,
						    },
						  });
						});

					//	Hide wiring diagram colored boxes
						boxElements.forEach((els, index) => {
						  const position = index === 0 ? ">" : "<=0"; // Use "<=50%" for the first iteration
						  desktop_scrub_timeline.to(els, {
						    autoAlpha: 0,
						    scale: 1.5,
						    duration: 0.5,
						    overwrite: "auto",
						    stagger: {
						      each: 0.5,
						      from: "start"
						    },
						  }, position);
						});

					//	Hide wiring diagram text boxes
						textElements.forEach((els) => {
						  desktop_scrub_timeline.to(els, {
						    autoAlpha: 0,
						    scale: 1.5,
						    duration: 1,
						    overwrite: "auto",
						    stagger: {
						      each: 0.5,
						      from: "start"
						    },
						  }, "<=30%");
						});

					//	Hide and scale down wiring diagram
						desktop_scrub_timeline.to(whole_diagram_svg_el, {
						    autoAlpha: 0,
						    scale: 0.8,
						    duration: 2,
						    overwrite: "auto",
						  })

					//	hide second text main text
						desktop_scrub_timeline.to(step_text_els[1].querySelectorAll('span')[0], {
						    autoAlpha: 0,
						    yPercent: -100,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<")

					//	Hide second text subheading text
						desktop_scrub_timeline.to(step_text_els[1].querySelectorAll('span')[1], {
						    autoAlpha: 0,
						    yPercent: -500,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<")

					//	Hide second text SVG Icon
						desktop_scrub_timeline.to(step_text_els[1].querySelector('svg'), {
						    autoAlpha: 0,
						    yPercent: -100,
						    scale: 1.5,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<")

					//	Show Parts Calculator
						desktop_scrub_timeline.to(parts_calc_el, 
				  		{ 
				  			autoAlpha: 1,
				  			xPercent: 0,
				  			duration: 3,
				  			ease: "power2.inOut"
				  		}, "<=10%");

					//	Show third main text
						desktop_scrub_timeline.to(step_text_els[2].querySelectorAll('span')[0], {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=10%")

					//	Show third subheading text
						desktop_scrub_timeline.to(step_text_els[2].querySelectorAll('span')[1], {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=30%")

					//	Show third text SVG Icon
						desktop_scrub_timeline.to(step_text_els[2].querySelector('svg'), {
						    autoAlpha: 0.1,
						    yPercent: 0,
						    scale: 1,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=20%")

					//	Hide Parts Calculator
						desktop_scrub_timeline.to(parts_calc_el, 
				  		{ 
				  			autoAlpha: 0,
				  			yPercent: -100,
				  			duration: 3,
				  			ease: "power2.inOut",
				  		});

					//	hide third text main text
						desktop_scrub_timeline.to(step_text_els[2].querySelectorAll('span')[0], {
						    autoAlpha: 0,
						    yPercent: -100,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<")

					//	Hide third text subheading text
						desktop_scrub_timeline.to(step_text_els[2].querySelectorAll('span')[1], {
						    autoAlpha: 0,
						    yPercent: -500,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<")

					//	Hide third text SVG Icon
						desktop_scrub_timeline.to(step_text_els[2].querySelector('svg'), {
						    autoAlpha: 0,
						    yPercent: -100,
						    scale: 1.5,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<")

					//	Show Table
						desktop_scrub_timeline.to(hero_table_el, 
				  		{ 
				  			autoAlpha: 1,
				  			xPercent: 0,
				  			duration: 3,
				  			ease: "power2.inOut"
				  		}, "<30%");

					//	Show the fourth text
						desktop_scrub_timeline.to(step_text_els[3].querySelector('span'), {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<")

					//	Show the fourth text SVG Icon
						desktop_scrub_timeline.to(step_text_els[3].querySelector('svg'), {
						    autoAlpha: 0.1,
						    yPercent: 0,
						    scale: 1,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=20%")

					//	Hide the third text text
							desktop_scrub_timeline.to(step_text_els[3].querySelector('span'), {
						    autoAlpha: 0,
						    y: -100,
						    duration: 3,
						    ease: "power2.inOut",
						    delay: 0.5,
						    overwrite: "auto",
						  })

					//	Hide the third text SVG icon
						desktop_scrub_timeline.to(step_text_els[3].querySelector('svg'), {
						    autoAlpha: 0,
						    yPercent: -100,
						    scale: 1.5,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=20%")

					//	Hide table
						desktop_scrub_timeline.to(hero_table_el, 
				  		{ 
				  			autoAlpha: 0,
				  			yPercent: -100,
				  			duration: 3,
				  			ease: "power2.inOut",
				  		}, "<");

					//	Show the Signup SVG logo from bottom to up
						desktop_scrub_timeline.fromTo(signup_logo, 
							{
						    autoAlpha: 0,
						    yPercent: 50,
						  },
						  {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 2,
						    immediateRender: false,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }
						  , "<=80%");

					//	Show the Signup form from bottom to up
						desktop_scrub_timeline.fromTo(signup_form, 
							{
						    autoAlpha: 0,
						    yPercent: 50,
						  },
						  {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 2,
						    immediateRender: false,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }
						  , "<=50%");

				}	

	

			//	Mobile Timeline Function
				function mobile_TL() {
					console.log("mobile_TL")

					//	Step Mobile Scrolltrigger
						gsap.utils.toArray(".step-el").forEach((step_el, index) => {

						  const mobile_step_timeline = gsap.timeline({
							  scrollTrigger: {
							    trigger: step_el,
							    start: "top 90%",
							  	end: "bottom top",
							  }
							});

						  if (step_el.querySelectorAll('span').length == 1) {

						  	mobile_step_timeline.to(step_el.querySelector("span"), {
							    autoAlpha: 1,
							    yPercent: 0,
							    duration: 1,
							    ease: "power2.inOut",
							    overwrite: "auto",
							  });

						  } else if (step_el.querySelectorAll('span').length > 1) {

						  	mobile_step_timeline.to(step_el.querySelectorAll("span")[0], {
							    autoAlpha: 1,
							    yPercent: 0,
							    duration: 1,
							    ease: "power2.inOut",
							    overwrite: "auto",
							  });

							  mobile_step_timeline.to(step_el.querySelectorAll("span")[1], {
							    autoAlpha: 1,
							    yPercent: 0,
							    duration: 1,
							    ease: "power2.inOut",
							    overwrite: "auto",
							  }, "<=20%");

						  }

						  if (step_el.querySelector('svg')) {
						  	console.log("asdasd")
						  	mobile_step_timeline.to(step_el.querySelector('svg'), {
							    autoAlpha: 0.15,
							    yPercent: 0,
							    scale: 1,
							    duration: 1,
							    ease: "power2.inOut",
							    overwrite: "auto",
							  }, "<=20%");
						  }

						});

					//	Mobile arrow down scrolltrigger
						gsap.utils.toArray("svg.mobile-arrow-down").forEach((element) => {
						  gsap.to(element, {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 1,
						    scrollTrigger: {
						      trigger: element,
						      start: "top 90%",
							  	end: "bottom top",
						    }
						  });
						});

					// Mobile plain wiring diagram scroll trigger
						gsap.to("#mobile-plain-wiring-diagram", {
					    autoAlpha: 1,
					    yPercent: 0,
					    duration: 1,
					    scrollTrigger: {
					      trigger: "#mobile-plain-wiring-diagram",
					      start: "top 90%",
						  	end: "bottom top",
					    }
					  });

					// Mobile wiring diagram scroll trigger
						gsap.to("#mobile-wiring-diagram", {
					    autoAlpha: 1,
					    yPercent: 0,
					    duration: 1,
					    scrollTrigger: {
					      trigger: "#mobile-wiring-diagram",
					      start: "top 90%",
						  	end: "bottom top",
					    }
					  });

					// Mobile calculator scrolltrigger
						gsap.to("#mobile-parts-calculator", {
					    autoAlpha: 1,
					    yPercent: 0,
					    duration: 1,
					    scrollTrigger: {
					      trigger: "#mobile-parts-calculator",
					      start: "-30% 90%",
						  	end: "bottom top",
					    }
					  });

					// Mobile table scrolltrigger
						gsap.utils.toArray(".mock-table").forEach((mocktable_el, index) => {

							gsap.to(mocktable_el, {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 1,
						    scrollTrigger: {
						      trigger: mocktable_el,
						      start: "-30% 90%",
							  	end: "bottom top",
							  	// markers: true
						    }
						  });

						});


				}		






						



					


					



		}




	



  })();