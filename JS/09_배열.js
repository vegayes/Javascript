document.getElementById("btn1").addEventListener("click", function(){

    // 배열 선언 방법
    const arr1 = new Array(3); // 3칸짜리 배열 생성
    const arr2 = new Array(); // 0칸짜리 배열(비어있는 배열) 생성

    console.log("안녕");

    // 다른 자료형 대입
    arr1[0] = "김밥";
    arr1[1] = 123;
    arr1[2] = true;
    console.log(arr1);

    //  0칸짜리 배열 대입 -> 자동으로 길이 증가
    arr2[0] = "김밥";
    arr2[1] = 123;
    arr2[2] = true;
    console.log(arr2);


    //  배열 선언 방법
    const arr3 =[]; // 비어있는 배열(0칸)
    const arr4 = ["사과", "딸기","바나나"];

    // for문으로 배열 요소 반복 접근하기
    // 1. 일반 for문
    // 2. 향상된 for문 ( for... of) : 배열용 향상된 for문
    // +++ for in 은 객체에서 사용

    for(let item of arr4){
        console.log(item);
    }
});


document.getElementById("btn2").addEventListener("click",function(){
    
    // 비어있는 배열 생성
    const arr = [];

    // push() : 배열 마지막 요소로 추가
    arr.push("삼겹살");
    arr.push("곱창");
    arr.push("볶음밥");
    arr.push("쌀국수");

    console.log(arr);

    // pop : 마지막 요소 꺼내오기
    console.log("꺼내온 요소 : " + arr.pop()); //쌀국수
    console.log(arr); // ['삼겹살', '곱창', '볶음밥']

    // 배열.indexOf("값") : 일치하는 값을 가진 요소의 index 반환
    console.log("삼겹살 인덱스 : " + arr.indexOf("삼겹살")); //0
    console.log("갈비 인덱스 : " + arr.indexOf("갈비")); //-1

    // 배열.sort([정렬기준함수]) : 배열 내 요소를 오름차순 정렬(문자열)
    const arr2 = [5,3,2,10,1];

    console.log(arr.sort()); // 문자열 정렬도 가능
    console.log(arr2.sort()); // 문자열로 되어 있기 떄문에 10이 2번째 옴


    // 숫자 오름 차순 정렬
    console.log(arr2.sort(function(a,b) {return a-b;}));


    // 문자열로 출력
    console.log(arr.toString());
    console.log(arr.join("/"));
    


})
;





































