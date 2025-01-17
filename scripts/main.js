guesses = [
	[],
	[],
	[],
	[],
	[]
];

answers = [
	['C4', 'E4', 'G4', 'C5'],
	['E3', 'G3', 'C4', 'E4'],
	['G3', 'C4', 'E4', 'G4'],
	['Db3', 'F3', 'Ab3', 'Db4'],
	['F3', 'Ab3', 'Db4', 'F4'],
	['Ab3', 'Db4', 'F4', 'Ab4'],
	['D3', 'F#3', 'Ab3', 'D4'],
	['F#3', 'Ab3', 'D4', 'F#4'],
	['Ab3', 'D4', 'F#4', 'Ab4'],
	['Eb3', 'G3', 'Bb3', 'Eb4'],
	['G3', 'Bb3', 'Eb4', 'G4'],
	['Bb3', 'Eb4', 'G4', 'Bb4'],
	['E3', 'G#3', 'B3', 'E4'],
	['G#3', 'B3', 'E4', 'G#4'],
	['B3', 'E4', 'G#4', 'B4'],
	['F3', 'A3', 'C4', 'F4'],
	['A3', 'C4', 'F4', 'A4'],
	['C4', 'F4', 'A4', 'C5'],
	['Gb3', 'Bb3', 'Db4', 'Gb4'],
	['Bb3', 'Db4', 'Gb4', 'Bb4'],
	['Db3', 'Gb3', 'Bb3', 'Db4'],
	['G3', 'B3', 'D4', 'G4'],
	['B3', 'D4', 'G4', 'B4'],
	['D3', 'G3', 'B3', 'D4'],
	['Ab3', 'C4', 'Eb4', 'Ab4'],
	['C4', 'Eb4', 'Ab4', 'C5'],
	['Eb3', 'Ab3', 'C4', 'Eb4'],
	['A3', 'C#4', 'E4', 'A4'],
	['C#3', 'E3', 'A3', 'C#4'],
	['E3', 'A3', 'C#4', 'E4'],
	['Bb3', 'D4', 'F4', 'Bb4'],
	['D3', 'F3', 'Bb3', 'D4'],
	['F3', 'Bb3', 'D4', 'F4'],
	['B3', 'D#4', 'F#4', 'B4'],
	['D#3', 'F#3', 'B3', 'D#4'],
	['F#3', 'B3', 'D#4', 'F#4'],
	['C4', 'Eb4', 'G4', 'C5'],
	['Eb3', 'G3', 'C4', 'Eb4'],
	['G3', 'C4', 'Eb4', 'G4'],
	['Db3', 'E3', 'Ab3', 'Db4'],
	['E3', 'Ab3', 'Db4', 'E4'],
	['Ab3', 'Db4', 'E4', 'Ab4'],
	['D3', 'F3', 'Ab3', 'D4'],
	['F3', 'Ab3', 'D4', 'F4'],
	['Ab3', 'D4', 'F4', 'Ab4'],
	['Eb3', 'Gb3', 'Bb3', 'Eb4'],
	['Gb3', 'Bb3', 'Eb4', 'Gb4'],
	['Bb3', 'Eb4', 'Gb4', 'Bb4'],
	['E3', 'G3', 'B3', 'E4'],
	['G3', 'B3', 'E4', 'G4'],
	['B3', 'E4', 'G4', 'B4'],
	['F3', 'Ab3', 'C4', 'F4'],
	['Ab3', 'C4', 'F4', 'Ab4'],
	['C4', 'F4', 'Ab4', 'C5'],
	['Gb3', 'A3', 'Db4', 'Gb4'],
	['A3', 'Db4', 'Gb4', 'A4'],
	['Db3', 'Gb3', 'A3', 'Db4'],
	['G3', 'Bb3', 'D4', 'G4'],
	['Bb3', 'D4', 'G4', 'Bb4'],
	['D3', 'G3', 'Bb3', 'D4'],
	['Ab3', 'B3', 'Eb4', 'Ab4'],
	['B3', 'Eb4', 'Ab4', 'B4'],
	['Eb3', 'Ab3', 'B3', 'Eb4'],
	['A3', 'C4', 'E4', 'A4'],
	['C4', 'E4', 'A4', 'C5'],
	['E3', 'A3', 'C4', 'E4'],
	['Bb3', 'Db4', 'F4', 'Bb4'],
	['Db3', 'F3', 'Bb3', 'Db4'],
	['F3', 'Bb3', 'Db4', 'F4'],
	['B3', 'D4', 'F#4', 'B4'],
	['D3', 'F#3', 'B3', 'D4'],
	['F#3', 'B3', 'D4', 'F#4'],
	['C4', 'E4', 'G#4', 'C5'],
	['E3', 'G#3', 'C4', 'E4'],
	['G#3', 'C4', 'E4', 'G#4'],
	['Db3', 'F3', 'A3', 'Db4'],
	['F3', 'A3', 'Db4', 'F4'],
	['A3', 'Db4', 'F4', 'A4'],
	['D3', 'F#3', 'Bb3', 'D4'],
	['F#3', 'Bb3', 'D4', 'F#4'],
	['Bb3', 'D4', 'F#4', 'Bb4'],
	['Eb3', 'G3', 'B3', 'Eb4'],
	['G3', 'B3', 'Eb4', 'G4'],
	['B3', 'Eb4', 'G4', 'B4'],
	['E3', 'G#3', 'C4', 'E4'],
	['G#3', 'C4', 'E4', 'G#4'],
	['C4', 'E4', 'G#4', 'C5'],
	['F3', 'A3', 'C#4', 'F4'],
	['A3', 'C#4', 'F4', 'A4'],
	['C#3', 'F3', 'A3', 'C#4'],
	['Gb3', 'Bb3', 'D4', 'Gb4'],
	['Bb3', 'D4', 'Gb4', 'Bb4'],
	['D3', 'Gb3', 'Bb3', 'D4'],
	['G3', 'B3', 'D#4', 'G4'],
	['B3', 'D#4', 'G4', 'B4'],
	['D#3', 'G3', 'B3', 'D#4'],
	['Ab3', 'C4', 'F4', 'Ab4'],
	['C4', 'F4', 'Ab4', 'C5'],
	['F3', 'Ab3', 'C4', 'F4'],
	['A3', 'C#4', 'F4', 'A4'],
	['C#3', 'F3', 'A3', 'C#4'],
	['F3', 'A3', 'C#4', 'F4'],
	['Bb3', 'D4', 'Gb4', 'Bb4'],
	['D3', 'Gb3', 'Bb3', 'D4'],
	['Gb3', 'Bb3', 'D4', 'Gb4'],
	['B3', 'D#4', 'G4', 'B4'],
	['D#3', 'G3', 'B3', 'D#4'],
	['G3', 'B3', 'D#4', 'G4'],
	['C4', 'E4', 'G4', 'Bb4'],
	['E3', 'G3', 'Bb3', 'C4'],
	['G3', 'Bb3', 'C4', 'E4'],
	['Bb3', 'C4', 'E4', 'G4'],
	['Db3', 'F3', 'Ab3', 'B3'],
	['F3', 'Ab3', 'B3', 'Db4'],
	['Ab3', 'B3', 'Db4', 'F4'],
	['B3', 'Db4', 'F4', 'Ab4'],
	['D3', 'F#3', 'Ab3', 'C4'],
	['F#3', 'Ab3', 'C4', 'D4'],
	['Ab3', 'C4', 'D4', 'F#4'],
	['C4', 'D4', 'F#4', 'Ab4'],
	['Eb3', 'G3', 'Bb3', 'Db4'],
	['G3', 'Bb3', 'Db4', 'Eb4'],
	['Bb3', 'Db4', 'Eb4', 'G4'],
	['Db3', 'Eb3', 'G3', 'Bb3'],
	['E3', 'G#3', 'B3', 'D4'],
	['G#3', 'B3', 'D4', 'E4'],
	['B3', 'D4', 'E4', 'G#4'],
	['D3', 'E3', 'G#3', 'B3'],
	['F3', 'A3', 'C4', 'Eb4'],
	['A3', 'C4', 'Eb4', 'F4'],
	['C4', 'Eb4', 'F4', 'A4'],
	['Eb3', 'F3', 'A3', 'C4'],
	['Gb3', 'Bb3', 'Db4', 'E4'],
	['Bb3', 'Db4', 'E4', 'Gb4'],
	['Db3', 'E3', 'Gb3', 'Bb3'],
	['E3', 'Gb3', 'Bb3', 'Db4'],
	['G3', 'B3', 'D4', 'F4'],
	['B3', 'D4', 'F4', 'G4'],
	['D3', 'F3', 'G3', 'B3'],
	['F3', 'G3', 'B3', 'D4'],
	['Ab3', 'C4', 'Eb4', 'F#4'],
	['C4', 'Eb4', 'F#4', 'Ab4'],
	['Eb3', 'F#3', 'Ab3', 'C4'],
	['F#3', 'Ab3', 'C4', 'Eb4'],
	['A3', 'C#4', 'E4', 'G4'],
	['C#3', 'E3', 'G3', 'A3'],
	['E3', 'G3', 'A3', 'C#4'],
	['G3', 'A3', 'C#4', 'E4'],
	['Bb3', 'D4', 'F4', 'Ab4'],
	['D3', 'F3', 'Ab3', 'Bb3'],
	['F3', 'Ab3', 'Bb3', 'D4'],
	['Ab3', 'Bb3', 'D4', 'F4'],
	['B3', 'D#4', 'F#4', 'A4'],
	['D#3', 'F#3', 'A3', 'B3'],
	['F#3', 'A3', 'B3', 'D#4'],
	['A3', 'B3', 'D#4', 'F#4'],
	['C4', 'Eb4', 'G4', 'Bb4'],
	['Eb3', 'G3', 'Bb3', 'C4'],
	['G3', 'Bb3', 'C4', 'Eb4'],
	['Bb3', 'C4', 'Eb4', 'G4'],
	['Db3', 'E3', 'Ab3', 'B3'],
	['E3', 'Ab3', 'B3', 'Db4'],
	['Ab3', 'B3', 'Db4', 'E4'],
	['B3', 'Db4', 'E4', 'Ab4'],
	['D3', 'F3', 'Ab3', 'C4'],
	['F3', 'Ab3', 'C4', 'D4'],
	['Ab3', 'C4', 'D4', 'F4'],
	['C4', 'D4', 'F4', 'Ab4'],
	['Eb3', 'Gb3', 'Bb3', 'Db4'],
	['Gb3', 'Bb3', 'Db4', 'Eb4'],
	['Bb3', 'Db4', 'Eb4', 'Gb4'],
	['Db3', 'Eb3', 'Gb3', 'Bb3'],
	['E3', 'G3', 'B3', 'D4'],
	['G3', 'B3', 'D4', 'E4'],
	['B3', 'D4', 'E4', 'G4'],
	['D3', 'E3', 'G3', 'B3'],
	['F3', 'Ab3', 'C4', 'Eb4'],
	['Ab3', 'C4', 'Eb4', 'F4'],
	['C4', 'Eb4', 'F4', 'Ab4'],
	['Eb3', 'F3', 'Ab3', 'C4'],
	['Gb3', 'A3', 'Db4', 'E4'],
	['A3', 'Db4', 'E4', 'Gb4'],
	['Db3', 'E3', 'Gb3', 'A3'],
	['E3', 'Gb3', 'A3', 'Db4'],
	['G3', 'Bb3', 'D4', 'F4'],
	['Bb3', 'D4', 'F4', 'G4'],
	['D3', 'F3', 'G3', 'Bb3'],
	['F3', 'G3', 'Bb3', 'D4'],
	['Ab3', 'B3', 'Eb4', 'F#4'],
	['B3', 'Eb4', 'F#4', 'Ab4'],
	['Eb3', 'F#3', 'Ab3', 'B3'],
	['F#3', 'Ab3', 'B3', 'Eb4'],
	['A3', 'C4', 'E4', 'G4'],
	['C4', 'E4', 'G4', 'A4'],
	['E3', 'G3', 'A3', 'C4'],
	['G3', 'A3', 'C4', 'E4'],
	['Bb3', 'Db4', 'F4', 'Ab4'],
	['Db3', 'F3', 'Ab3', 'Bb3'],
	['F3', 'Ab3', 'Bb3', 'Db4'],
	['Ab3', 'Bb3', 'Db4', 'F4'],
	['B3', 'D4', 'F#4', 'A4'],
	['D3', 'F#3', 'A3', 'B3'],
	['F#3', 'A3', 'B3', 'D4'],
	['A3', 'B3', 'D4', 'F#4']
];

