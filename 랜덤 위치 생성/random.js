function createDiv(count) {
    const field = document.querySelector('.field');
    const fieldRect = field.getBoundingClientRect();
    //const fieldRect2 = window.pageYOffset + field.getBoundingClientRect().top;
    const xMin = 0;
    const yMin = 0;
    const xMax = fieldRect.width;
    const yMax = fieldRect.height;
    
    for (let i = 0; i < count; i++) {
        const newDiv = document.createElement('div');
      
        const x = randomNumber(xMin, xMax);
        const y = randomNumber(yMin, yMax);
      
        newDiv.style.position = 'absolute';
        newDiv.style.left = `${x}px`;
        newDiv.style.top = `${y}px`;
      
        newDiv.style.width = `${30}px`; 
        newDiv.style.height = `${30}px`;
        newDiv.style.backgroundColor = 'yellow';
        field.appendChild(newDiv);
    }
}
  
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

window.onload = function() {
    createDiv(5);
}