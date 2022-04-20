window.addEventListener('load', position);
window.addEventListener('resize', position);
// window.addEventListener("scroll", position);

// Function to reposition/scale elements
function position() {
    let rule_height = document.getElementById('rule').offsetTop;
    let right_icons = document.getElementsByClassName('right-icons');
    let popups = document.getElementsByClassName('popup');

    let page_width = document.body.offsetWidth;
    let page_height = document.body.offsetHeight;

    // Position the buttons in the top right
    // console.log(page_width)
    if(page_width > 750) {
        console.log("big")
        // Position icons
        for (let i = 0; i < right_icons.length; i++) {
            right_icons[i].style.position = "absolute";
            right_icons[i].style.top = String(rule_height/4)+"px";
            right_icons[i].style.right = String(rule_height*i/1.5)+"px";
            right_icons[i].style.left = "";

            right_icons[i].style.height = String(rule_height/2)+"px";
            right_icons[i].style.width = String(rule_height/2)+"px";

            right_icons[i].style.marginRight = "10px";
            right_icons[i].style.marginLeft = "0px";
        }

        // Resize popups
        let popup_texts = document.getElementsByClassName('popuptext');
        // console.log(String(page_width/(2*(0.5*Math.log10(Math.pow(page_width, 5))-6)))+"px")
        for (let i = 0; i < popup_texts.length; i++) {
            if (popup_texts[i].id == "info_popup") {
                popup_texts[i].style.width = String(page_width/(0.5*Math.log10(Math.pow(page_width, 5))-6))+"px";
                popup_texts[i].style.height = "auto";
            } else if (popup_texts[i].id == "score_popup") {
                popup_texts[i].style.width = String(page_width/(2*(0.5*Math.log10(Math.pow(page_width, 5))-6)))+"px";
                popup_texts[i].style.height = String(page_height/17)+"px";
            }
        }

        // Centre the popups
        for (let i = 0; i < popups.length; i++) {
            popups[i].style.position = "absolute";
            popups[i].style.top = String(page_height/2 - popup_texts[i].offsetHeight/2)+"px";
            popups[i].style.left = String(page_width/2 - parseInt(popup_texts[i].style.width)/2)+"px";
        }
        
    } else {
        // console.log("small")
        // Position icons
        for (let i = 0; i < right_icons.length; i++) {
            right_icons[i].style.position = "absolute";
            right_icons[i].style.top = String(rule_height/3)+"px";

            if(i == 0) {
                right_icons[i].style.left = String(rule_height*i/1.5)+"px";
                right_icons[i].style.marginLeft = "10px";
            } else {
                right_icons[i].style.right = String(rule_height*(i-1)/1.5)+"px";
                right_icons[i].style.marginRight = "10px";
            }

            right_icons[i].style.height = String(rule_height/3)+"px";
            right_icons[i].style.width = String(rule_height/3)+"px";

        }

        // Resize popups
        let popup_texts = document.getElementsByClassName('popuptext');
        for (let i = 0; i < popup_texts.length; i++) {
            if (popup_texts[i].id == "info_popup") {
                popup_texts[i].style.width = String(page_width/1)+"px";
                popup_texts[i].style.height = "auto"
                // console.log(popup_texts[i].offsetHeight, screen.availHeight, window.innerHeight)
            } else if (popup_texts[i].id == "score_popup") {
                popup_texts[i].style.width = String(page_width/(0.5*Math.log10(Math.pow(page_width, 5))-6))+"px";
                popup_texts[i].style.height = String(page_height/17)+"px";
            }
        }

        // Centre the popups
        for (let i = 0; i < popups.length; i++) {
            popups[i].style.position = "absolute";
            popups[i].style.top = String(Math.max(page_height/2 - popup_texts[i].offsetHeight/2, 7)) +"px";
            popups[i].style.left = String(Math.max(page_width/2 - parseInt(popup_texts[i].style.width)/2, 0))+"px";
        }
    }

    // Position the close button on how-to
    let close_button = document.getElementById("close");
    close_button.style.height = String(page_height/20)+"px";
    close_button.style.width = String(page_height/20)+"px";

    // Add all time score to the popup
    if (localStorage.score != undefined) {
        score_popup = document.getElementById("score").innerText = "All time score: " + String(localStorage.getItem("score"))
    }

    // Add event listener for closing if user clicks outside
    document.getElementsByTagName("body")[0].addEventListener("click", function(evt) {
        is_outside(evt, "score")
    }, {once : true});

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
    
    // Toggle popup
    document.getElementById("score_popup").classList.toggle("hide");
    document.getElementById("score_popup").classList.toggle("show");

    // Add event listener for closing if user clicks outside
    document.getElementsByTagName("body")[0].addEventListener("click", function(evt) {
        is_outside(evt, "score")
    }, {once : true});
}

// Mute sound when speaker icon is clicked
document.getElementById("speaker").addEventListener("click", mute);
function mute() {
    // Toggle the svg line
    document.getElementById("mute").classList.toggle("hidden");
    document.getElementById("mute").classList.toggle("show");
    muted = !muted
}

// Function to show the how-to popup
async function info_popup() {
    // Toggle popup
    if (document.getElementById("info_popup").style.visibility == "visible") {
        document.getElementById("info_popup").style.opacity = "0"
        await sleep(400) // Make this approx. the transition time (hard-coded (yuck) but only way I can make it work for now)
        document.getElementById("info_popup").style.visibility = "hidden"
    } else if (document.getElementById("info_popup").style.visibility == "hidden"){
        document.getElementById("info_popup").style.opacity = "1"
        document.getElementById("info_popup").style.visibility = "visible"
    }

    // Add event listener for closing if user clicks outside
    document.getElementsByTagName("body")[0].addEventListener("click", function(evt) {
        is_outside(evt, "info")
    }, {once : true});
}

// Show the how to play popup when the info button is clicked and blur the background
document.getElementById("info").addEventListener("click", () => {
    // Blur the background
    document.getElementById("content").classList.toggle("blur");
    // Show popup
    info_popup();
});

// Close the popup when the cross is clicked
document.getElementById("close").addEventListener("click", () => {
    // Blur the background
    document.getElementById("content").classList.toggle("blur");
    // Hide popup
    info_popup();
    // Re-show elements
    position();
});

// Functions to hide popups if the screen is clicked elsewhere
async function is_outside(e, popup_name) {
    // console.log("Looking for: ", popup_name)
    // Check if the element (or its parents) are part of the how-to popup
    is_popup = false;
    el = e.target;
    // console.log(el)
    if (el.classList.contains(popup_name)) {
        is_popup = true;
    } else {
        while (el && el.parentNode) {
            el = el.parentNode;
            try {
                // console.log(el, el.classList.contains(popup_name))
                if (el.classList.contains(popup_name)) {
                    is_popup = true;
                    break;
                  }
            } catch (TypeError) {
                break;
            }
        }
    }
    // console.log(popup_name, is_popup)
    // Hide the popup
    if(!is_popup) {
        // Toggle
        if (popup_name == "info"){
            document.getElementById("content").classList.remove("blur");
            document.getElementById(popup_name+"_popup").style.opacity = "0"
            await sleep(400) // Make this approx. the transition time (hard-coded (yuck) but only way I can make it work for now)
            document.getElementById(popup_name+"_popup").style.visibility = "hidden"
        } else {
            document.getElementById("score_popup").classList.add("hide");
            document.getElementById("score_popup").classList.remove("show");
        }

    } else  { 
        // Allow re-use
        document.getElementsByTagName("body")[0].addEventListener("click", function(evt) {
            is_outside(evt, popup_name)
        }, {once : true});
    }
}
