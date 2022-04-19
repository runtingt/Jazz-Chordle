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

