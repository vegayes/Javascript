// 정규 표현식 객체 생성 + 확인하기

document.getElementById("check1").addEventListener("click",function() {

    // 정규표현식 객체 생성
    const regExp1 = new RegExp("script");
                    // "script"와 일치하는 문자열이 있는지 검사하는 정규표현식

    const regExp2 = /java/;
                    // "java"와 일치하는 문자열이 있는지 검사하는 정규표현식

    // 확인하기
    const str1 = "저희는 지금 javascript를 공부하고 있습니다.";

    const str2 = "servlet/jsp(java server page)도 조만간 할겁니다."

    const str3 = "java, java, java";


    console.log("regExp1.test(str1) : "+regExp1.test(str1));
    // regEx1.test(str1) : true

    console.log(regExp1.exec(str1));
    // ['script', index: 11, input: '저희는 지금 javascript를 공부하고 있습니다.', groups: undefined]

    console.log("regExp1.exec(str1) : " + regExp2.test(str1));
    // regEx1.exec(str1) : script

    console.log(regExp2.exec(str2));
    // ['script', index: 11, input: '저희는 지금 javascript를 공부하고 있습니다.', groups: undefined]


    // 일치하는게 없는 경우
    console.log("regExp1.test(str1) : " + regExp1.test(str2));
    console.log( regExp1.exec(str2) );

    // 일치하는게 여러개 있을 경우
    console.log("regEx2.test(str3) : " + regExp2.test(str3));
    console.log( regExp2.exec(str3) );   


});

// ==================================================================


// 메차문자 확인하기
document.getElementById("btn1").addEventListener("click", function() {

    const div1 = document.getElementById("div1");


    // a(일반문자열) 
    const regExp1 = /a/;
    div1.innerHTML += "/a/, apple : " + regExp1.test("apple") + "<hr>"; // true
    div1.innerHTML += "/a/, apple : " + regExp1.test("price") + "<hr>"; // false

    // [abcd]
    const regExp2 = /[abcd]/;
    div1.innerHTML += "/[abcd]/, apple : " + regExp2.test("apple") + "<hr>"; // true (a가 있어서)
    div1.innerHTML += "/[abcd]/, ssbss : " + regExp2.test("ssbss") + "<hr>"; // true (b가 있어서)
    div1.innerHTML += "/[abcd]/, qwerty : " + regExp2.test("qwerty") + "<hr>"; // false (일치하는 것이 없어서)

    // ^
    const regExp3 = /^group/; // 문자열의 시작이 group인지 확인
    div1.innerHTML += "/^group/, group100 :" + regExp3.test("group100") + "<hr>" // true
    div1.innerHTML += "/^group/, 100group :" + regExp3.test("100group") + "<hr>" // false
    

    // $ 
    const regExp4 = /group$/; // 문자열의 끝이 group인지 확인
    div1.innerHTML += "/^group/, 100group :" + regExp4.test("100group") + "<hr>" // false
    div1.innerHTML += "/^group/, group100 :" + regExp4.test("group100") + "<hr>" // true
}) 

// =========================================================================

// 이름 유효성 검사
document.getElementById("inputName").addEventListener("keyup", function() {

    // 결과 출력용 span 
    const span = document.getElementById("inputNameResult");

    // 한글 2~5글자 정규 표현식
    const regExp = /^[가-힣]{2,5}$/;


    // 빈칸인지 검사 
    if(this.value.length == 0){
        // 지운경우 span Tag 안의 값을 지워줌.
        span.innerText = "";
        return;
    }

    // 유효성 검사
    if( regExp.test(this.value)){
        // 유효한 경우 
        span.innerText = "유효한 이름 형식입니다.";
        span.style.color = "green";
        span.style.fontWeight = "bold";
    }else{
        span.innerText = "이름 형식이 유효하지 않는 형식입니다.";
        span.style.color = "red";
        span.style.fontWeight = "bold";
    }
});

// 주민등록번호 정규식 검사
document.getElementById("inputPno").addEventListener("keyup", function() {

    const span = document.getElementById("inputPnoResult");
    
    if(this.value.length == 0){
        span.innerText = "주민등록번호를 작성해주세요.";

        span.classList.remove("confirm");
        // classList에 confirm이 있다면 지운다.
        span.classList.remove("error");
        return;
    }

    // \-로 입력해야 함. (-)로 인식함.
    // const regExp = /^\d{6}\-\d{7}$/;
    const regExp = /^\d{6}\-[0-9]{7}$/;

    if(regExp.test(this.value)){
        span.innerText = "유효한 주민등록번호 형식입니다."

        span.classList.remove("error");
        span.classList.add("confirm");

    }else{
        span.innerText = "유효하지 않습니다."

        span.classList.remove("confirm");
        span.classList.add("error");
    }

    // classList를 사용하는 이유 : js에서의 style 변경을 클래스를 통해서 하는것?

});






































