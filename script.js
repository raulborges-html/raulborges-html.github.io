function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');

   
    flower.style.left = Math.random() * 100 + 'vw';

    
    const animationDuration = Math.random() * 5 + 5; 
    flower.style.animationDuration = animationDuration + 's';
    flower.style.animationDelay = Math.random() * 5 + 's'; 

    
    flower.style.opacity = Math.random() * 0.5 + 0.5; 

    
    document.body.appendChild(flower);

    
    setTimeout(() => {
        flower.remove();
    }, (animationDuration + 5) * 1000); 
}

for (let i = 0; i < 30; i++) {
    createFlower();
}

setInterval(createFlower, 1000);