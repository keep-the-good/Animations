let text = document.querySelector(".text-item");
let addSpan = "";
for (let i = 0; i < text.textContent.length; i++) {    
    addSpan += `<span class='letter --${i+1}'>${text.textContent[i]}</span>`;           
}
text.innerHTML = addSpan;

const animation = anime.timeline();
animation.add({
    targets: ".--1",
    translateX: [
        { value: -25, duration: 100, easing: 'easeInOutQuad' },
        { value: 0, duration: 100, easing: 'easeInOutQuad' },
        { value: -25, duration: 100, easing: 'easeInOutQuad' },
        { value: 0, duration: 100, easing: 'easeInOutQuad' },
        { value: -25, duration: 100, easing: 'easeInOutQuad' },
        { value: 0, duration: 100, easing: 'easeInOutQuad' },        
        { value: -100, duration: 500 },        
    ],             
});

const animation_two = anime.timeline();
animation_two.add({
    targets: ".--5",
    translateX: [
        { value: 25, duration: 100, easing: 'easeInOutQuad' },
        { value: 0, duration: 100, easing: 'easeInOutQuad' },
        { value: 25, duration: 100, easing: 'easeInOutQuad' },
        { value: 0, duration: 100, easing: 'easeInOutQuad' },
        { value: 25, duration: 100, easing: 'easeInOutQuad' },
        { value: 0, duration: 100, easing: 'easeInOutQuad' },        
        { value: 100, duration: 500 },        
    ],
})

const animation_three = anime.timeline();
animation_three.add({
    targets: ".--2",
    translateX: [        
        { value: 0, duration: 100 },        
        { value: -55, duration: 500 },        
    ],
}, 700)

const animation_four = anime.timeline();
animation_four.add({
    targets: ".--4",
    translateX: [        
        { value: 0, duration: 100 },        
        { value: 55, duration: 500 },        
    ],
}, 700)

const animation_five = anime.timeline();
animation_five.add({
    targets: ".--3",    
    easing: 'easeInOutQuad',
    translateX: -20,
    translateY: -5,
    rotate: -45,    
    duration: 200,                
}, 1000).add({
    targets: ".--3",    
    easing: 'easeInOutQuad',
    translateX: 0,
    translateY: 0,
    rotate: 0,    
    duration: 100,   
}).add({
    targets: ".--3",
    translateY: [                
        // { value: -55, duration: 1000, delay: 0, endDelay: -665},
        { value: -55, duration: 400, endDelay: -250, easing: "easeOutBack"},        
        { value: 0, duration: 600, delay: 0, easing: 'easeOutBounce'},                
    ],
}, 1300);

// document.querySelector(".--restart").onclick = animation.restart;
// document.querySelector(".--play").onclick = animation.play;
// document.querySelector(".--stop").onclick = animation.pause;