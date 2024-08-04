Shery.imageEffect(".bg", {
    style: 2, //Select Style
    // debug: true, // Debug Panel
    gooey:true,
    config:{"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":0},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":33.78,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":443.24,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":2,"range":[0,3.141592653589793]},"waveFactor":{"value":-0.93,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":86.22,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":7.5,"range":[0,10]},"contrast":{"value":1.35,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.164599747439442},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":32},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.34,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]}}
  });

let clicks = 0 

const data = [
    'david chang',
    'bhuvineshvar',
    'wobbleness',
    'travis chang',
    'miki chang'
]


const headings = document.querySelectorAll(".heading")

const showData = () => {
    headings.forEach((heading,i) => {
        const h1 = document.createElement('h1')
        h1.classList.add('h_1')
        h1.innerHTML = data[clicks]
        const h2 = document.createElement('h1')
        h2.classList.add('h_2')
        h2.innerHTML = data[(clicks + 1 ) % data.length]

        heading.innerHTML = ''
        heading.appendChild(h1)
        heading.appendChild(h2)
        gsap.to(h1,{
            delay:1,
            top:0,
            duration:1
        })
    })
}
showData()

let isAnimating = false

const handleClick = () => {
    isAnimating = true
    clicks++
    clicks %= data.length
    headings.forEach(heading => {
        const h1 = heading.querySelector('.h_1')
        const h2 = heading.querySelector('.h_2')
        gsap.to(h1 , {
            top:'-110%',
            ease:'power2',
            duration:1,
            onComplete:() => {
                h1.textContent = data[(clicks + 1) % data.length]
                gsap.set(h1 , {
                    top:'110%',
                    onComplete(){
                        setTimeout(() => {
                            isAnimating = false
                        },500)
                    }
                })
            }
        })
        gsap.to(h2 , {
            top:0,
            duration:1
        })
        h1.classList.remove('h_1')
        h1.classList.add('h_2')
        h2.classList.remove('h_2')
        h2.classList.add('h_1')
    })
}

const bg = document.querySelector('.bg')
bg.addEventListener('click',(e) => {
    if (!isAnimating) {
        handleClick(e)
    }
})