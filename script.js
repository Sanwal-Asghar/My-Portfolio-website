


gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  // Yeh neche wali lines add kro taake mobile pr b smooth scroll chale
  smoothMobile: true, 
  smartphone: {
    smooth: true
  },
  tablet: {
    smooth: true
  }
});


// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// });
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



    function page1Animation(){
        gsap.from( ".intro h1, .intro p, .intro div", {
            y: 50,
            opacity: 0,
            duration: 1,
          
            scrollTrigger: {
                trigger: ".page1",
                start: "top 80%",
                 end: "top 50%",
                toggleActions: "play none none none"
            }
        });
    }
    page1Animation()
      
    function page2Animation(){
      
        gsap.from( ".page2 .pag2-pic", {
            y:50,
            opacity: 0,
            duration: 1,
           scrollTrigger: {
               scroller: ".main",
                trigger: ".page2",
                start: "top 75%",
                 end: "top 40%",
               
                toggleActions: "play none none none",
                 scrub: 6,
                 
            }
        });
  gsap.from( ".about-me h1,.about-me .underlined,.about-me p,.about-me .cv-btn,.about-me span", {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
               scroller: ".main",
                trigger: ".page2",
                start: "top 60%",
                  end: "top 40%",
                toggleActions: "play none none none",
                scrub: 7,
            }
        });
      
    }
    page2Animation()

     function page3Animation(){
       gsap.from( ".My-skills h1 ,.My-skills .underlined-s", {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
               scroller: ".main",
                trigger: ".page3",
                start: "top 50%",
                end: "top 40%",
                toggleActions: "play none none none",
                scrub: 3,
                
            }
        });
      
          gsap.from( ".skill-box .box" , {
            y: 50,
            opacity: 0,
            stagger: 0.4,
            duration: 1,
            scrollTrigger: {
               scroller: ".main",
                trigger: ".page3",
                start: "top 60%",
                end: "top 40%",
                 scrub: 7,
                toggleActions: "play none none none"
            }
          })
     }  
     page3Animation()

         function page4Animation(){
           gsap.from( ".My-projects h1,.page4 .My-projects .underlined-p" , {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
               scroller: ".main",
                trigger: ".page4",
                start: "top 80%",
                 end: "top 40%",
                scrub: 3,
               toggleActions: "play none none none"
            }
          })

          
          gsap.from( ".project-box .p-box ,.project-box-2 .p-box" , {
            y: 50,
            opacity: 0,
            stagger: 0.4,
            duration: 1,
            scrollTrigger: {
               scroller: ".main",
                trigger: ".page4",
                start: "top 60%",
                end: "top 40%",
                 scrub: 7,
                toggleActions: "play none none none"
            }
          })
         }
         page4Animation()

          function page5Animation(){
               gsap.from( ".page5 h1,.page5 .underlined-c", {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
               scroller: ".main",
                trigger: ".page5",
                start: "top 80%",
                 end: "top 40%",
                 scrub: 3,
               toggleActions: "play none none none"
            }
          })


            gsap.from( ".client-reviews .R-box" , {
            y: 50,
            opacity: 0,
            stagger: 1,
            duration: 1,
            scrollTrigger: {
               scroller: ".main",
                trigger: ".page5",
                start: "top 60%",
                end: "top 40%",
                 scrub: 3,
                toggleActions: "play none none none"
            }
          })
          }
          page5Animation()

            function page6Animation(){
               gsap.from( ".page6 h1,.page6 .underlined-ct" , {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
               scroller: ".main",
                trigger: ".page6",
                start: "top 80%",
                end: "top 40%",
                 scrub: 3,
               toggleActions: "play none none none"
            }
          })


             gsap.from( ".info .info-box-1 ,.info .info-box-2,.info .info-box-3" , {
            x: -50,
            opacity: 0,
            stagger: 1,
            duration: 1,
            scrollTrigger: {
               scroller: ".main",
                trigger: ".page6",
                start: "top 60%",
                end: "top 40%",
                 scrub: 3,
                toggleActions: "play none none none"
            }
          })


          
            gsap.from( ".contact-box" , {
            x: 50,
            opacity: 0,
            stagger: 1,
            duration: 1,
            scrollTrigger: {
               scroller: ".main",
                trigger: ".page6",
                start: "top 60%",
                end: "top 40%",
                 scrub: 3,
                toggleActions: "play none none none"
            }
          })
        }
        page6Animation()


    
       
  function cursorAnimation() {

    
let page1 = document.querySelector(".page1")
let cursor = document.querySelector(".cursor")

page1.addEventListener("mousemove",(dets)=>{

    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
         
})

page1.addEventListener("mouseenter",()=>{

     gsap.to(cursor,{
        scale:1,
        opacity:1
    })
  
})
page1.addEventListener("mouseleave",()=>{
      gsap.to(cursor,{
         scale:0,
         opacity:0
    })
     
})
}
cursorAnimation();


        

   