// form 내부에서 회원가입 버튼이 클릭된 경우
// document.getElementById("submit")


// 아이디 값이 변했을 때
// document.getElementById("inputId").addEventListener("change", function(){

//     const regExp = /^[a-z]{1}[A-Za-z0-9-_]{5,13}/;

//     if(regExp.test(this.value)){
//         this.classList.remove("error");
//         this.classList.add("confirm");

//     }else{
//         this.classList.remove("confirm");
//         this.classList.add("error");
//     }
// });


// 비밀번호, 비밀번호 확인 : 키보드가 올라올 때
// document.getElementById("inputPwConfirm").addEventListener("keyup", function(){

//     const pw = document.getElementById("inputPw");
//     const pwMessage = document.getElementById("pwMessage");
    

//     if(pw.value.length == 0){
//         alert("비밀번호를 입력해주세요");
//         this.value ="";
//         pw.focus();
//         return;
//     }
    
//     if((pw.value == this.value) && pw.value.length != 0){
//         pwMessage.innerText="비밀번호 일치";
//         pwMessage.style.color = "green";
//     }else{
//         pwMessage.innerText="비밀번호 불일치";
//         pwMessage.style.color = "red";
//     }
// });

// document.getElementById("inputPw").addEventListener("keyup", function(){

//     const pw = document.getElementById("inputPw");
//     const pwMessage = document.getElementById("pwMessage");
    
//     if((pw.value == this.value) && pw.value.length!=0) {
//         pwMessage.innerText="비밀번호 일치";
//         pwMessage.style.color = "green";
//         checkobj.inputPw = true;
//         checkobj.inputPwConfirm = true;
//     }else{
//         pwMessage.innerText="비밀번호 불일치";
//         pwMessage.style.color = "red";
//         checkobj.inputPw = false;
//         checkobj.inputPwConfirm = false;
//     }
// });




// 이름 값이 변화했을 떄
// document.getElementById("inputName").addEventListener("change", function() {

//     const nameMessage = document.getElementById("nameMessage");

//     const regExp1 =/^[가-힣]{2,5}$/;

//     if(regExp1.test(this.value)){
//         nameMessage.innerText = "정상입력"
//         nameMessage.style.color = "green";
//     }else{
//         nameMessage.innerText = "한글만 입력하세요"
//         nameMessage.style.color = "red";
//     }
// });


//회원가입 버튼 클릭 
// document.getElementById("checkBtn").addEventListener("click", function(){
//     const gender = document.getElementsByName("gender");
//     // const gender = document.querySelector('input[name="gender"]:checked');
//     const phoneNum = document.getElementById("inputTel");

//     const regExp2 = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

//     let sel = null;
//     // const 는 재할당 안됨.


//     for(let i = 0 ; i < gender.length; i++){
//         if(gender[i].checked == true){
//             sel = gender[i].value;
//             console.log(sel);
//         }
//     }

//     if(sel == null){
//         alert("성별을 선택해주세요");
//         // this.preventDefault();
//        return false;
//     }

//     if(!regExp2.test(phoneNum)){
//         alert("전화번호의 형식이 올바르지 않습니다.");
//         // this.preventDefault();
//         return false;
//     }   
// });

// e.preventDefault();

// onsubmit=ture / false
// function validate(){
//     const gender = document.getElementsByName("gender");
//     // const gender = document.querySelector('input[name="gender"]:checked');
//     const phoneNum = document.getElementById("inputTel");

//     const regExp2 = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}$/;

//     let sel = null;
//     // const 는 재할당 안됨.


//     for(let i = 0 ; i < gender.length; i++){
//         if(gender[i].checked == true){
//             sel = gender[i].value;
//             console.log(sel);
//         }
//     }

//     if(sel == null){
//         alert("성별을 선택해주세요");
//         // this.preventDefault();
//        return false;
//     }

//     if(!regExp2.test(phoneNum.value)){
//         alert("전화번호의 형식이 올바르지 않습니다.");
//         // this.preventDefault();
//         return false;
//     }  


