// Sampler
const sampler = new Tone.Sampler({
    urls: {
        C3: "C3.mp3",
        "D#3": "Ds3.mp3",
        "F#3": "Fs3.mp3",
        A3: "A3.mp3",
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
        C5: "C5.mp3",
        "D#5": "Ds5.mp3",
        "F#5": "Fs5.mp3",
        A5: "A5.mp3",
        C6: "C6.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/"
}).toDestination();

// Log the current time
var start_time = Tone.now()

// Get the piano
const piano = document.getElementById("piano");

// Display a number of keys based on the screen width
window.addEventListener('load', load_piano);
window.addEventListener('resize', load_piano);
function load_piano() {
    keys = piano.children;
    offset = keys[0].getBoundingClientRect().x;
    piano.width.baseVal.value = Math.min(piano.width.baseVal.value, document.documentElement.clientWidth)
    for(let i = 0; i < keys.length; i++) {
        try {
            if(keys[i+1].x.baseVal.value + offset > document.documentElement.clientWidth) {
                keys[i+1].style.display = "none";
            } else {
                keys[i].style.display = "inline";
            }
        } catch (TypeError) {
            break;
        }
    }
}

// Function to play a note
function playSynth(note, duration=0.75) {
    if (Tone.now() > start_time) {
        start_time = Tone.now()
        // console.log("Playing")
        sampler.triggerAttackRelease(note, duration)
    }
}

piano.addEventListener("click", async (e) => {
    if(!muted){
        await Tone.start()
        // Play a note if we meet the time constraints
        playSynth(e.target.id)
    }
});

