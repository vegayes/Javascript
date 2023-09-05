function cal(btn){
    // op에는 +,-,*,/ ,% 중 전달되서 옴
    // input에 입력된 값을 얻어와 number 타입으로 변환

    // btn에는 this(클릭된 버튼 요소)가 전달되어짐.
    console.log(btn);

    const op = btn.innerText; // 버튼의 내용(+,-,*,/,%)을 얻어옴.

    const first = Number(document.getElementById("first").value);
    const second = Number(document.getElementById("second").value);


    //eval("코드 형식 문자열")
    // -> 작성된 문자열을 JS 코드로 해석하는 함수
    // ex) '+' -> + 로 해석하여 연산할 수 있음.
    // -> 속도 + 보안 이슈가 있어서 사용을 지양함. 


    // 해결방법
    // new Function() 사용

    document.getElementById("result").innerText = new Function("return " + num1 + op + num2)();
                                                                                        // 실행코드
                                                               // return 10 + '+' + 20
                                                               // return 10 + 20


    


}








