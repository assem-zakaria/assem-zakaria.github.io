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
	  	const colored_gs = document.querySelectorAll("g.colored");
	  	const text_gs = document.querySelectorAll("g.svg-text-el");
	  	const wiring_diag_g = document.querySelector("g.wiring-diagram");



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
			  	gsap.set([colored_gs, text_gs], 
			  		{ 
			  			autoAlpha: 0,
			  			scale: 0.5,
			  			transformOrigin: '50% 50%'
			  		});


			// Create your timelines
				const timeline1 = gsap.timeline({ paused: true });
				
				timeline1.to(colored_gs, 
						{ 
							autoAlpha: 1, 
							scale: 1,
							duration: 0.5,
							ease: "power4.out",
							stagger: {
						        each: 0.02,
						        from: 'random',
						    }
						});

				const timeline2 = gsap.timeline({ paused: true });
					timeline2.to(text_gs, 
						{ 
							autoAlpha: 1, 
							scale: 1,
							duration: 0.5,
							ease: "power4.out",
							stagger: {
						        each: 0.02,
						        from: 'random',
						    },
						});

				const timeline3 = gsap.timeline({ paused: true });
					timeline3
						.to(text_gs, 
							{ 
							autoAlpha: 0, 
							x: 20,
							duration: 0.5,
							ease: "power4.out",
							stagger: {
						        each: 0.02,
						        from: 'random',
						    }
						})
						.to(colored_gs, 
							{ 
							autoAlpha: 0, 
							x: 20,
							duration: 0.5,
							ease: "power4.out",
							stagger: {
						        each: 0.02,
						        from: 'random',
						    }
						}, "-=50%")
						.to(wiring_diag_g, 
							{ 
							autoAlpha: 0, 
							x: 20,
							duration: 0.5,
							ease: "power4.out",
						}, "-=50%")

				// ScrollTrigger logic
					ScrollTrigger.create({
					  trigger: section,
					  pin: true,
					  start: "top top",
					  end: "+=1000px",
					  onUpdate: (self) => {
					    let progress_value = Math.round(self.progress * 10) / 10;

					    console.log(progress_value)

					    if (progress_value == 0.3) {
					    	// console.log("1st")
					    	timeline1.play();
					    } else if (progress_value == 0.6) {
					    	// console.log("2nd")
					    	timeline2.play();
					    } else if (progress_value == 1) {
					    	// console.log("3rd")
					    	timeline3.play();
					    }
					  }
					});

		}


	



  })();