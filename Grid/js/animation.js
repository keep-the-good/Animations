const timeline = anime.timeline();
timeline.add({
    targets: ".grid-item",
    // easing: 'easeInOutQuad',
    translateX: anime.stagger(20, {grid: [10, 10], from: "center", axis: "x"}),
    translateY: anime.stagger(20, {grid: [10, 10], from: "center", axis: "y"}),
    delay: anime.stagger(200, {grid: [10, 10], from: "center"}),    
}).add({
    targets: ".grid-item",
    easing: 'easeInOutQuad',
    translateX: anime.stagger(0, {grid: [10, 10], from: "first", axis: "x"}),
    translateY: anime.stagger(0, {grid: [10, 10], from: "first", axis: "y"}),
    delay: anime.stagger(90, {grid: [10, 10], from: "first"}),        
}).add({
    targets: ".grid-item",
    // easing: 'easeInOutQuad',
    translateX: anime.stagger(20, {grid: [10, 10], from: "center", axis: "x"}),
    translateY: anime.stagger(20, {grid: [10, 10], from: "center", axis: "y"}),
    delay: anime.stagger(200, {grid: [10, 10], from: "center"}),    
}).add({
    targets: ".grid-item",
    easing: 'easeInOutQuad',
    translateX: anime.stagger(0, {grid: [10, 10], from: "last", axis: "x"}),
    translateY: anime.stagger(0, {grid: [10, 10], from: "last", axis: "y"}),
    delay: anime.stagger(90, {grid: [10, 10], from: "last"}),        
}).add({
    targets: ".grid-item",
    // easing: 'easeInOutQuad',
    translateX: anime.stagger(20, {grid: [10, 10], from: "center", axis: "x"}),
    translateY: anime.stagger(20, {grid: [10, 10], from: "center", axis: "y"}),
    delay: anime.stagger(200, {grid: [10, 10], from: "center"}),    
}).add({
    targets: ".grid-item",
    easing: 'easeInOutQuad',
    translateX: anime.stagger(0, {grid: [10, 10], from: "center", axis: "x"}),
    translateY: anime.stagger(0, {grid: [10, 10], from: "center", axis: "y"}),
    delay: anime.stagger(90, {grid: [10, 10], from: "center"}),        
})
