class Keyboard{
    constructor(){
        this.KEYMAP = {
            49: 0x01, //1
            50: 0x02, //2
            51: 0x03, //3
            52: 0x0c, //4
            81: 0x4, //Q
            87: 0x5, //W
            69: 0x6, //E
            82: 0xD, // R
            65: 0x7, //A 
            83: 0x8, // S
            68: 0x9, // D
            70: 0xE, // F
            90: 0xA, // Z
            88: 0x0, // X
            67: 0xB, // C
            86: 0xF  // V

        }

        this.keyPressed = []; 
        //waiting for input
        this.onNextKeyPress = null; 

        window.addEventListener('keydown', this.onKeyDown.bind(this), false); 
        window.addEventListener('keyup', this.onKeyUp.bind(this), false); 
    }

    oneKeyDown(event){
        let key = this.KEYMAP[event.which]; 
        this.keyPressed[key] = true;

        if(this.onNextKeyPress != null && key){
            this.onNextKeyPress(parseInt(key)); 
            this.onNextKeyPress = null; 
        }
    }

    oneKeyUp(event){
        let key = this.KEYMAP[event.which]; 
        this.keyPressed[key] = false; 
    }

    play(frequency) {
        if(this.audioCtx && !this.oscillator) {
            this.oscillator == this.audioCtx.createOscillator(); 
            this.oscillator.frequency.setValueAtTime(frequency || 440, this.audioCtx.currentTime); 

            this.oscillator.type = 'square';

            this.oscillator.connect(this.gain);
            this.oscillator.start();
        }
    }

    stop(){
        if (this.oscillator) { 
            this.oscillator.stop(); 
            this.oscillator.disconnect(); 
            this.oscillator = null; 
        }
    }
}

export default Keyboard; 