//     console.log("회원가입 성공");
//     return true;
// }

// =====================================================================
// 선생님 풀이

// 유효성 검사 객체 => 진행완료 시, true로 변환 
const checkobj = {
    "inputId" : false,     // 아이디
    "inputPw" : false,     // 비밀번호    
    "inputPwConfirm" : false, // 비밀번호 확인
    "inputName" : false,    // 이름
    "gender" : false,       // 성별
    "inputTel" : false     // 전화번호
}


// // 아이디 값이 변했을 때
document.getElementById("inputId").addEventListener("change", function(){

    const regExp = /^[a-z]{1}[A-Za-z0-9-_]{5,13}/;

    if(regExp.test(this.value)){
        this.classList.remove("error");
        this.classList.add("confirm");
        checkobj.inputId = true;
    }else{
        this.classList.remove("confirm");
        this.classList.add("error");
        checkobj.inputId = false;
    }
});

// 비밀번호, 비밀번호 확인 : 키보드가 올라올 때
document.getElementById("inputPwConfirm").addEventListener("keyup", function(){

    const pw = document.getElementById("inputPw");
    const pwMessage = document.getElementById("pwMessage");
    

    if(pw.value.length == 0){
        alert("비밀번호를 입력해주세요");
        this.value ="";
        pw.focus();
        checkobj.inputPw = false;
        return;
    }
    
    if((pw.value == this.value) && pw.value.length!=0) {
        pwMessage.innerText="비밀번호 일치";
        pwMessage.style.color = "green";
        checkobj.inputPw = true;
        checkobj.inputPwConfirm = true;
    }else{
        pwMessage.innerText="비밀번호 불일치";
        pwMessage.style.color = "red";
        checkobj.inputPw = false;
        checkobj.inputPwConfirm = false;
    }
});

document.getElementById("inputPw").addEventListener("keyup", function(){

    const pw = document.getElementById("inputPw");
    const pwMessage = document.getElementById("pwMessage");
    
    if((pw.value == this.value) && pw.value.length!=0) {
        pwMessage.innerText="비밀번호 일치";
        pwMessage.style.color = "green";
        checkobj.inputPw = true;
        checkobj.inputPwConfirm = true;
    }else{
        pwMessage.innerText="비밀번호 불일치";
        pwMessage.style.color = "red";
        checkobj.inputPw = false;
        checkobj.inputPwConfirm = false;
    }
});


// 이름 값이 변화했을 떄
document.getElementById("inputName").addEventListener("change", function() {

    const nameMessage = document.getElementById("nameMessage");

    const regExp1 =/^[가-힣]{2,5}$/;

    if(regExp1.test(this.value)){
        nameMessage.innerText = "정상입력"
        nameMessage.style.color = "green";
        checkobj.gender=true;
    }else{
        nameMessage.innerText = "한글만 입력하세요"
        nameMessage.style.color = "red";
        checkobj.gender=false;
    }
});

function validate(){
    const gender = document.getElementsByName("gender");
    // const gender = document.querySelector('input[name="gender"]:checked');
    const phoneNum = document.getElementById("inputTel");

    const regExp2 = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

    if(!geder[0].checked && !gender[1].checked){
        alert("성별을 선택해주세요");
        checkobj.gender=false;
        
        return false;
    }else{
        checkobj.gender=true;
    }

    if(!regExp2.test(phoneNum.value)){
        alert("전화번호의 형식이 올바르지 않습니다.");
        checkobj.inputTel=false;
        return false;
    }else{
        checkobj.inputTel=true;
    }  
    
    // checkObj가 전부 true일 때 == 모든 유효성 검사를 통과했을 때 ==> 회원가입
    for(let key in checkobj){
        if(!checkobj[key]){ // 1) checkObj["inputTel"] ==> false

            console.log(checkobj[key]);
            return false;
        }
    }
    alert("회원가입 완료");
    return true;
}