labels = [
	'Cmaj',
	'Cmaj',
	'Cmaj',
	'Dbmaj',
	'Dbmaj',
	'Dbmaj',
	'Dmaj',
	'Dmaj',
	'Dmaj',
	'Ebmaj',
	'Ebmaj',
	'Ebmaj',
	'Emaj',
	'Emaj',
	'Emaj',
	'Fmaj',
	'Fmaj',
	'Fmaj',
	'Gbmaj',
	'Gbmaj',
	'Gbmaj',
	'Gmaj',
	'Gmaj',
	'Gmaj',
	'Abmaj',
	'Abmaj',
	'Abmaj',
	'Amaj',
	'Amaj',
	'Amaj',
	'Bbmaj',
	'Bbmaj',
	'Bbmaj',
	'Bmaj',
	'Bmaj',
	'Bmaj',
	'Cmin',
	'Cmin',
	'Cmin',
	'Dbmin',
	'Dbmin',
	'Dbmin',
	'Dmin',
	'Dmin',
	'Dmin',
	'Ebmin',
	'Ebmin',
	'Ebmin',
	'Emin',
	'Emin',
	'Emin',
	'Fmin',
	'Abaug',
	'Fmin',
	'Abaug',
	'Fmin',
	'Abaug',
	'Gbmin',
	'Gbmin',
	'Gbmin',
	'Gmin',
	'Gmin',
	'Gmin',
	'Abmin',
	'Abmin',
	'Abmin',
	'Amin',
	'Amin',
	'Amin',
	'Bbmin',
	'Bbmin',
	'Bbmin',
	'Bmin',
	'Bmin',
	'Bmin',
	'Caug',
	'Eaug',
	'Caug',
	'Eaug',
	'Caug',
	'Eaug',
	'Dbaug',
	'Dbaug',
	'Dbaug',
	'Daug',
	'Daug',
	'Daug',
	'Ebaug',
	'Ebaug',
	'Ebaug',
	'Caug',
	'Eaug',
	'Caug',
	'Eaug',
	'Caug',
	'Eaug',
	'Faug',
	'Aaug',
	'Faug',
	'Aaug',
	'Faug',
	'Aaug',
	'Gbaug',
	'Bbaug',
	'Gbaug',
	'Bbaug',
	'Gbaug',
	'Bbaug',
	'Gaug',
	'Baug',
	'Gaug',
	'Baug',
	'Gaug',
	'Baug',
	'Fmin',
	'Abaug',
	'Fmin',
	'Abaug',
	'Fmin',
	'Abaug',
	'Faug',
	'Aaug',
	'Faug',
	'Aaug',
	'Faug',
	'Aaug',
	'Gbaug',
	'Bbaug',
	'Gbaug',
	'Bbaug',
	'Gbaug',
	'Bbaug',
	'Gaug',
	'Baug',
	'Gaug',
	'Baug',
	'Gaug',
	'Baug',
	'Cmaj7',
	'Cmaj7',
	'Cmaj7',
	'Cmaj7',
	'Dbmaj7',
	'Dbmaj7',
	'Dbmaj7',
	'Dbmaj7',
	'Dmaj7',
	'Dmaj7',
	'Dmaj7',
	'Dmaj7',
	'Ebmaj7',
	'Ebmaj7',
	'Ebmaj7',
	'Ebmaj7',
	'Emaj7',
	'Emaj7',
	'Emaj7',
	'Emaj7',
	'Fmaj7',
	'Fmaj7',
	'Fmaj7',
	'Fmaj7',
	'Gbmaj7',
	'Gbmaj7',
	'Gbmaj7',
	'Gbmaj7',
	'Gmaj7',
	'Gmaj7',
	'Gmaj7',
	'Gmaj7',
	'Abmaj7',
	'Abmaj7',
	'Abmaj7',
	'Abmaj7',
	'Amaj7',
	'Amaj7',
	'Amaj7',
	'Amaj7',
	'Bbmaj7',
	'Bbmaj7',
	'Bbmaj7',
	'Bbmaj7',
	'Bmaj7',
	'Bmaj7',
	'Bmaj7',
	'Bmaj7',
	'Cmin7',
	'Cmin7',
	'Cmin7',
	'Cmin7',
	'Dbmin7',
	'Dbmin7',
	'Dbmin7',
	'Dbmin7',
	'Dmin7',
	'Dmin7',
	'Dmin7',
	'Dmin7',
	'Ebmin7',
	'Ebmin7',
	'Ebmin7',
	'Ebmin7',
	'Emin7',
	'Emin7',
	'Emin7',
	'Emin7',
	'Fmin7',
	'Fmin7',
	'Fmin7',
	'Fmin7',
	'Gbmin7',
	'Gbmin7',
	'Gbmin7',
	'Gbmin7',
	'Gmin7',
	'Gmin7',
	'Gmin7',
	'Gmin7',
	'Abmin7',
	'Abmin7',
	'Abmin7',
	'Abmin7',
	'Amin7',
	'Amin7',
	'Amin7',
	'Amin7',
	'Bbmin7',
	'Bbmin7',
	'Bbmin7',
	'Bbmin7',
	'Bmin7',
	'Bmin7',
	'Bmin7',
	'Bmin7'
];

