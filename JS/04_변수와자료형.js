//  변수 선언 위치에 따른 구분

var num1 = 1; // 전역 변수 
num2 = 2; // 전역변수 

console.log(num1);
console.log(num2);

var num1 = 20;
num2 = 40; // 키워드 안쓰면 var와 같음

console.log(num1);
console.log(num2);

// html 랜더링 시, 바로 수행 됨. 
console.log("JS코드를 함수 내부가 아닌 JS 파일 또는 script 태그에 바로 작성하면 HTML 랜더링 시 바로 수행된다.")

function test(){
    var num3 = 3; // function 지역변수
    num4 = 4; 
    
    if(true){
        var num5 = 5; // function 지역변수( var는 함수레벨이라서 if문 밖 함수 내에서 사용할 수 있음.) 
        num6 = 6;
    }

    console.log(num5);
}

test(); // 함수 호출

// console.log(num3); //에러.함수 지역레벨 
console.log(num4); // function 내용 내에서 키워드를 붙이지 않으면 전역변수이기 때문에 function 종료 후에도 사용 가능.

// console.log(num5); // 에러. 함수 레벨.. ( 지역변수 )
console.log(num6); // function 내용 내에서 키워드를 붙이지 않으며녀 전역변수.


// 자료형 확인
function typeTest(){

    const typeBox = document.getElementById("typeBox");

    let temp; // 선언 후 값을 추기화 하지 않음 == undefiend
    typeBox.innerHTML = "temp : " +temp;

    const name = "홍길동";

    // typeof 변수명 : 해당 변수의 자료형을 검사하는 연산자
    typeBox.innerHTML += "<br>name : " + name + " / " + typeof name;

    const gender = 'M';
    typeBox.innerHTML += "<br>gender : " + gender + " / " + typeof gender;
    // 자바스크립트는 char 자료형이 존재하지 않는다.
    // -> "",'' 모두 string 리터럴 표기법

    const age = 20;
    const height = 178.9;

    typeBox.innerHTML += "<br>age : " + age + " / " + typeof age;
    typeBox.innerHTML += "<br>height     : " + height + " / " + typeof height;


    const isTrue = true;
    typeBox.innerHTML += "<br>isTrue : " + isTrue + " / " + typeof isTrue;

    // object

    // java ( {} )
    // int[] arr = {1,2,3,4,5}

    // javascript [] 사용
    const arr = [10,30,70,40];
    typeBox.innerHTML += "<br>arr : " + arr + " / " + typeof arr;

    for(let i = 0 ; i < arr.length; i++){
        typeBox.innerHTML += "<br>arr[i] : " + arr[i] + " / " + typeof arr[i];
    }

    // 자바스크립트 객체 K:V ( Map 형식 )로 작성
    const user = {"id" : "user01", "pw":"pass01"};
    typeBox.innerHTML += "<br>user : " + user + " / " + typeof user;

    // 객체 내용 출력 방법 1
    typeBox.innerHTML += "<br>user.id : "+user.id;
    typeBox.innerHTML += "<br>user.pw : "+user.pw;

    // 객체 내용 출력 방법 2 (객체 전용 for문 = for..in)
    for(let key in user){
        // user 객체의 키(id, pw)를 반복할 때 마다 하나씩 얻어와 key 변수에 저장(하고 그 키를 이용해 value에 접근할 수 있음.)
        typeBox.innerHTML += "<br>user[key] : " + user[key];
    }

    // function (함수도 자료형이다!)
    // 1) 변수명 == 함수명  (sumFn)
    const sumFn = function(n1,n2){ // 익명함수
        return n1+n2;
    } 
    
    // 함수명만 호출 => 함수에 정의된 내용이 출력됨. 
    typeBox.innerHTML += "<br>sumFn :" + sumFn + " / " + typeof sumFn;
    
    // 함수명() 괄호를 포함해서 작성하는 경우 => 함수 호출(실행)
    typeBox.innerHTML += "<br>sumFn(10,20) :" + sumFn(10,20);






}



































