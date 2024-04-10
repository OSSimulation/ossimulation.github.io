var counter = 0;

function invalidCounter() {
    counter += 1;
    if (counter == 10) {
        alert("Hey there, you can't click on this button. Stop trying, it won't get you anywhere.");
    } else if (counter == 20) {
        alert("Please stop. It's not going to do anything, and you might break it.");
    } else if (counter == 30) {
        alert("The button is in immense pain right now. The poor thing is screaming in pain because you keep pressing it, so STOP, you MONSTER!");
    } else if (counter == 40) {
        alert("Alright, I've had enough. I'm going to have to make you leave if you keep doing this.");
    } else if (counter >= 50) {
        alert("You asked for this, and now you are going to be kicked out. Bye bye!");
        document.getElementById("sfx_kick").play()
        setTimeout(() => {
            document.body.remove();
            window.location.replace("http://www.thomasluigi07.com");
        }, 5000);    
    }
}