// Node 확인하기

document.getElementById("btn1").addEventListener("click", function(){

    // 1) #test의 자식 노드를 모두 얻어오기
    // - 요소.childNodes : 요소의 자식 노드를 모두 반환
    const nodeList = document.getElementById("test").childNodes; 
    console.log(nodeList);

    // 노드 탐색
    //  1) 부모 노드 탐색 : parentNode
    const li1 = document.getElementById("li1");
    console.log("부모 노드 탐색 " + li1.parentNode); // ul 태그 

    //  + 부모 노드 마지막에 새로운 노드 추가 (append : (마지막에) 덧붙이다)
    li1.parentNode.append("abcd");
    // text로 붙여짐. 



    //  2) 첫 번째 자식 노드 탐색 : firstChild
    console.log( "첫 번째 자식 노드 탐색 "+ document.getElementById("test").firstChild) // ==> \n 첫 번째 자식 노드 

    //  3) 마지막 자식 노드 탐색 : lastChild
    console.log( "마지막 자식 노드 탐색 " + document.getElementById("test").lastChild) // ==> \n 마지막 번째 자식 노드 ( 추가된 abcd가 출력됨) 
    
    //  4) 중간에 존재하는 자식 노드 탐색 : 부모요소.childNodes[인덱스]
    console.log("중간에 존재하는 자식 노드 탐색 " + NodeList[11]); // 7번째 줄에서 자식 노드로 설정함.


    //  5) 이전 형제 노드 탐색 : previousSibling
    //     다음 형제 노드 탐색 : nextSibling

    console.log("이전 형제 노드 탐색 " + nodeList[8].previousSibling);
    console.log("다음 형제 노드 탐색 " + nodeList[8].nextSibling);

    // 연달아서 사용 가능 
    console.log(nodeList[8].previousSibling.previousSibling.previousSibling);


});

// 1) 결과
// [text, comment, text, li#li1, text, li.cls, text, comment, text, li, text, li, text]
// 공백을 text로 인식함. 


//-------------------------------------------
// Element 확인하기
document.getElementById("btn2").addEventListener("click",function(){

    // #test의 모든 자식 요소를 반환
    const list = document.getElementById("test").children;
    console.log(list);
    // 4개 li 태그 [li#li1, li.cls, li, li, li1: li#li1]


    // #test의 첫번째 자식 요소
    document.getElementById("test").firstElementChild.style.backgroundColor = "red";
    

    // #test의 자식중 2번 인덱스의 이전 형제 요소 배경색 yellowgreen 으로 변경
    list[2].previousElementSibling.style.backgroundColor = 'yellowgreen';



});


document.getElementById("btn3").addEventListener("click",function(){

    const div = document.getElementById("div3"); // div3 선택 

    const child = document.createElement("div"); // div를 만들어줘!
    // document.createElement("태그명") : 해당 태그 요소를 생성하여 반환 (div 생성O, 화면 배치 X )
    
    div.append(child);    

    // div.innerText += child;
});














































