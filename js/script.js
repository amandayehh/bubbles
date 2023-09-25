let total = 200;
for (let i = 0; i < total; i++) {
    let img = document.createElement('img');
    let randInt = getRandomInt(1, 18);
    img.classList.add('fadeout');
    // console.log("translate(" + getRandomInt(-1, 1) + "vw ," + getRandomInt(-1, 1) + "vw)")
    // img.style.transform = "translate(" + getRandomInt(-4, 4) + "vw ," + getRandomInt(-4, 4) + "vw)";

    img.src = "bubbles/bubble" + randInt + ".png";
    img.id = "bubble" + i;
    document.getElementById("bubbles").appendChild(img);
}

document.addEventListener('mouseover', function (event) {
    if (event.target.id && event.target.tagName == "IMG") {
        event.target.classList.add('active');
        event.target.classList.remove('fadeout');

        event.target.classList.add('fadein');
        event.target.style.transform = "translate(" + getRandomInt(-5, 5) + "vw ," + getRandomInt(-5, 5) + "vw)";
        event.target.style.transform += "rotate(" + getRandomInt(-30, 30) + "deg)";

        setTimeout(function () {
            event.target.classList.remove('fadein');
            event.target.classList.add('fadeout');
        }, getRandomInt(800, 1500));

        //get audio file & play
        var audio = document.getElementsByClassName("audio")[getRandomInt(0, 13)];
        audio.play();

        //change image source
        document.getElementById(event.target.id).src = "bubbles/bubble" + getRandomInt(1, 18) + ".png";
    }
})

function showInfo() {
    document.getElementById("i").classList.add('fadeout');
    document.getElementById("info_text").style.display = "inherit";
    document.getElementById("info_text").classList.remove('fadeout')
    document.getElementById("info_text").classList.add('fadein')

}

function hideInfo() {
    document.getElementById("info_text").classList.add('fadeout')
    document.getElementById("info_text").classList.remove('fadein')
    document.getElementById("info_text").style.display = "none";


    document.getElementById("i").classList.remove('fadeout');
    document.getElementById("i").classList.add('fadein');

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hideCover() {
    document.getElementById("cover").classList.add('fadeout');
    document.getElementById("cover").style.display = "none";


}