anime({
    targets: ".grid-item",
    scale: [        
        {value: .1, easing: 'easeOutSine', duration: 500}, 
        {value: 1, easing: 'easeInOutQuad', duration: 1200},                
    ],    
    delay: anime.stagger(200, {grid: [10, 10], from: "center"}),
    loop: true,    
})
