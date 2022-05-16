const overlayCard = document.querySelectorAll(".overlay-card");
const videoPlay = document.querySelectorAll('.video');

for (let i = 0; i < videoPlay.length; i++) {

    overlayCard[i].addEventListener('mouseenter', function (e) {
        videoPlay[i].play()
    })
    overlayCard[i].addEventListener('mouseout', function (e) {
        videoPlay[i].pause()
    })
}