let 할일목록 = [
    {할일코드 : 1 , 할일내용 : "수업듣기" , 할일상태 : false} , // 할일내용 : "" 안 붙여서 인식 못해서 에러남
    {할일코드 : 2 , 할일내용 : "밥먹기" , 할일상태 : true}
]

let 식별번호 = 3;

function 등록함수(){
    let content = document.querySelector('.contentInput').value
    let 할일 = {
        할일코드 : 식별번호, // , 안 붙여서 오류남
        할일내용 : content,
        할일상태 : false
    }
    
   
    할일목록.push(할일); //할일목록에 할일을 등록
    식별번호++;
    출력함수();
    alert('할 일 등록 완료')
    document.querySelector('.contentInput').value = ``; //value 수정
  
}

function 출력함수(){
    let todoBottom = document.querySelector('#todoBottom') // todoBottom에
    html = ``;
    for(let index= 0 ; index<= 할일목록.length-1 ; index++){
        let info = 할일목록[index] // 인덱스 꺼내오기
        html += `<div class="contentBox ${info.할일상태}">
                    <div class="content">${info.할일내용}</div>
                        <div class="contentBtns">
                            <button class="updateBtn" onclick="수정함수(${info.할일코드})">수정</button>
                            <button class="deleteBtn" onclick="삭제함수(${info.할일코드})">삭제</button>
                        </div>
                </div>`
    }
    todoBottom.innerHTML = html;
}

function 삭제함수(삭제할일코드){
    for(let index= 0 ; index<= 할일목록.length-1 ; index++){
        if(할일목록[index].할일코드 == 삭제할일코드){
            할일목록.splice(index , 1) // ()을 []로 써서 오류남 (할일목록 1개 삭제)
            break;
        }//if end
    }//for end
    출력함수();
}

function 수정함수(수정할일코드){
    for(let index= 0 ; index<= 할일목록.length-1 ; index++){
        if(할일목록[index].할일코드 == 수정할일코드){
            let 할일상태 = 할일목록[index].할일상태 // 할일목록의 index번째의 할일상태를 꺼내옴?
            할일목록[index].할일상태 =! 할일상태; //할일상태를 false 에서 true로 바꿈
            break;
        }
    }
    출력함수();
}
//수정함수 어려움(문법에 어려움이 있음) 작동이 안 됨 ..