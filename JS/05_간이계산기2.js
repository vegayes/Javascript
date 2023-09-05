function cal(btn){
    // op에는 +,-,*,/ ,% 중 전달되서 옴
    // input에 입력된 값을 얻어와 number 타입으로 변환

    // btn에는 this(클릭된 버튼 요소)가 전달되어짐.
    console.log(btn);

    const op = btn.innerText; // 버튼의 내용(+,-,*,/,%)을 얻어옴.

    const first = Number(document.getElementById("first").value);
    const second = Number(document.getElementById("second").value);

    // 결과 저장용 변수
    let result = 0;
    
    switch(op){
        case '+' : result = first + second; break;
        case '-' : result = first - second; break;
        case '*' : result = first * second; break;
        case '/' : result = first / second; break;
        case '%' : result = first % second; break;
    }

    // span 태그에 결과 출력
    document.getElementById("result").innerText = result;
}








