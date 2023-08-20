function playMusic(){
    const audio = document.querySelector("audio")
    audio.play()
   
}

document.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(playMusic,1500)
})

// GSAP ANIMATIONS
const tl = gsap.timeline()

tl.to("#loader h2",{
    duration: 2,
})

tl.to("#loader",{
    top: "-100vh",
    delay: 0.3,
    duration: 1.5,
    ease: Expo.easeInOut
})


tl.from("nav",{
    x:"-100%",
    opacity:0,
    duration:1.2,
    ease: "ease"
})

tl.from("nav > h3",{
    x: -100,
    duration: .5,
    opacity:0,
    ease:"ease"
})

tl.from("nav > ul > li",{
    x:"100%",
    duration: .5,
    opacity:0,
    stagger:.2,
    ease:"bounce"
})

tl.from("nav > h1",{
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
    transformOrigin: "50% 0",
    duration: .9,
    stagger: .5,
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
})

tl.to(".prompt",{
    y: 20,
    repeat: -1,
    duration:0.7,
    yoyo: true,
})

gsap.to(".introduction h2",{
    x: "-100%",
    fontWeight: 100,
    scrollTrigger:{
        trigger:".introduction",
        scroller: "body",
        scrub: 2,
        // markers: true,
        start: "top 0",
        end: "top -200%",
        pin: true,
    }
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
        end: "top 40%",
 
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

gsap.from(".figure-6",{
    opacity:0,
    scale:2,
    duration:1,
    scrollTrigger:{
        trigger: ".figure-6",
        scroller: "body",
        // markers:true,
        scrub:2,
        start: "30% 60%",
        end: "30% 25%"
    }
})




///////////////////////////////
///////////////////////////////

// figure-6
const boxes = Array.from(document.querySelectorAll(".box"))
const options = ['<i class="fa-solid fa-square"></i>','<i class="fa-solid fa-heart"></i>','<i class="fa-solid fa-plus"></i>','<i class="fa-solid fa-star"></i>','<i class="fa-solid fa-heart"></i>','<i class="fa-solid fa-comment"></i>','<i class="fa-solid fa-cloud"></i>','<i class="fa-solid fa-circle"></i>','<i class="fa-solid fa-shield"></i>','<i class="fa-solid fa-crown"></i>','<i class="fa-solid fa-diamond"></i>','<i class="fa-solid fa-clover"></i>']

for (let i = 0; i < options.length; i++){
    const optionsLine = document.createElement("div")
    optionsLine.className = "options-line"

    const beforeElement = document.createElement("div")
    beforeElement.className = "before"
    beforeElement.style.display = "flex"
    beforeElement.style.justifyContent = "center"
    beforeElement.style.alignItems = "center"
    beforeElement.style.transform = "translateX(-130%)"
    const elementRotate = 90 + i * 30
    beforeElement.style.transform += `rotate(-${elementRotate}deg)`
    // beforeElement.style.backgroundColor = "yellow"
    // beforeElement.style.width = "30px"
    beforeElement.innerHTML = `${options[i]}`
    optionsLine.appendChild(beforeElement)

    optionsLine.style.height = "0.5%"
    optionsLine.style.width = "65%"
    optionsLine.style.position = "absolute"
    optionsLine.style.display = "flex"
    optionsLine.style.justifyContent = "flex-start"
    optionsLine.style.alignItems = "center"

    optionsLine.style.top = "50%"
    optionsLine.style.left = "50%"
    optionsLine.style.transform = "translate(-50%,-50%)"
    // optionsLine.style.backgroundColor = "white"
    const rotation = 90 + i * (360 / options.length)
    optionsLine.style.transform += `rotate(${rotation}deg)`


    boxes.forEach(box => box.appendChild(optionsLine.cloneNode(true)))
}