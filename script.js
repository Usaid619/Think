// GSAP ANIMATIONS
(function() {
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
})()

gsap.to(".introduction h2",{
    x: "-100%",
    fontWeight: 100,
    scrollTrigger:{
        trigger:".introduction",
        scroller: "body",
        scrub: 2,
        // markers: true,
        start: "top 0",
        end: "top -400%",
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


// Illustrations Animations

// Creating Flag
let isAnimating = "false"

// Creating Seperate Timelines
const f1 = gsap.timeline({
    onComplete: () =>{
        isAnimating = false
    }
})
const f2 = gsap.timeline({
    onComplete: () =>{
        isAnimating = false
    }
})
const f3 = gsap.timeline({
    onComplete: () =>{
        isAnimating = false
    }
})
const f4 = gsap.timeline({
    onComplete: () =>{
        isAnimating = false
    }
})
const f5 = gsap.timeline({
    onComplete: () =>{
        isAnimating = false
    }
})
const f6 = gsap.timeline({
    onComplete: () =>{
        isAnimating = false
    }
})

// Declaring Variables
const figure1 = document.querySelector(".figure-1")
const figure2 = document.querySelector(".figure-2")
const figure3 = document.querySelector(".figure-3")
const figure4 = document.querySelector(".figure-4")
const figure5 = document.querySelector(".figure-5")
const figure6 = document.querySelector(".figure-6")

// Making Functions

function animateF1(){
    if(!isAnimating){
        isAnimating = true

        f1.from(".middle-line",{
            xPercent: -100,
            delay:.5,
            duration: 1
        })
    
        f1.from(".big-circle",{
            yPercent: -100,
            duration: 1.6,
            opacity: 0,
            ease: "bounce"
        })
    
        f1.from(".reality,.imagination,.problems",{
            duration: .8,
            delay: .2,
            stagger:1.3,
            opacity: 0,
        })
    }

}

function animateF2(){
    if(!isAnimating){
        isAnimating = "true"

        f2.from(".line",{
            opacity: 0,
            delay: .5,
            duration: 1,
            stagger: 1
        })
    
        f2.from(".small-line-1",{
            yPercent: 2000,
            xPercent: -25,
            opacity: 0,
            duration: 1
        })
        
        f2.from(".small-line-2",{
            yPercent: 2000,
            xPercent: 27,
            opacity: 0,
            duration: 1
        })
    
        f2.from(".small-line-3",{
            yPercent: 2000,
            opacity: 0,
            duration: 1
        })
    
        f2.from(".think-big",{
            opacity:0,
            delay: .5,
            duration: 1
        })
    }    
}

function animateF3(){
    if(!isAnimating){
        isAnimating = true

        f3.from(".line-down",{
            height: 0,
            transformOrigin: "left",
            duration: 1.5
        })

        f3.from(".box-1",{
            opacity:0,
            width:0,
            duration: 1.5
        })

        f3.from(".box-1",{
            height: 0,
            duration: 1.5
        })

        f3.from(".box-2",{
            opacity:0,
            width:0,
            duration: 1.5
        })

        f3.from(".box-2",{
            height: 0,
            duration: 1.5
        })

        f3.from(".if-you,.do-not-try,.try",{
           opacity:0,
            duration: 1,
            stagger: 1.1
        })
    }
}

function animateF4(){
f4.from(".human",{
    opacity: 0,
    scale: 0,
    stagger: 1.3,
    duration: 1.4
})

f4.from(".f4circle",{
    opacity: 0,
    scale: 0,
    stagger: .4,
    duration: 1
})

f4.from(".speak, .listen",{
    opacity:0,
    duration: 1,
    stagger: 1.3
})
}

function animateF5(){

   if(!isAnimating){
    isAnimating = "true"

    f5.from(".half-circle",{
        opacity:0,
        delay: .3,
        duration: 1.4
    })

    f5.from(".happy,.working",{
        opacity:0,
        stagger: 1.3,
        duration: 1.3
    })
   }

}

function animateF6(){
if(!isAnimating){
    isAnimating = "true"
    
        f6.from(".options-line",{
            scale:0,
            rotate: 360,
            duration: 1.5,
        })

        f6.from(".circle",{
            scale:0,
            duration:1.4,
            ease: "bounce"
        })
        
        
        f6.from(".before",{
            scale: 0,
            stagger: .1,
            duration: .6,
            delay: .2
        })
        
        f6.from(".anything,.everything",{
            opacity:0,
            stagger:1.3,
            duration:2
            })
}
}

// Adding Event Listeners

figure1.addEventListener("click",animateF1)
figure2.addEventListener("click",animateF2)
figure3.addEventListener("click",animateF3)
figure4.addEventListener("click",animateF4)
figure5.addEventListener("click",animateF5)
figure6.addEventListener("click",animateF6)

///////////////////////////////
///////////////////////////////

// Dynamically Creating figure-6
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