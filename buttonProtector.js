var counter = 0;

function check() {
    try {
        var ThisIsNotUsedLmao = window.crossOriginIsolated
    }
    catch {
        // Use alerts. Remove iframe.
        var child = document.getElementById("osmenu")
        if (child) {
            child.parentElement.removeChild(child);
        }
        return
    }
    document.getElementById("hider").className = "notif"
}

function invalidCounter() {
    counter += 1;
    if (counter == 3) { // Used to be 10
        //document.getElementById("osmenu").contentWindow.targetFunction(hudopen())
        var child = document.getElementById("osmenu")
        if (child) {
            document.getElementById("osmenu").contentWindow.postMessage("0|Hey there, you can't click on this button. Stop trying, it won't get you anywhere.","*")
            document.getElementById("osmenu").className = "osmenu";    
        } else {
            alert("Hey there, you can't click on this button. Stop trying, it won't get you anywhere.");
        }
    } else if (counter == 6) { // 20
        var child = document.getElementById("osmenu")
        if (child) {
            document.getElementById("osmenu").contentWindow.postMessage("0|Please stop. It's not going to do anything, and you might break it.","*")
            document.getElementById("osmenu").className = "osmenu";    
        } else {
            alert("Please stop. It's not going to do anything, and you might break it.");
        }
    } else if (counter == 9) { // 30
        var child = document.getElementById("osmenu")
        if (child) {
            document.getElementById("osmenu").contentWindow.postMessage("0|The button is in immense pain right now. The poor thing is screaming in pain because you keep pressing it, so STOP, you MONSTER!","*")
            document.getElementById("osmenu").className = "osmenu";    
        } else {
            alert("The button is in immense pain right now. The poor thing is screaming in pain because you keep pressing it, so STOP, you MONSTER!");
        }
    } else if (counter == 12) { // 40
        var child = document.getElementById("osmenu")
        if (child) {
            document.getElementById("osmenu").contentWindow.postMessage("0|Alright, I've had enough. I'm going to have to make you leave if you keep doing this.","*")
            document.getElementById("osmenu").className = "osmenu";    
        } else {
            alert("Alright, I've had enough. I'm going to have to make you leave if you keep doing this.");
        }
    } else if (counter >= 15) { // 50
        var child = document.getElementById("osmenu")
        if (child) {
            document.getElementById("osmenu").contentWindow.postMessage("9|You asked for this, and now you are going to be kicked out. Bye bye!","*")
            document.getElementById("osmenu").className = "osmenu";    
        } else {
            alert("You asked for this, and now you are going to be kicked out. Bye bye!");
            document.getElementById("sfx_kick").play()
            setTimeout(() => {
                document.body.remove();
                window.location.replace("http://www.thomasluigi07.com");
            }, 5000);        
        }
    }
}

function openPopup(msg) {
    var child = document.getElementById("osmenu")
    if (child) {
        document.getElementById("osmenu").contentWindow.postMessage("0|" + msg,"*")
        document.getElementById("osmenu").className = "osmenu";    
    } else {
        alert(msg);
    }
}

window.addEventListener(
    "message",
    (event) => {
        if (event.data == "0") {
            document.getElementById("osmenu").className = "osmenuclosed";
        } else if (event.data == "9") {
            document.body.remove();
            window.location.replace("http://www.thomasluigi07.com");
        }
    },
    false,
);

check();