let total = 100;
for (let i = 0; i < total; i++) {
    let img = document.createElement('img');
    let randInt = getRandomInt(1, 18);
    img.src = "bubbles/bubble" + randInt + ".png";
    img.id = "bubble" + i;
    console.log(document.getElementById("bubbles"))
    document.getElementById("bubbles").appendChild(img);
}

document.addEventListener('mouseover', function (event) {
    if (event.target.id) { // only log if it actually has an id
        console.log(event.target.id);
        event.target.classList.add('active');
        //get audio file & play
        var audio = document.getElementsByClassName("audio")[getRandomInt(0, 6)];
        audio.play();

        //change image source
        document.getElementById(event.target.id).src = "bubbles/bubble" + getRandomInt(1, 18) + ".png";
    }
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}