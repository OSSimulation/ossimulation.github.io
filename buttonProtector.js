var propertyDamage = 0;
var dontEvenBother = true; // Don't you love a browser check not even functioning? It turns out anyways I DIDN'T EVEN CHECK IF THE PAGE WAS LOADED ORIGINALLY. I should be banned from programming.

function compatCheck(debug) {
    try {
        var ThisIsNotUsedLmao = window.crossOriginIsolated;
        dontEvenBother = false;
    }
    catch (error) {
        // Use alerts. Remove iframe.
    }

    if (debug == true) {
        dontEvenBother = true;
        console.log("Not bothering at all anymore!");
    }
    //document.getElementById("hider").className = "notif"
}

function openTryMe() {
    if (!dontEvenBother) {
        document.getElementById("osmenu").contentWindow.postMessage("0|This is a placeholder!","*")
        document.getElementById("osmenu").className = "osmenu";
    } else {
        alert("Sorry, but your browser doesn't seem to support the OS Menu.");
    }
}

function invalidCounter() {
    propertyDamage += 1;
    if (propertyDamage == 3) { // Used to be 10
        //document.getElementById("osmenu").contentWindow.targetFunction(hudopen())
        if (!dontEvenBother) {
            document.getElementById("osmenu").contentWindow.postMessage("0|Hey there, you can't click on this button. Stop trying, it won't get you anywhere.","*")
            document.getElementById("osmenu").className = "osmenu";
        } else {
            alert("Hey there, you can't click on this button. Stop trying, it won't get you anywhere.");
        }
    } else if (propertyDamage == 6) { // 20
        if (!dontEvenBother) {
            document.getElementById("osmenu").contentWindow.postMessage("0|Please stop. It's not going to do anything, and you might break it.","*")
            document.getElementById("osmenu").className = "osmenu";
        } else {
            alert("Please stop. It's not going to do anything, and you might break it.");
        }
    } else if (propertyDamage == 9) { // 30
        if (!dontEvenBother) {
            document.getElementById("osmenu").contentWindow.postMessage("0|The button is in immense pain right now. The poor thing is screaming in pain because you keep pressing it, so STOP, you MONSTER!","*")
            document.getElementById("osmenu").className = "osmenu";
        } else {
            alert("The button is in immense pain right now. The poor thing is screaming in pain because you keep pressing it, so STOP, you MONSTER!");
        }
    } else if (propertyDamage == 12) { // 40
        if (!dontEvenBother) {
            document.getElementById("osmenu").contentWindow.postMessage("0|Alright, I've had enough. I'm going to have to make you leave if you keep doing this.","*")
            document.getElementById("osmenu").className = "osmenu";
        } else {
            alert("Alright, I've had enough. I'm going to have to make you leave if you keep doing this.");
        }
    } else if (propertyDamage >= 15) { // 50
        if (!dontEvenBother) {
            document.getElementById("osmenu").contentWindow.postMessage("9|You asked for this, and now you are going to be kicked out. Bye bye!","*")
            document.getElementById("osmenu").className = "osmenu";
        } else {
            alert("You asked for this, and now you are going to be kicked out. Bye bye!");
            setTimeout(function() {
                document.body.remove();
                window.location.replace("http://www.thomasluigi07.com");
            }, 5000);
            document.getElementById("sfx_kick").play();
        }
    }
}

function customAlert(msg) {
    if (!dontEvenBother) {
        document.getElementById("osmenu").contentWindow.postMessage("0|" + msg,"*")
        document.getElementById("osmenu").className = "osmenu";
    } else {
        alert(msg);
    }
}

compatCheck();

if (!dontEvenBother) {
    window.addEventListener(
        "message",
        (event) => {
            try {
                if (event.data == "0") {
                    document.getElementById("osmenu").className = "osmenuclosed";
                } else if (event.data == "9") {
                    document.body.remove();
                    window.location.replace("http://www.thomasluigi07.com");
                }
            } catch (e) {
                console.log("Couldn't use event.data");
            }
        },
        false,
    );
}

window.addEventListener('DOMContentLoaded', () => {
    compatCheck(); // Looks like I COMPLETELY FORGOT TO CHECK IF THE PAGE LOADED FIRST. Whoops!!!!
});

window.invalidCounter = invalidCounter;
window.customAlert = customAlert;
window.openTryMe = openTryMe;
window.compatCheck = compatCheck;
window.propertyDamage = propertyDamage;
window.dontEvenBother = dontEvenBother;
