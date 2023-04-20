class Speaker {
    constructor(){
        const AudioContext = window.AudioContext(); 
        
        this.audioCtx = new AudioContext(); 

        this.gain = this.audioCtx.createGain(); 
        this.finish = this.audioCtx.destination; 

        this.gain.setValueAtTime(0, this.audioCtx.currentTime); 

        this.gain.setValueAtTime(1, this.audioCtx.currentTime); 

        this.gain.connect(this.finish); 
        
    }
}

export default Speaker; 