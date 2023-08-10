// GSAP ANIMATIONS
const tl = gsap.timeline()

function time(){
    let a = 0
    setInterval(function() {
        a += ~~(Math.random()*25)
        if(a < 100){
        document.querySelector("#loader h2").innerHTML = a + "%"
        } else{
               a = 100
               document.querySelector("#loader h2").innerHTML = a + "%"
        }
    },150)
}

tl.to("#loader h2",{
    duration: 1,
    onStart: time()
})

tl.to("#loader",{
    top: "-100vh",
    delay: 0.3,
    duration: 1.5
})


tl.from("nav",{
    x:"-100%",
    opacity:0,
    duration:1.2,
    delay:.4,
    ease: "ease"
})

tl.from("nav > h3",{
    x: -100,
    duration: .5,
    opacity:0,
    ease:"ease"
})

tl.from("ul > li",{
    x:"100%",
    duration: .5,
    opacity:0,
    stagger:.2,
    ease:"bounce"
})

tl.from("nav > h1",{
    y: -100,
    opacity:0,
    duration: .6,
    ease:"ease"
})

tl.from(".title",{
    scale:0,
    opacity:0,
    duration: .5,
    ease:"ease"
})

tl.from(".title > .second, .title > .first",{
    y: -10,
    transform: "rotateX(90deg)",
    transformOrigin: "top",
    duration: .7,
    ease:"ease"
})

tl.from(".hero-image",{
    opacity:0,
    scale:0,
    duration:1,
    stagger:.3
})

tl.from(".big-hero-image",{
    opacity:0,
    scale:0,
    duration:1,
    stagger:.3
})

tl.from(".prompt",{
    scale:0,
    opacity:0,
    delay:.2
})

tl.to(".prompt",{
    y: 20,
    repeat: -1,
    duration:0.7,
    yoyo: true,
})

gsap.from(".figure-1",{
    opacity:0,
    x:-200,
    delay:.3,
    duration: 1,
    scrollTrigger:{
        trigger:".figure-1",
        scroller:"body",
        // markers: true,
        start: "top 60%",
        scrub: 2,
        end: "top 40%"
    }
})


gsap.from(".figure-2",{
    opacity:0,
    x: 200,
    delay:.3,
    duration: 1,
    scrollTrigger:{
        trigger:".figure-2",
        scroller:"body",
        // markers: true,
        start: "top 60%",
        scrub: 2,
        end: "top 40%"
    }
})

gsap.from(".figure-3",{
    opacity:0,
    y: 200,
    delay:.3,
    duration: 1,
    scrollTrigger:{
        trigger:".figure-3",
        scroller:"body",
        // markers:true,
        start: "top 120%",
        scrub: 2,
        end: "top 50%"
    }
})

gsap.from(".figure-4",{
    opacity:0,
    y: -200,
    delay:.3,
    duration: 1,
    scrollTrigger:{
        trigger:".figure-4",
        scroller:"body",
        // markers: true,
        start: "top 40%",
        scrub: 2,
        end: "top -10%",
    }
})

gsap.from(".figure-5",{
    scale:0,
    rotate:180,
    opacity:0,
    delay:.3,
    duration: 1,
    scrollTrigger:{
        trigger:".figure-5",
        scroller:"body",
        // markers: true,
        start: "top 150%",
        scrub: 2,
        end: "top 60%",
    }
})



///////////////////////////////
///////////////////////////////

