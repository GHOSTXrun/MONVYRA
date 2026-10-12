var speed = 70; // speed of wobbling, lower is faster
var height = 3; // height of wobbling in pixels
var alink = ""; // page to link text to (set to ="" for no link)

var wobtxt, wobble, wobcnt = 0;
var wobbleInterval;

// Function to initialize the wobble effect
window.onload = function() {
    if (document.getElementById) {
        var i, wobli;
        wobble = document.getElementById("wobble");
        wobtxt = wobble.firstChild.nodeValue;
        while (wobble.childNodes.length) wobble.removeChild(wobble.childNodes[0]);
        for (i = 0; i < wobtxt.length; i++) {
            wobli = document.createElement("span");
            wobli.setAttribute("id", "wobb" + i);
            wobli.style.position = "relative";
            wobli.appendChild(document.createTextNode(wobtxt.charAt(i)));
            if (alink) {
                wobli.style.cursor = "pointer";
                wobli.onclick = function() { top.location.href = alink; }
            }
            wobble.appendChild(wobli);
        }

        // Add event listeners for mouse enter and leave
        wobble.addEventListener("mouseenter", startWobble);
        wobble.addEventListener("mouseleave", stopWobble);
    }
}

// Function to start wobbling
function startWobble() {
    wobbleInterval = setInterval(wobbler, speed);
}

// Function to stop wobbling
function stopWobble() {
    clearInterval(wobbleInterval);
    wobcnt = 0; // Reset wobble count
}

// Wobble function
function wobbler() {
    for (var i = 0; i < wobtxt.length; i++) {
        document.getElementById("wobb" + i).style.top = Math.round(height * Math.sin(i + wobcnt)) + "px";
    }
    wobcnt++;
}