let 할일목록 = [
    {할일코드 : 1 , 할일내용 : "수업듣기" , 할일상태 : false },
    {할일코드 : 2 , 할일내용 : "밥먹기"   , 할일상태 : true  }
]

let 식별번호 = 3;

function 등록함수(){
    let content = document.querySelector('.contentInput').value 
    let 할일 = {
        할일코드 : 식별번호 ,
        할일내용 : content , 
        할일상태 : false  
    }
    할일목록.push( 할일 );  
    식별번호++; 
    전체출력함수();

    alert('[할일 등록 했습니다.]')
    document.querySelector('.contentInput').value = ``; 
    return;
} 

전체출력함수(); 
function 전체출력함수(){ 
    let todoBottom = document.querySelector('#todoBottom');
    let html = ``
        for( let index = 0 ; index<=할일목록.length-1 ; index++ ){ 
            let info = 할일목록[index];  
            html += `<div class="contentBox ${ info.할일상태 == true ? 'success' : '' }">  
                        <div class="content"> ${ info.할일내용 } </div>
                        <div class="contentBtns">
                            <button onclick="수정함수( ${ info.할일코드 })" class="updateBtn">수정</button>
                            <button onclick="삭제함수( ${ info.할일코드 } )" class="deleteBtn">삭제</button> 
                        </div>
                    </div>`
        }
    todoBottom.innerHTML = html;
    return;
}

function 삭제함수( 삭제할일코드 ){ 

    for( let index = 0 ; index <= 할일목록.length-1 ; index++ ){
        if( 할일목록[index].할일코드 == 삭제할일코드 ){

            할일목록.splice( index , 1 ); 
            break;
        }
    } // for end 
    전체출력함수();
    return ; 
}

function 수정함수( 수정할일코드 ){ 

    for( let index = 0 ; index <= 할일목록.length-1 ; index++ ){
        if( 할일목록[index].할일코드 == 수정할일코드 ){

            let 할일상태 = 할일목록[index].할일상태
            할일목록[index].할일상태 = !할일상태 
            break;
        } // if end
    } // for end 
    전체출력함수();
    return; 
}