const drumButtons = document.querySelectorAll(".drum").length
for (let i = 0; i < drumButtons; i++)

document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)

function handleClick () {
    const audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}