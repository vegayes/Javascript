// ① 인라인 이벤트 모델 확인하기
function test1(btn){
    console.log(btn); 

    btn.style.backgroundColor = "black";
    btn.style.color = "white";
}

// ② 고전 이벤트 모델 확인하기

// ★★ 주의 사항 ★★
// 고전 / 표준 이벤트 모델은 랜더링된 HTML 요소에 
// 이벤트에 관련된 동작을 부여하는 코드

// -> 랜더링이 되지 않은 요소에는 관련 동작을 추가할 수 없음. 
//  (문제 원인 : HTML 코드 해석 순서 (위 -> 아래))

//  해결 방법
//  HTML 요소가 먼저 랜더링 된 후 JS 코드 수행할 수 있도록 
//  body 태그 맨 앞래 script 태그를 넣는다. 

document.getElementById("test2-1").onclick = function() {
                                            //  익명 함수 연결 ( 이벤트 핸들러에 많이 사용함)
    alert("고전 이벤트 모델로 출력된 대화상자");
}

// 이벤트 제거
document.getElementById("test2-2").onclick = function(){
    // document.getElementById("test2-1").removeEventListener
    // document.getElementById("test1").removeEventListener;

    // 인라인의 경우에는 제거할 수 없음.
    document.getElementById("test2-1").onclick = null; // 제거 시킴. 
}

//  고전 이벤트 모델 단점
//  -> 한 요소에 동일한 이벤트 리스너(onclick)에 대한 
//     다수의 이벤트 핸들러(배경색 변경, 폰트크기 변경)를 작성할 수 없다.
//     마지막으로 적용된 이벤트 핸들러만 적용()


document.getElementById("test2-3").onclick = function(event){
    
    // 버튼 색 바꾸기
    //  방법 1) 요소를 문서에서 찾아서 선택
    document.getElementById("test2-3").style.backgroundColor ="pink";


    // 방법 2) 매개변수 e 또는 event 활용하기
    //  -> 이벤트 핸들러에 e 또는 event를 작성하는 경우
    //  해당 이벤트와 관련된 모든 정보가 담긴 이벤트 객체가 반환됨.
    console.log(event);
    // target이 event가 발생한 요소 
    // event.target : 이벤트가 발생한 요소 
    event.target.style.backgroundColor="yellow";


    // 방법 3) this 활용하기 -> 이벤트가 발생한 요소
     this.style.backgroundColor="red";
}

// 하나만 인식 가능. : 맨 마지막것만!
document.getElementById("test2-3").onclick =function(){
    this.style.fontSize = "30px";
}



// ③ 표준 이벤트 모델
/*
    요소.addEventListener("click", function() {})
*/
document.getElementById("test3").addEventListener("click", function() {
    
    console.log(this.clientWidth); // 현재 요소의 너비 ( 테두리 제외 )

    this.style.width = this.clientWidth + 20 + "px";
});

//  test3에 이미 click 이벤트에 대한 동작이 존재하는데,
// 중복해서 적용 ( 고전 이벤트 모델 문제점 해결 확인)
document.getElementById("test3").addEventListener("click", function() {
    
    console.log(this.clientHeight); // 현재 요소의 높이 ( 테두리 제외 )

    this.style.height = this.clientHeight + 20 + "px";
});


document.getElementById("changeBtn1").addEventListener("click", function() {

    const bg = document.getElementById("div1");
    const input = document.getElementById("input1").value;
    //  input 안의 값은 value임. 
    // const input = document.querySelector("input1").value;

    bg.style.backgroundColor = input;  
});

document.getElementById("input1").addEventListener("change" , function() {

    // change 이벤트 
    //  - text 관련 input 태그는
    //  입력된 값이 변할 때를 change라고 하지 않고 
    
    // 입력이 완료된 후 포커스를 잃거나, 엔터를 입력하는 경우
    // 입력된 값이 이전값과 다를 경우에 change 이벤트가 발생한걸로 인식함.

    console.log("change 이벤트 발생");

    const bg = document.getElementById("div1");
    bg.style.backgroundColor = this.value;

    // const input = document.getElementById("input1").value;
    // bg.style.backgroundColor = input;  

});


// a태그 기본 이벤트 제거 
document.getElementById("moveNaver").addEventListener("click", function(e) {

    // 매개변수 e 또는 event == 이벤트 발생 객체
    // 이벤트와 관련된 정보가 담겨있는 객체
    // preventDefault();

    e.preventDefault(); // HTML 요소가 가지고 있는 기본 이벤트를 막음( 제거 ) 

});







































