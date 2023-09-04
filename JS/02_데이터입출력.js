// innerText 읽어오기
function getInnerText(){
    // HTML 문서 내에서 아이디가 "test1"인 요소를 얻어와 
    // test1 변수에 대입
    const test1 = document.getElementById("test1");

    // test1 변수에 대입된 요소에서 내용을 얻어와 (브라우저) console에 출력
    console.log(test1.innerText);
    // 읽어올 때 태그 무시.
}

function setInnerText(){
    // HTML 문서 내에서 아이디가 "test1"인 요소를 얻어와 
    // test1 변수에 대입
    const test1 = document.getElementById("test1");

    //test1변수에 대입된 요소에 새로운 내용을 작성

    test1.innerText="innerText로 변경된 <br> 내용입니다.";
    // HTML로 해석이 안되기 때문에 태그 읽힘.( text로 읽힘.)
}



// innerHTML로 읽어오기
function getInnerHTML1(){
    const test2 = document.getElementById("test2");

    console.log(test2.innerHTML);
}

function setInnerHTML1(){

    const test2=document.getElementById("test2")

    test2.innerHTML = "<b>innerHTML로 변경된</b> <br> 내용입니다."

}


// innerHTML 응용
function add(){
    
    // 1) 아이디가 area1인 요소 얻어오기
    const area1 = document.getElementById("area1");  // 원래 div 값을 생성한것 =  정적 생성

    // 2) area1에 <div class="box2"><div> 누적 대입
    area1.innerHTML += "<div class='box2'><div>";

    // 동적 생성
}

// alert 확인
function fnAlert(){
    window.alert("alert 버튼 클릭됨");

    // window는 브라우저 자체를 나타내는 객체
    // -> JS 코드는 브라우저(window)내부에서 실행되는 코드이기 때문에
    // winodw를 생략하고 작성할 수 있다.

}


// confirm 확인
function fnConfirm(){

    if(window.confirm("버튼색을 분홍색으로 바꿀래?")){
        document.getElementById("confirmBtn").style.backgroundColor = "pink";
    }else{
        document.getElementById("confirmBtn").style.backgroundColor = "red";
    }
}

// prompt 확인하기 (data 입 출력)
function fnPrompt(){
    const input = prompt("이름을 입력해주세요");

    const promptResult = document.getElementById("promptResult");

    if(input != null){
        promptResult.innerText = input + "님 환영합니다.";
    }else{
        promptResult.innerText = "이름을 입력해주세요!";
    }
}













