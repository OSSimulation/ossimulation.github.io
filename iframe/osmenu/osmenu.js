// OS MENU : Now in JS!!! Holy Shit I hate Java Script
// Reused code from the XBOX 360 iframe because I AM LAZY
//
// OS Menu v2 (HTML version), Thomasluigi07 2024 (this is a reference to the old os menu main script haha only real os simulation fans will get this one....)
//
// Check for newer browsers. This is used to make sure older browsers can view the webpage... NOT!
function check() {
    try {
        var ThisIsNotUsedLmao = window.crossOriginIsolated
    }
    catch {
        return // Use non-existent non-interactive version. Why? Because I'm LAAAAZY!!!
    }
    // document.getElementById("hider").className = "notif"
}

function hider(){
    document.getElementById("hider").className = "invisible";
    hudopen();
}

function movesound(){
    try {
        document.getElementById('sfx_move').currentTime=0;
        document.getElementById('sfx_move').play();
    }
    catch { // Don't want the browser complaining and saying "uhh we killed the javascript because we dont know what the fuck a sound is"
        console.warn("Couldn't play move sound!");
    }
}

function selectsound(){
    try {
        document.getElementById('sfx_ok').currentTime=0;
        document.getElementById('sfx_ok').play();
    }
    catch { // See above
        console.warn("Couldn't play select sound!");
    }
}

function backsound(){
    try {
        document.getElementById('sfx_cancel').currentTime=0;
        document.getElementById('sfx_cancel').play();
    }
    catch { // This tounge-in-cheek documentation is brought to you by... NO-ONE. That's right. Nobody. Too bad!
        console.warn("Couldn't play back sound!");
    }
}

function opensound(){ // Used only once in the whole code but WHO CARES.
    try {
        document.getElementById('sfx_HUDopen').currentTime=0;
        document.getElementById('sfx_HUDopen').play();
    }
    catch { // ...
        console.warn("Couldn't play HUD open sound!");
    }
}

function closesound(){ // See above, AGAIN.
    try {
        document.getElementById('sfx_HUDclose').currentTime=0;
        document.getElementById('sfx_HUDclose').play();
    }
    catch { // I wonder if anyone is actually even reading these stupid comments?
        console.warn("Couldn't play HUD open sound!");
    }
}

function hudopen(){
    opensound();
    document.getElementById('hud').className = 'hudin';
    document.getElementById('hudbg').className = 'hudbg';
    document.getElementById('hudaspect').className = 'hudaspect';
    setTimeout(function(){
        // I hate this fucktion. WHY CAN I NOT WAIT WITHOUT LOCKING THE THREAD.
        // The timeout is also even SHORTER than the animation because otherwise it resets for NO FUCKING reason.
        document.getElementById('hud').className = 'hud';
        document.getElementById('backbtn').className = 'backbtn'
    }, 190);
}

function hudclose(){
    backsound(); // This literally only functions as a custom alert() so who needs a proper OS Menu?
    closesound();
    document.getElementById('hud').className = 'hudout';
    document.getElementById('backbtn').className = 'invisible'
    setTimeout(function(){
        document.getElementById('hud').className = 'invisible';
        document.getElementById('hudbg').className = 'invisible';
        document.getElementById('hudaspect').className = 'invisible';
        //check();
        window.parent.postMessage("0","*")
    }, 190);
}

window.addEventListener( // You can probably hook into this if you embed the OS Menu into your own site! (for some reason...)
    "message",
    (event) => {
        if (Array.from(event.data)[0] == "0") {
            hudopen();
            document.getElementById('text').innerText = event.data.substring(2);
        } else if (Array.from(event.data)[0] == "1") {
            hudclose();
            document.getElementById('text').innerText = event.data.substring(2);
        } else if (Array.from(event.data)[0] == "9") {
            hudopen();
            document.getElementById('text').innerText = event.data.substring(2);
            setTimeout(function(){
                document.getElementById('backbtn').className = 'invisible'
            }, 195);   
            setTimeout(function(){
                document.getElementById('sfx_kick').currentTime=0;
                document.getElementById('sfx_kick').play();    
            }, 300);     
            setTimeout(() => {
                window.parent.postMessage("9","*")
            }, 2850);   
        } else {
            console.error("Invalid message data!");
        }
    },
    false,
);


window.addEventListener('DOMContentLoaded', () => {
    check();
    // Do this because js is an idiot and does not wait for the webpage to load. I don't even wanna know if this breaks on some rare cases.
});