enharmonics = ['C#/Db',	'D#/Eb', 'F#/Gb', 'G#/Ab', 'A#/Bb'];
enharmonics_list = ["C#", "Db", "D#", "Eb", "F#", "Gb", "G#", "Ab", "A#", "Bb"]

var x = 0;
var y = 0;
var currentAnswer = Math.floor(Math.random() * answers.length);
console.log(currentAnswer, answers[currentAnswer])
var muted = false;
var COLUMNS = 4;

var colorCorrect = '#6aaa64';
var colorRightOctave = '#c9b458';
var colorRightPosition = '#44A3A3';
var colorWrong = '#e88787';

// If not visited before, display the how to play screen
window.addEventListener('load', () => {
	if (localStorage.visited == undefined) {
		// Blur the background
		document.getElementById("content").classList.toggle("blur");
		// Show popup
		document.getElementById("info_popup").style.visibility = "hidden";
		info_popup();

		localStorage.visited = "true";
	} else {
		// Show popup
		document.getElementById("info_popup").style.visibility = "hidden";
	}
	// document.getElementById("score_popup").classList.toggle("show");
});

// create onclicklistener for every element with the class 'key'
document.querySelectorAll('.key').forEach(item => {
  item.addEventListener('click', (elem) => {
	var t = elem.target;
	
	// if not out of bounds 
	if (x != COLUMNS){
		//console.log("clicked by " + t.id);
		guesses[y].push(t.id.split(" ")[0]);
		//console.log((y + 1) + '-' + (x + 1))
		document.getElementById((y + 1) + '-' + (x + 1)).innerText=t.id.split(" ")[0];
		x++;	
	}

  })
})

