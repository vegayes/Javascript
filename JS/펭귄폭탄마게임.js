const penguin = document.getElementById("penguin");

// let positionX = 0;
// let positionY = 0;

// document.addEventListener("keydown", function(event){

//     switch(event.key){
//     case "ArrowRight": positionX+=10; break;
//     case "ArrowLeft": positionX-=10;break;
//     case "ArrowUp": positionY-=10;break;
//     case "ArrowDown": positionY+=10;break;
//     }

//     penguin.classList.remove();

//     // if (penguin.classList.contains('state-show') === true) {
//     // penguin.classList.remove('state-show');
//     // } else {
//     // penguin.classList.add('state-show');
//     // }
// });



const cssofPenguin = window.getComputedStyle(penguin);
let leftValue = cssofPenguin.left;
let leftValueWithoutPx = parseInt(leftValue);


window.addEventListener("keydown", move)

function move(e){
    if(e.key == "ArrowRight" && penguin.offsetLeft > 0){
        penguin.style.left = (penguin.offsetLeft+5)+'px';
        penguin.style.backgroundPosition = '35px'; 
    }else if(e.key == "ArrowLeft" && penguin.offsetLeft < 400){
        penguin.style.left = (penguin.offsetLeft-5)+'px';
        penguin.style.backgroundPosition = '35px'; 
    }

}




// document.addEventListener('keydown',function(e){
//     const clientRect = penguin.getBoundingClientRect();
    
//     console.log(e.key);
//     console.log(e.screenX);
    
//     let x = 1;

//     switch(e.key){
//     case "ArrowRight": penguin.style.right = e.screenX +10+'px' ;
//     case "ArrowLeft": penguin.style.left = e.screenY + 10+'px';
//     case "ArrowUp": penguin.style.top += 5;
//     case "ArrowDown": penguin.style.bottom += 5;
//     }
// });



// document.addEventListener("keydown", function(e){

//     e.key

// })

// const area = document.getElementById("area");
// const penguin = document.getElementById("penguin");

// var x = 10, y = 10;
// var w = 20 , h = 20;


// function loaded() {
//     pgMove();
//     setInterval(move,10);
// }

// function pgMove(){
//     moveAll();
// }

// function moveAll(){
//     x+=dx;
//     y+=dy;

// }


// function keydown(){
//     keycode = e.key;

//     switch(keycode){
//         case 37: dx = -1; break;
//         case 38: dy = -1; break;
//         case 39: dx = 1; break;
//         case 40 : dy = 1; break;
//     }
// }


// function keyup(){
//     keycode = e.key;

//     switch(keycode){
//         case 37: 
//         case 39: dx = 0; break;
//         case 38: 
//         case 40 : dy = 0; break;
//     }
// }











// e.key ==> 본인이 누른키 



// 요소.setAttribute("속성명", "적용할 속성")
// ex) img.setAtrribute("src","../img/test.png");
// --> <img src="../img/test.png") 이렇게 적용됨
// ==> 폭탄 얹을 때 할거 같구.

// 백틱 문법 사용법
// '${코드}' --> 문자열 내 변수, 연산 사용 가능
// ex) let name ="홍길동"
// 구 : "안녕 "+name;
// 신 : `안녕 ${name}`;
// --> 픽셀?? 





