class Square {
    constructor(ctx, listId, length, x, y, color) {

    }
  
    draw() {
        const canvas = document.getElementById('canvas');
        if (canvas.getContext) {
          const ctx = canvas.getContext('2d');
      
          ctx.fillRect(25, 25, 100, 100);
          ctx.clearRect(45, 45, 60, 60);
          ctx.strokeRect(50, 50, 50, 50);
          console.log(ctx);
        }
    }
    
    // …
  }
  
  export {Square}