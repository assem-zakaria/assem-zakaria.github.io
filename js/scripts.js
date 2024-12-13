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
	  	

	  	const step_text_els = document.querySelectorAll(".steps-text .step-el");


	  	const hero_table_el = document.querySelector("section.hero table");



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

			  	Array.from(step_text_els).slice(1).forEach(el => { // hide all steps except the first one
					    gsap.set(el.querySelector("span"),
					    	{
					    		autoAlpha: 0,
					    		yPercent: 100
					    })
					});



					gsap.set(whole_diagram_svg_el, 
			  		{ 
			  			autoAlpha: 0.2,
			  			scale: 0.8
			  		});

			  	gsap.set(hero_table_el, 
			  		{ 
			  			autoAlpha: 0,
			  			yPercent: -20
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



					const scrub_timeline = gsap.timeline({
					  scrollTrigger: {
					    trigger: section,
					    pin: true,
					    start: "top top",
					  	end: "+=8000px",
					    scrub: 1,
					  }
					});

					//	Hide the first text
					scrub_timeline.to(step_text_els[0].querySelector('span'), {
					    autoAlpha: 0,
					    yPercent: -100,
					    duration: 3,
					    overwrite: "auto",
					  })

					// show the second text
					scrub_timeline.to(step_text_els[1].querySelector('span'), {
					    autoAlpha: 1,
					    yPercent: 0,
					    duration: 3,
					    overwrite: "auto",
					  })

					//	hide the second text
					scrub_timeline.to(step_text_els[1].querySelector('span'), {
					    autoAlpha: 0,
					    yPercent: -100,
					    duration: 3,
					    overwrite: "auto",
					  })

					// show the empty diagram
					scrub_timeline.to(whole_diagram_svg_el, {
					    autoAlpha: 1,
					    scale: 1,
					    duration: 1.5,
					    overwrite: "auto",
					  })

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
					// boxElements.forEach((els, index) => {
					//   scrub_timeline.to(els, {
					//     autoAlpha: 0,
					//     scale: 1.5,
					//     duration: 1,
					//     overwrite: "auto",
					//     stagger: {
					//       each: 0.5,
					//       from: "start"
					//     },
					//   });						
					// });

					boxElements.forEach((els, index) => {
					  scrub_timeline.to(els, {
					    autoAlpha: 0,
					    scale: 1.5,
					    duration: 1,
					    overwrite: "auto",
					    stagger: {
					      each: 0.5,
					      from: "start"
					    },
					  }, "<=0");
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
					  }, "<=0");
					});

					// semi hide and scale down the empty diagram
					scrub_timeline.to(whole_diagram_svg_el, {
					    autoAlpha: 0.2,
					    scale: 0.8,
					    duration: 2,
					    overwrite: "auto",
					  })

					//	show third text
					scrub_timeline.to(step_text_els[2].querySelector("span"), {
					    autoAlpha: 1,
					    yPercent: 0,
					    duration: 3,
					    overwrite: "auto",
					    // stagger: {
					    //   each: 0.08,
					    // },
					  });

					//	hide third text
					scrub_timeline.to(step_text_els[2].querySelector("span"), {
					    autoAlpha: 0,
					    yPercent: -100,
					    duration: 3,
					    overwrite: "auto",
					    // stagger: {
					    //   each: 0.08,
					    // },
					  });	

					// show the table
					scrub_timeline.to(hero_table_el, 
			  		{ 
			  			autoAlpha: 1,
			  			yPercent: -50,
			  			duration: 2
			  		});



		}




	



  })();