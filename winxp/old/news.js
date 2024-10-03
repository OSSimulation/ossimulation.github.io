function changeNewsMsg(newsTitl,newsSubTitl,link) {
    var newsTitle = document.getElementById("newsTitle"); //  get the news title element
    var newsSubTitle = document.getElementById("newsSubTitle"); // get the news content element

    newsTitle.innerHTML = newsTitl; // set the title
    newsSubTitle.innerHTML = newsSubTitl; // set the subtitle
    newsSubTitle.setAttribute("href",link); // set the link
}
function newsLoop() {
    changeNewsMsg("NEWS","Try out the new OS Menu","https://www.roblox.com/games/18140408049");
    setTimeout(() => {
        changeNewsMsg("NEWS","Windows RT Gui Test has been released","https://www.roblox.com/games/17420222147");
    }, 5000);
    setTimeout(() => {
        changeNewsMsg("NEWS","Windows XP Gui Test was accidently set to 17+, whoops","#");
    }, 10000);
    setTimeout(() => {
        changeNewsMsg("NEWS","iOS 6 finally gets its own page","../ios6/roblox/index.html");
    }, 15000);
    setTimeout(() => {
        changeNewsMsg("NEWS","Windows XP Gui Test is now 3 years old","#");
    }, 20000);
    setTimeout(() => {
        changeNewsMsg("NEWS","A new update for Windows XP Gui Test has been released after almost a year of no updates","./updates/index.html");
    }, 25000);
    setTimeout(() => {
        changeNewsMsg("NEWS","iOS 6 (on Roblox) is still dead","../ios6/roblox/index.html");
    }, 30000);
    setTimeout(() => {
        changeNewsMsg("NEWS","XBOX 360 Gui Test has been discontinued","../xbox360/index.html");
    }, 35000);
    setTimeout(() => {
        changeNewsMsg("NEWS","Thomas actually did something for this website","#");
    }, 40000);
    setTimeout(() => {
        changeNewsMsg("NEWS","I'm out of funny messages, so this will loop","#");
    }, 45000);
    setTimeout(() => {
        newsLoop(); // restart the loop
    }, 50000);
}

window.addEventListener('load', function () {
    newsLoop(); // start the loop
})