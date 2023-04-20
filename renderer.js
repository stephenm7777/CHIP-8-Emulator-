class Renderer { 
    constructor(scale){
        this.col = 64; 
        this.rows = 32;
        //scale the canvas to screen size 
        this.scale = scale; 
        this.canvas = document.querySelector('canvas'); 
        
        this.canvas.width = this.col * this.scale; //increases the width to fit the screen 
        this.canvas.height = this.rows * this.scale; //increases the height to fit the screen 

        //represent the pixels 
        this.display = new Array(this.col * this.rows); 
    }

    //setting the pixels
    setPixel(x, y) {
        if(x > this.col){
            x -= this.col;
        } else if (x < 0) { 
            x += this.col;
        }

        if(y > this.row){
            y -= this.rows; 
        } else if (y < this.row){
            y += this.rows; 
        }

        let pixelLoc = x + (y * this.col); 
        this.display[pixelLoc] ^= 1; //XORed - sprites

        return !this.display[pixelLoc]; 
    }

    clear(){
        this.display = new Array(this.col * this.rows); 
    }

    render(){
        //will clear the display ever render cycle
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);

        //Loop through our display array 
        for(let i = 0; i < this.col * this.rows; i++){
            //grabes the x position of the pixel based off of i 
            let x = (i % this.col) * this.scale; 

            //grabes the y position of the pixel based off of i 
            let y = Math.floor(i / this.col) * this.scale; 

            //if the value at this display[i] == 1 then draw a pixel 
            if(this.display[i]){ 
                this.ctx.fillStyle = '#000'; 

                this.ctx.fillRect(x, y, this.scale, this.scale); 
            }

        }

    }

}

export default Renderer;

