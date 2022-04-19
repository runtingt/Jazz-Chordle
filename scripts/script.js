window.addEventListener('load', position);
window.addEventListener('resize', position)

// Function to reposition/scale elements
function position() {
    let rule_height = document.getElementById('rule').offsetTop;
    let right_icons = document.getElementsByClassName('right-icons');
    let popups = document.getElementsByClassName('popup');

    let page_width = document.body.offsetWidth;
    let page_height = document.body.offsetHeight

    // Position the buttons in the top right
    for (let i = 0; i < right_icons.length; i++) {
        right_icons[i].style.position = "absolute";
        right_icons[i].style.top = String(rule_height/4)+"px";
        right_icons[i].style.right = String(rule_height*i/1.5)+"px";

        right_icons[i].style.height = String(rule_height/2)+"px";
        right_icons[i].style.width = String(rule_height/2)+"px";

        right_icons[i].style.marginRight = "10px";
    }

    // Resize the popups
    let popup_texts = document.getElementsByClassName('popuptext');
    for (let i = 0; i < popup_texts.length; i++) {
        if (popup_texts[i].id == "info_popup") {
            popup_texts[i].style.width = String(document.body.offsetWidth/1.9)+"px";
            popup_texts[i].style.height = String(document.body.offsetHeight/1.5)+"px";
        } else if (popup_texts[i].id == "score_popup") {
            popup_texts[i].style.width = String(document.body.offsetWidth/5)+"px";
            popup_texts[i].style.height = String(document.body.offsetHeight/17)+"px";
        }
    }

    // Centre the popups
    for (let i = 0; i < popups.length; i++) {
        popups[i].style.position = "absolute";
        popups[i].style.top = String(page_height/2 - parseInt(popup_texts[i].style.height)/2)+"px";
        popups[i].style.left = String(page_width/2 - parseInt(popup_texts[i].style.width)/2)+"px";
    }

    // Add all time score to the popup
    score_popup = document.getElementById("score").innerText = "All time score: " + String(localStorage.getItem("score"))

};

// Show the stats page on popup
document.getElementById("stats").addEventListener("click", score_popup);
function score_popup(){
    // Update the popup with the latest score
    if (localStorage.score != undefined){
        score_popup = document.getElementById("score").innerText = "All time score: " + String(localStorage.getItem("score"));
    } else {
        score_popup = document.getElementById("score").innerText = "All time score: 0";
    }
    
    document.getElementById("score_popup").classList.toggle("show");
}

// Mute sound when speaker icon is clicked
document.getElementById("speaker").addEventListener("click", mute);
function mute() {
    // Toggle the svg line
    document.getElementById("mute").classList.toggle("hidden");
    document.getElementById("mute").classList.toggle("show");
    muted = !muted
}

// Show the how to play popup when the info button is clicked
document.getElementById("info").addEventListener("click", info_popup);
function info_popup() {
    // Show the popup
    document.getElementById("info_popup").classList.toggle("show")
}
