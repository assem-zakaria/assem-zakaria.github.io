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



  	//	Variables
	  	const loader_el = document.querySelector('.intro-loader');
	  	const section = document.querySelector("section.hero");

	  	const whole_diagram_svg_el = document.querySelector("section.hero .right-cont > svg");

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
	  	

	  	const step_text_els = document.querySelectorAll(".left-cont .step-el");

	  	const form_cont = document.querySelectorAll(".left-cont .form-cont");

	  	const scroll_down_popup = document.querySelector(".right-cont .scroll-down-popup");

	  	const hero_table_el = document.querySelector("section.hero table");

	  	//	Signup Logo Elements
	  	const signup_logo = document.querySelector(".signup-cont > svg");
	  	const signup_logo_paragraph = document.querySelector(".signup-cont p");
	  	const purple_logo_group = signup_logo.querySelector("g:first-of-type");
	  	const purple_logo_group_bbox = purple_logo_group.getBBox();
	  	const text_logo_group = signup_logo.querySelector("g:last-of-type");
	  	const text_logo_group_pathes = text_logo_group.querySelectorAll("path");

  	  const signup_logo_width = signup_logo.viewBox.baseVal.width; // SVG's width from the viewBox
  		const centerX = (signup_logo_width - purple_logo_group_bbox.width) / 2 - purple_logo_group_bbox.x; // Calculate center x-coordinate





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
				    gsap.set(el.querySelector("span"),
				    	{
				    		autoAlpha: 0,
				    		yPercent: 100
				    });

				    gsap.set(el.querySelector("svg"),
				    	{
				    		autoAlpha: 0,
				    		yPercent: 100,
				    		scale: 0.5
				    });
				});

			//	Hide the table
		  	gsap.set(hero_table_el, 
		  		{ 
		  			autoAlpha: 0,
		  			yPercent: -20
		  		});

		  //	Hide the purple logo part of the signup SVG logo
	  	  gsap.set(purple_logo_group, {
			    // x: centerX,
			    y: 50,
			    autoAlpha: 0,
			    transformOrigin: '50% 50%'
			  });

			//	Hide all text SVG pathes of logo text
			  gsap.set(text_logo_group_pathes, {
			    autoAlpha: 0,
			    y: 50
			  });

			  gsap.set(signup_logo_paragraph, {
			    autoAlpha: 0,
			    y: 50
			  });

			  

			  gsap.set(whole_diagram_svg_el, {
			    autoAlpha: 0.2,
			  });

			  


		  // Array of elements
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



				//	Scroll Trigger Timeline
					const scrub_timeline = gsap.timeline({
					  scrollTrigger: {
					    trigger: section,
					    pin: true,
					    start: "top top",
					  	end: "+=1100%",
					    scrub: 1,
					  }
					});

					
					//	Hide the scroll down popup
						scrub_timeline.to(scroll_down_popup, {
						    autoAlpha: 0,
						    yPercent: -100,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  })

					// Show wiring diagram
						scrub_timeline.to(whole_diagram_svg_el, {
						    autoAlpha: 1,
						    duration: 2,
						    overwrite: "auto",
						  }, "<=80%")

					//	Hide the form cont
						scrub_timeline.to(form_cont, {
						    autoAlpha: 0,
						    yPercent: -100,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=20%")

					//	Show the first step text
						scrub_timeline.to(step_text_els[0].querySelector('span'), {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=30%")

					// Show the first text SVG Icon
						scrub_timeline.to(step_text_els[0].querySelector('svg'), {
						    autoAlpha: 0.1,
						    yPercent: 0,
						    scale: 1,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=20%")

					//	Hide the first text
						scrub_timeline.to(step_text_els[0].querySelector('span'), {
						    autoAlpha: 0,
						    yPercent: -100,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  })

					//	Hide the first text SVG icon
						scrub_timeline.to(step_text_els[0].querySelector('svg'), {
						    autoAlpha: 0,
						    yPercent: -100,
						    scale: 1.5,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=30%")

					// Show the second text
						scrub_timeline.to(step_text_els[1].querySelector('span'), {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=30%")

					// Show the second text SVG Icon
						scrub_timeline.to(step_text_els[1].querySelector('svg'), {
						    autoAlpha: 0.1,
						    yPercent: 0,
						    scale: 1,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=20%")
					
					//	show the colored boxes
						boxElements.forEach((els, index) => {
						  scrub_timeline.to(els, {
						    autoAlpha: 1,
						    scale: 1,
						    duration: 1,
						    overwrite: "auto",
						    stagger: {
						      each: 0.5,
						    },
						  });						
						});

					// show the text boxes
						textElements.forEach((els) => {
						  scrub_timeline.to(els, {
						    autoAlpha: 1,
						    scale: 1,
						    duration: 1,
						    overwrite: "auto",
						    stagger: {
						      each: 0.5,
						    },
						  });
						});

					//	hide the colored boxes
						boxElements.forEach((els, index) => {
						  const position = index === 0 ? ">" : "<=0"; // Use "<=50%" for the first iteration
						  scrub_timeline.to(els, {
						    autoAlpha: 0,
						    scale: 1.5,
						    duration: 1,
						    overwrite: "auto",
						    stagger: {
						      each: 0.5,
						      from: "start"
						    },
						  }, position);
						});

					//	hide the text boxes
						textElements.forEach((els) => {
						  scrub_timeline.to(els, {
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

					// Hide and scale down wiring diagram
						scrub_timeline.to(whole_diagram_svg_el, {
						    autoAlpha: 0,
						    scale: 0.8,
						    duration: 2,
						    overwrite: "auto",
						  })

					// hide the second text
						scrub_timeline.to(step_text_els[1].querySelector('span'), {
						    autoAlpha: 0,
						    yPercent: -100,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<")	// start exactly with the start of prevoius animation (both start together)

					// Hide the second text SVG Icon
						scrub_timeline.to(step_text_els[1].querySelector('svg'), {
						    autoAlpha: 0,
						    yPercent: -100,
						    scale: 1.5,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=40%")

					// Show the table
						scrub_timeline.to(hero_table_el, 
				  		{ 
				  			autoAlpha: 1,
				  			yPercent: -50,
				  			duration: 3,
				  			ease: "power2.inOut"
				  		}, "<=20%");

					// Show the third text
						scrub_timeline.to(step_text_els[2].querySelector('span'), {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<")

					// Show the third text SVG Icon
						scrub_timeline.to(step_text_els[2].querySelector('svg'), {
						    autoAlpha: 0.1,
						    yPercent: 0,
						    scale: 1,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=20%")

					//	Hide the third text
						scrub_timeline.to(step_text_els[2].querySelector('span'), {
						    autoAlpha: 0,
						    yPercent: -100,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  })

					//	Hide the third text SVG icon
						scrub_timeline.to(step_text_els[2].querySelector('svg'), {
						    autoAlpha: 0,
						    yPercent: -100,
						    scale: 1.5,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=30%")

					// Show the fourth text
						scrub_timeline.to(step_text_els[3].querySelector('span'), {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<")

					// Show the fourth text SVG Icon
						scrub_timeline.to(step_text_els[3].querySelector('svg'), {
						    autoAlpha: 0.1,
						    yPercent: 0,
						    scale: 1,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=20%")

					//	Hide the fourth text
						scrub_timeline.to(step_text_els[3].querySelector('span'), {
						    autoAlpha: 0,
						    yPercent: -100,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  })

					//	Hide the fourth text SVG icon
						scrub_timeline.to(step_text_els[3].querySelector('svg'), {
						    autoAlpha: 0,
						    yPercent: -100,
						    scale: 1.5,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=30%")

					// Show the fifth text
						scrub_timeline.to(step_text_els[4].querySelector('span'), {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<")

					// Show the fifth text SVG Icon
						scrub_timeline.to(step_text_els[4].querySelector('svg'), {
						    autoAlpha: 0.1,
						    yPercent: 0,
						    scale: 1,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=20%")

					//	Hide the fifth text
						scrub_timeline.to(step_text_els[4].querySelector('span'), {
						    autoAlpha: 0,
						    yPercent: -100,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  })

					//	Hide the fifth text SVG icon
						scrub_timeline.to(step_text_els[4].querySelector('svg'), {
						    autoAlpha: 0,
						    yPercent: -100,
						    scale: 1.5,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=30%")

					// Show the sixth text
						scrub_timeline.to(step_text_els[5].querySelector('span'), {
						    autoAlpha: 1,
						    yPercent: 0,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<")

					// Show the sixth text SVG Icon
						scrub_timeline.to(step_text_els[5].querySelector('svg'), {
						    autoAlpha: 0.1,
						    yPercent: 0,
						    scale: 1,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=20%")

					// Hide table
						scrub_timeline.to(hero_table_el, 
				  		{ 
				  			autoAlpha: 0,
				  			yPercent: -100,
				  			duration: 3,
				  			ease: "power2.inOut",
				  		});

					//	Hide the sixth text
						scrub_timeline.to(step_text_els[5].querySelector('span'), {
						    autoAlpha: 0,
						    y: -100,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<")

					//	Hide the sixth text SVG icon
						scrub_timeline.to(step_text_els[5].querySelector('svg'), {
						    autoAlpha: 0,
						    yPercent: -100,
						    scale: 1.5,
						    duration: 3,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=30%")

					//	Show purple logo of SVG
						scrub_timeline.to(purple_logo_group, {
						    autoAlpha: 1,
						    y: 0,
						    duration: 1,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=90%")

					//	Show stagger the letters pathes
						scrub_timeline.to(text_logo_group_pathes, {
						    autoAlpha: 1,
						    y: 0,
						    duration: 1,
						    ease: "power2.inOut",
						    overwrite: "auto",
						    stagger: {
						      each: 0.1,
						      from: "start"
						    },
						  }, "<=10%")

						scrub_timeline.to(signup_logo_paragraph, {
						    autoAlpha: 1,
						    y: 0,
						    duration: 1,
						    ease: "power2.inOut",
						    overwrite: "auto",
						  }, "<=50%")

						






						



					


					



		}




	



  })();