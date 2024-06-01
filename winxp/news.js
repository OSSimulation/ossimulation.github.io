function changeNewsMsg(newsTitl,newsSubTitl,link) {
    var newsTitle = document.getElementById("newsTitle"); //  get the news title element
    var newsSubTitle = document.getElementById("newsSubTitle"); // get the news content element

    newsTitle.innerHTML = newsTitl; // set the title
    newsSubTitle.innerHTML = newsSubTitl; // set the subtitle
    newsSubTitle.setAttribute("href",link); // set the link
}
function newsLoop() {
    changeNewsMsg("NEWS","Windows RT Gui Test has been released","#");
    setTimeout(() => {
        changeNewsMsg("NEWS","Windows XP Gui Test was accidently set to 17+ whoops.","../ios6/index.html");
    }, 5000);
    setTimeout(() => {
        changeNewsMsg("NEWS","iOS 6 finally gets its own page","../ios6/index.html");
    }, 10000);
    setTimeout(() => {
        changeNewsMsg("NEWS","Windows XP Gui Test is now 3 years old","#");
    }, 15000);
    setTimeout(() => {
        changeNewsMsg("NEWS","A new update for Windows XP Gui Test has been released after almost a year of no updates","./updates/index.html");
    }, 20000);
    setTimeout(() => {
        changeNewsMsg("NEWS","iOS 6 is still dead","../ios6/index.html");
    }, 25000);
    setTimeout(() => {
        changeNewsMsg("NEWS","XBOX 360 Gui Test has been discontinued","../xbox360/index.html");
    }, 30000);
    setTimeout(() => {
        changeNewsMsg("NEWS","Thomas actually did something for this website","#");
    }, 35000);
    setTimeout(() => {
        changeNewsMsg("NEWS","I'm out of funny messages, so this will loop","#");
    }, 40000);
    setTimeout(() => {
        newsLoop(); // restart the loop
    }, 45000);
}

window.addEventListener('load', function () {
    newsLoop(); // start the loop
})