// var a =document.querySelector("button").addEventListener("click", function(){alert("what's up ma nigga")})

// for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function (){var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();
//     });
// }
for(var i= 0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var temp = this.innerHTML;
        hears(temp)
        activeButton(temp)
    })
}
document.addEventListener("keypress", function (event){
    hears(event.key)
    activeButton(event.key)
});
function hears(char){
    switch(char){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play()
            break
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play()
            break
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play()
            break
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play()
            break
        case "j":
            var anare = new Audio("sounds/snare.mp3");
            anare.play()
            break
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play()
            break
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play()
            break
        default:
            console.log("what the hell are you doing!!!")
    }

}
function activeButton(butt){
    var cat = document.querySelector("."+butt);
    cat.classList.add("pressed");

    setTimeout(function (){
        cat.classList.remove("pressed")},100);
}