// Add event listener on keydown
document.addEventListener('keydown', (event) => {
var name = event.key;
	var code = event.code;
	if (name === 'Backspace') {
		backspace();
		return;
	}
}, false);

// Add backspace button functionality
document.getElementById("backspace").addEventListener("click", backspace);
function backspace(){
	// if not out of bounds
	if(x != 0){
		//console.log(guesses, y, guesses[y])
		guesses[y].pop();
		x--;
		document.getElementById((y + 1) + '-' + (x + 1)).innerText="";
	}
}

// Function to convert a note to its enharmonic
function get_enharmonic(note) {
	note_no_octave = note.replace(/\d/g,'')
	octave = note.charAt(note.length - 1)
	if (enharmonics_list.includes(note_no_octave)) {
		if(note_no_octave.charAt(note_no_octave.length - 1) == '#') {
			// If it's a sharp, go forward in the list
			enharmonic_pair = enharmonics_list[enharmonics_list.indexOf(note_no_octave) + 1]
		} else {
			// Else go backwards	
			enharmonic_pair = enharmonics_list[enharmonics_list.indexOf(note_no_octave) - 1]
		}
	} else {
		enharmonic_pair = note_no_octave
	}
		return enharmonic_pair+octave
}

// Submit a guess
document.getElementById("submit").addEventListener("click", submit);
function submit(){
	// valid guess must have all notes filled
	if(x == COLUMNS){
		// Get the name of the notes without the octave
		answerNoteNames = answers[currentAnswer].map(string => string.slice(0, -1));

		var num_correct = 0
		for (let i = 0; i < COLUMNS; i++) {
			var currentNote = guesses[y][i];
			//console.log(currentNote)
			var currentNoteName = currentNote.slice(0, -1);
			var noteGuessBox = document.getElementById((y + 1) + '-' + (i + 1));

			// if right note and right position (green)
			if(currentNote == answers[currentAnswer][i] || get_enharmonic(currentNote) == answers[currentAnswer][i]){
			  	noteGuessBox.style.background=colorCorrect;
				if (document.getElementById(currentNote)) {
					document.getElementById(currentNote + " dot").style.fill = colorCorrect;
			  	} else {
					document.getElementById(get_flipped(currentNote) + " dot").style.fill = colorCorrect;
				}
				num_correct += 1			  
			} 
			// if right note but wrong position (yellow)
			else if(answers[currentAnswer].includes(currentNote) || answers[currentAnswer].includes(get_enharmonic(currentNote))){
				noteGuessBox.style.background = colorRightOctave;
				if (document.getElementById(currentNote)) {
					document.getElementById(currentNote + " dot").style.fill = colorRightOctave;
			  	} else {
					document.getElementById(get_flipped(currentNote) + " dot").style.fill = colorRightOctave;
				}
			} 
			// if right note but wrong octave (blue)
			else if(answerNoteNames.includes(currentNoteName) || answerNoteNames.includes(get_enharmonic(currentNote).replace(/\d/g,''))){
				noteGuessBox.style.background = colorRightPosition;
				if (document.getElementById(currentNote)) {
					document.getElementById(currentNote + " dot").style.fill = colorRightPosition;
			  	} else {
					document.getElementById(get_flipped(currentNote) + " dot").style.fill = colorRightPosition;
				}
			}
			// note is not in the chord
			else{
				noteGuessBox.style.background = colorWrong;
				if (document.getElementById(currentNote)) {
					document.getElementById(currentNote + " dot").style.fill = colorWrong;
			  	} else {
					document.getElementById(get_flipped(currentNote) + " dot").style.fill = colorWrong;
				}

				// Colour the rest of the notes wrong
				keys = document.getElementsByClassName(currentNoteName);
				Array.prototype.forEach.call(keys, function(key) {
					if(key.tagName == "circle") {
						key.style.fill = colorWrong;
					}
				});
			}
		}
		
		// if all correct
		if(num_correct == COLUMNS){
			win();
		}
		x = 0;
		y++;
		
		// Display the chord on screen if not guessed in time
		if(y == guesses.length && guesses[y-1].toString() != answers[currentAnswer].toString() && num_correct != COLUMNS) {
			lose()
		}
	}
}

