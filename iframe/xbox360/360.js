// Check for newer browsers. This is used to make sure older browsers can view the webpage.
function check() {
    try {
        var ThisIsNotUsedLmao = window.crossOriginIsolated
    }
    catch {
        return // Use non-interactive version
    }
    document.getElementById("hider").className = "notif"
    document.getElementById("left").className = "l_eft"
    document.getElementById("center").className = "invisible"
    document.getElementById("right").className = "r_ight"
    document.getElementById("ytembedbtn").className = ""
    document.getElementById("ytlinkbtn").className = "invisible"
}

function hider(){
    document.getElementById("sfx_bladeopen").currentTime=0;
    document.getElementById("sfx_bladeopen").play();
    document.getElementById("hider").className = "invisible";
    document.getElementById("left").className = "left";
    document.getElementById("right").className = "right";
    setTimeout(function(){
        document.getElementById("center").className = "container";
        document.getElementById("left").className = "fin_left";
        document.getElementById("right").className = "fin_right";
    }, 700);
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
    document.getElementById('hudbg').className = 'hudbgin';
    setTimeout(function(){
        document.getElementById('hud').className = 'hud';
    }, 245);
    setTimeout(function(){
        document.getElementById('hudbg').className = 'hudbgin_fade';
        document.getElementById('ytpreview').className = 'preview';
        document.getElementById('hudtitle').className = 'hudtitle';
        document.getElementById('backbtn').className = 'backbtn'
    }, 700)
}

function hudclose(){
    backsound();
    document.getElementById('backbtn').className = 'backbtn_fade'
    document.getElementById('ytpreview').className = 'preview_fade';
    document.getElementById('hudtitle').className = 'hudtitle_fade';
    setTimeout(function(){
        document.getElementById('backbtn').className = 'invisible'
        document.getElementById('ytpreview').className = 'invisible';
        document.getElementById('hudtitle').className = 'invisible';
    }, 245);
    setTimeout(function(){
        document.getElementById('sfx_HUDclose').currentTime=0;
        document.getElementById('sfx_HUDclose').play();
        document.getElementById('hud').className = 'hudout';
        document.getElementById('hudbg').className = 'hudbgout';
    }, 255);
    setTimeout(function(){
        document.getElementById('hud').className = 'invisible';
        document.getElementById('hudbg').className = 'invisible';
    }, 490);
}


window.addEventListener('DOMContentLoaded', () => {
    check();
});
