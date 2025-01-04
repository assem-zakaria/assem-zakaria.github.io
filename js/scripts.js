/*
Website Name: OpenDraw - Feras Al Masri
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


  (function () {

  	console.log("sasass")

  	// GSAP Plugin Registeration
  		gsap.registerPlugin(ScrollTrigger);


  	//	Update ScrollTrigger on resize
  		let resizeTimeout;
			window.addEventListener('resize', () => {
			    clearTimeout(resizeTimeout);
			    resizeTimeout = setTimeout(() => {
			        ScrollTrigger.refresh();
			    }, 200); // Adjust the timeout duration as needed
			});


  	//	Variables
	  	const loader_el = document.querySelector('.intro-loader');
	  	const hero_section = document.querySelector("section.hero");
	  	const whole_diagram_svg_el = hero_section.querySelector(".right-cont > svg")
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
	  	const hero_table_el = hero_section.querySelector("table");
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
			//	Set the wiring diagram colored boxes and text boxes
		  	gsap.set([dark_blue_box_els, dark_blue_text_els, yellow_box_els, yellow_text_els, orange_box_els, orange_text_el, red_box_els, red_text_el, green_box_els, green_text_els, purple_box_els, purple_text_els, light_blue_box_els, light_blue_text_els], 
		  		{ 
		  			autoAlpha: 0,
		  			scale: 0.5,
		  			transformOrigin: '50% 50%'
		  		});

	  	//	Hide all steps text and svg icons
		  	step_text_els.forEach(el => {
				    gsap.set(el.querySelectorAll("span")[0], { autoAlpha: 0, yPercent: 100 });

				    if (el.querySelectorAll("span")[1]) {	// second span in step text (subheading)
					    gsap.set(el.querySelectorAll("span")[1], { autoAlpha: 0, yPercent: 500 });
				    }

				    if (el.querySelector("svg")) {
					    gsap.set(el.querySelector("svg"), { autoAlpha: 0, yPercent: 100, scale: 0.5 });
				    }

				});

			//	Hide the table
		  	gsap.set(hero_table_el, { autoAlpha: 0, xPercent: 50 });

		  //	Hide the purple logo part of the signup SVG logo
	  	  gsap.set(purple_logo_group, {
			    y: 50,
			    autoAlpha: 0,
			    transformOrigin: '50% 50%'
			  });

			//	Hide all text SVG pathes of logo text
			  gsap.set(text_logo_group_pathes, { autoAlpha: 0, y: 50 });

			//	Hide the whole svg
			  gsap.set(whole_diagram_svg_el, { autoAlpha: 0, scale: 0.9 });

			//	Hide form cont childrens
			  gsap.set(signup_form.children, { autoAlpha: 0, y: 50 });

			//	Hide scroll down popup
			  gsap.set(scroll_down_popup_inner, { autoAlpha: 0, y: 30 });

			//	Hide Parts Calculator
			  gsap.set(parts_calc_el, { autoAlpha: 0,  xPercent: 50});

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
					console.log("Desktop Animation");
					desktop_TL();
				});

				mm.add("(max-width: 1024px)", () => {
				  console.log("Mobile Animation");
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

					//	Scroll Trigger Timeline
						const mobile_scrub_timeline = gsap.timeline({
						  scrollTrigger: {
						    trigger: hero_section,
						    pin: true,
						    start: "top top",
						  	end: "+=1200%",
						    scrub: true,
						  }
						});

					//	Hide Signup SVG logo
						mobile_scrub_timeline.to(signup_logo, {
						    autoAlpha: 0,
						    yPercent: -50,
						    duration: 0,
						    ease: "none",
						    overwrite: "auto",
						  });

					//	Hide Signup form
						mobile_scrub_timeline.to(signup_form, {
						    autoAlpha: 0,
						    yPercent: -50,
						    duration: 0,
						    ease: "none",
						    overwrite: "auto",
						  }, "<=30%")

					//	Show first step text
						mobile_scrub_timeline.to(step_text_els[0].querySelector('span'), {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 0,
						    ease: "none",
						    overwrite: "auto",
						  }, "<")

					//	Show first text SVG Icon
						mobile_scrub_timeline.to(step_text_els[0].querySelector('svg'), {
						    autoAlpha: 0.15,
						    yPercent: 0,
						    scale: 1,
						    duration: 0,
						    ease: "none",
						    overwrite: "auto",
						  }, "<=20%")

					//	Hide first text
						mobile_scrub_timeline.to(step_text_els[0].querySelector('span'), {
						    autoAlpha: 0,
						    yPercent: -100,
						    duration: 0,
						    ease: "none",
						    overwrite: "auto",
						  })

					//	Hide first text SVG icon
						mobile_scrub_timeline.to(step_text_els[0].querySelector('svg'), {
						    autoAlpha: 0,
						    yPercent: -100,
						    scale: 1.5,
						    duration: 0,
						    ease: "none",
						    overwrite: "auto",
						  }, "<=30%")

					//	Show second main text
						mobile_scrub_timeline.to(step_text_els[1].querySelectorAll('span')[0], {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 0,
						    ease: "none",
						    overwrite: "auto",
						  }, "<=30%")

					//	Show second subheading text
						mobile_scrub_timeline.to(step_text_els[1].querySelectorAll('span')[1], {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 0,
						    ease: "none",
						    overwrite: "auto",
						  }, "<=30%")

					//	Show second text SVG Icon
						mobile_scrub_timeline.to(step_text_els[1].querySelector('svg'), {
						    autoAlpha: 0.15,
						    yPercent: 0,
						    scale: 1,
						    duration: 0,
						    ease: "none",
						    overwrite: "auto",
						  }, "<")

					//	hide second text main text
						mobile_scrub_timeline.to(step_text_els[1].querySelectorAll('span')[0], {
						    autoAlpha: 0,
						    yPercent: -100,
						    duration: 0,
						    ease: "none",
						    overwrite: "auto",
						  })

					//	Hide second text subheading text
						mobile_scrub_timeline.to(step_text_els[1].querySelectorAll('span')[1], {
						    autoAlpha: 0,
						    yPercent: -500,
						    duration: 0,
						    ease: "none",
						    overwrite: "auto",
						  }, "<=30%")

					//	Hide second text SVG Icon
						mobile_scrub_timeline.to(step_text_els[1].querySelector('svg'), {
						    autoAlpha: 0,
						    yPercent: -100,
						    scale: 1.5,
						    duration: 0,
						    ease: "none",
						    overwrite: "auto",
						  }, "<")

					//	Show plain wiring diagram
						mobile_scrub_timeline.to(whole_diagram_svg_el, {
						    autoAlpha: 1,
						    scale: 1,
						    duration: 0,
						    overwrite: "auto",
						  }, "<=80%");

					//	Show wiring diagram colored boxes
						boxElements.forEach((els, index) => {
						  mobile_scrub_timeline.to(els, {
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
						  mobile_scrub_timeline.to(els, {
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
						  mobile_scrub_timeline.to(els, {
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
						  mobile_scrub_timeline.to(els, {
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
						mobile_scrub_timeline.to(whole_diagram_svg_el, {
						    autoAlpha: 0,
						    scale: 0.8,
						    duration: 2,
						    overwrite: "auto",
						  })


					//	Show third main text
						mobile_scrub_timeline.to(step_text_els[2].querySelectorAll('span')[0], {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=20%")

					//	Show third subheading text
						mobile_scrub_timeline.to(step_text_els[2].querySelectorAll('span')[1], {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=30%")
					
					//	hide third text main text
						mobile_scrub_timeline.to(step_text_els[2].querySelectorAll('span')[0], {
						    autoAlpha: 0,
						    yPercent: -100,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  })

					//	Hide third text subheading text
						mobile_scrub_timeline.to(step_text_els[2].querySelectorAll('span')[1], {
						    autoAlpha: 0,
						    yPercent: -500,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=30%")


					//	Show Parts Calculator
						mobile_scrub_timeline.to(parts_calc_el, 
				  		{ 
				  			autoAlpha: 1,
				  			xPercent: 0,
				  			duration: 3,
				  			ease: "power2.inOut"
				  		}, "<=10%");

					
					//	Hide Parts Calculator
						mobile_scrub_timeline.to(parts_calc_el, 
				  		{ 
				  			autoAlpha: 0,
				  			yPercent: -100,
				  			duration: 3,
				  			ease: "power2.inOut",
				  		});

					//	Show the fourth text
						mobile_scrub_timeline.to(step_text_els[3].querySelector('span'), {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=30%")

					//	Show the fourth text SVG Icon
						mobile_scrub_timeline.to(step_text_els[3].querySelector('svg'), {
						    autoAlpha: 0.15,
						    yPercent: 0,
						    scale: 1,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=20%")					

					//	Hide the third text text
							mobile_scrub_timeline.to(step_text_els[3].querySelector('span'), {
						    autoAlpha: 0,
						    y: -100,
						    duration: 3,
						    ease: "power2.inOut",
						    delay: 0.5,
						    overwrite: "auto",
						  })

					//	Hide the third text SVG icon
						mobile_scrub_timeline.to(step_text_els[3].querySelector('svg'), {
						    autoAlpha: 0,
						    yPercent: -100,
						    scale: 1.5,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=20%")


					//	Show Table
						mobile_scrub_timeline.to(hero_table_el, 
				  		{ 
				  			autoAlpha: 1,
				  			xPercent: 0,
				  			duration: 3,
				  			ease: "power2.inOut"
				  		}, "<=30%");

					//	Hide table
						mobile_scrub_timeline.to(hero_table_el, 
				  		{ 
				  			autoAlpha: 0,
				  			yPercent: -100,
				  			duration: 3,
				  			ease: "power2.inOut",
				  		}, ">=10%");

					//	Show the Signup SVG logo from bottom to up
						mobile_scrub_timeline.fromTo(signup_logo, 
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
						mobile_scrub_timeline.fromTo(signup_form, 
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






						



					


					



		}




	



  })();