// Display the correct answer if not found
function lose() {
	document.getElementById("solution").style.display = "inline-block"
	document.getElementById("solution-text").innerText = "The correct answer was " + labels[currentAnswer] + ": " + answers[currentAnswer]
}

// Sleep for a specified time
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Show a popup and play the chord if win
async function win(){
	if(!muted) {
		// Play each note in the chord
		for (let i = 0; i < answers[currentAnswer].length; i++) {
			playSynth(answers[currentAnswer][i]);
			await sleep(300);
		}
		// Play the whole chord
		await sleep(500)
		playSynth(answers[currentAnswer], duration=1.5);
	}
	
	// Add a message to the popup
	document.getElementById("results").innerText = "Congratulations! This is: " + labels[currentAnswer]

	// Increment the score by one
	if (localStorage.score != undefined) {
		localStorage.score = String(parseInt(localStorage.getItem("score")) + 1);
	} else {
		localStorage.setItem("score", "1");
	}
	
	// Show popup
	score_popup();

}

document.getElementById("flip").addEventListener("click", flip);
function flip(){
	var note = document.getElementById((y + 1) + '-' + (x)).innerText;
	// ex: note = Ab4 -> noteName = Ab; octave = 4;
	var noteName = note.slice(0, -1);
	var octave = note.charAt(note.length - 1);
	var result = [];
	//console.log(note)
	
	// find noteName and change text to its enharmonic note name
	for(var i = 0, len = enharmonics.length; i < len; i++) {
		if(enharmonics[i].includes(noteName)) {
			result = enharmonics[i].split('/');
			break;
		}
	}
	//console.log(guesses)
	if (result[0] == noteName){
		document.getElementById((y + 1) + '-' + (x)).innerText = result[1] + octave;
		guesses[y][x-1] = result[1] + octave;
		//console.log("True", result[1] + octave)
	}
	else if (result[1] == noteName) {
		document.getElementById((y + 1) + '-' + (x)).innerText = result[0] + octave;
		guesses[y][x-1] = result[0] + octave;
		//console.log("False", result[0] + octave)
	}
	//console.log(guesses)
}

// Get the enharmonic of the passed note
function get_flipped(note) {
	var noteName = note.slice(0, -1);
	var octave = note.charAt(note.length - 1);
	var result = [];

		// find noteName and change text to its enharmonic note name
		for(var i = 0, len = enharmonics.length; i < len; i++) {
			if(enharmonics[i].includes(noteName)) {
				result = enharmonics[i].split('/');
				break;
			}
		}
		//console.log(guesses)
		if (result[0] == noteName){
			return result[1] + octave
		}
		else {
			return result[1] + octave
		}
		//console.log(guesses)
}
