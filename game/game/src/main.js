let sound1 = document.getElementById('sound1');
let sound2 = document.getElementById('sound2');
let sound3 = document.getElementById('sound3');
let sound4 = document.getElementById('sound4');
let sound5 = document.getElementById('sound5');
let sound6 = document.getElementById('sound6');
let sound7 = document.getElementById('sound7');
let sound8 = document.getElementById('sound8');
let sound9 = document.getElementById('sound9');
let sound10 = document.getElementById('sound10');
let sound11 = document.getElementById('sound11');
let sound12 = document.getElementById('sound12');
let sound13 = document.getElementById('sound13');

let img = document.getElementById('hoofd');

//let button1 =document.getElementById('button1');
/*button1.addEventListener('click', function(){
    sound1.play()
} )
*/
document.addEventListener('keydown', function(){
    if (img.style.visibility === 'hidden'){
        img.style.visibility = 'visible';
        const timer = setTimeout(hideHoofd, 500)
        function hideHoofd(){
            img.style.visibility = 'hidden';
        }
    }
    switch (event.keyCode) {
        case 65://a
            //sound1.play();
            break;
        case 87://w
            sound2.play();
            break;
        case 81://q
            sound3.play();
            break;
        case 90://z
            sound4.play();
            break;
        case 69://e
            sound5.play();
            break;
        case 83://s
            sound6.play();
            break;
        case 88://x    
            sound7.play();
            break;
        case 86://
            sound8.play();
            break;
        case 68: //d
            sound9.play();
            break;
        case 70:
            sound10.play();
            break;
        case 72:
            sound11.play();
            break;
        case 74:
            sound12.play();
            break;
        case 71:
            sound13.play();
            break;
    }

    console.log(event.keyCode);
})






