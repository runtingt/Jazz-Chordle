window.addEventListener('load', (event) => {
    let rule_height = document.getElementById('rule').offsetTop;
    let right_icons = document.getElementsByClassName('right-icons');
    let popups = document.getElementsByClassName('popup')

    // Position the buttons in the top right
    for (let i = 0; i < right_icons.length; i++) {
        right_icons[i].style.position = "absolute";
        right_icons[i].style.top = String(rule_height/4)+"px";
        right_icons[i].style.right = String(rule_height*i/1.5)+"px";

        right_icons[i].style.height = String(rule_height/2)+"px";
        right_icons[i].style.width = String(rule_height/2)+"px";

        right_icons[i].style.marginRight = "10px";
    }

    // Centre the popup
    for (let i = 0; i < popups.length; i++) {
        popups[i].style.position = "absolute";
        popups[i].style.top = String(window.innerHeight/2 - popups[i].style.height)+"px"
        popups[i].style.left = String(window.innerWidth/2 - popups[i].style.width)+"px"
    }

    // Add all time score to the popup
    score_popup = document.getElementById("score").innerText = "All time score: " + String(localStorage.getItem("score"))

});

// Show the stats page on popup
document.getElementById("stats").addEventListener("click", popup);
function popup(){
    // Update the popup with the latest score
    if (localStorage.score != undefined){
        score_popup = document.getElementById("score").innerText = "All time score: " + String(localStorage.getItem("score"))
    } else {
        score_popup = document.getElementById("score").innerText = "All time score: 0"
    }
    
    document.getElementById("popup").classList.toggle("show")
}

// Mute sound on popup
document.getElementById("speaker").addEventListener("click", mute);
function mute() {
    // Toggle the svg
    document.getElementById("mute").classList.toggle("hidden")
    document.getElementById("mute").classList.toggle("show")
    muted = !muted
}