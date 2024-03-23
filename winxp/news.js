function changeNewsMsg(newsTitl,newsSubTitl,link) {
    var newsTitle = document.getElementById("newsTitle");
    var newsSubTitle = document.getElementById("newsSubTitle");

    newsTitle.innerHTML = newsTitl;
    newsSubTitle.innerHTML = newsSubTitl;
    newsSubTitle.setAttribute("href",link);
}
function newsLoop() {
    changeNewsMsg("NEWS","A new update for Windows XP Gui Test has been released after almost a year of no updates","./updates/index.html");
    setTimeout(() => {
        changeNewsMsg("NEWS","iOS 6 is still dead","../ios6.html");
    }, 5000);
    setTimeout(() => {
        changeNewsMsg("NEWS","XBOX 360 Gui Test has been discontinued","../xbox360/index.html");
    }, 10000);
    setTimeout(() => {
        changeNewsMsg("NEWS","Thomas actually did something for this website","#");
    }, 15000);
    setTimeout(() => {
        changeNewsMsg("NEWS","I'm out of funny messages, so this will loop","#");
    }, 20000);
    setTimeout(() => {
        newsLoop();
    }, 25000);
}

window.addEventListener('load', function () {
    newsLoop();
})