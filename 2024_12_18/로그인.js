
function registUser(){
    
    // 1. 로그인창에서 입력받은 아이디와 비밀번호 
    let userId = document.querySelector('.userIdInput').value;
    let userPassword = document.querySelector('.userPwInput').value;

    // 2. 기존의 관리자정보를 가져오기 
    let adminList = sampleAdminList();

    // 3. 입력받은 정보와 기존의 관리자정보리스트 
    for( let index = 0 ; index <= adminList.length-1 ; index++ ){
        let user = adminList[index];
        if(user.id == userId && user.pw == userPassword){
            alert("로그인 완료");
            return;
        }
    }
    alert('일치한 관리자 정보가 없습니다.');
}