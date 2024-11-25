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
    document.getElementById("hider").className = "notif"
}

function hider(){
    document.getElementById("hider").className = "invisible";
    hudopen();
}

function movesound(){
    document.getElementById('sfx_move').currentTime=0;
    document.getElementById('sfx_move').play();
}

function selectsound(){
    document.getElementById('sfx_ok').currentTime=0;
    document.getElementById('sfx_ok').play();
}

function backsound(){
    document.getElementById('sfx_cancel').currentTime=0;
    document.getElementById('sfx_cancel').play(); 
}

function hudopen(){
    selectsound();
    document.getElementById('sfx_HUDopen').currentTime=0;
    document.getElementById('sfx_HUDopen').play();
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
    backsound();
    document.getElementById('sfx_HUDclose').currentTime=0;
    document.getElementById('sfx_HUDclose').play();
    document.getElementById('hud').className = 'hudout';
    document.getElementById('backbtn').className = 'invisible'
    setTimeout(function(){
        document.getElementById('hud').className = 'invisible';
        document.getElementById('hudbg').className = 'invisible';
        document.getElementById('hudaspect').className = 'invisible';
        check();
    }, 190);
}


window.addEventListener('DOMContentLoaded', () => {
    check();
    // Do this because js is an idiot and does not wait for the webpage to load. I don't even wanna know if this breaks on some rare cases.
});