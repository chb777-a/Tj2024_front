/*
실습: 비회원제 게시판 구현하기
    [요구사항]
    1. 게시물 등록 : 비회원제이므로 제목, 내용, 비밀번호 입력 받아 등록처리
    2. 게시물 전체 출력 : 날짜(작성일),제목,조회수를 전체 출력해주세요.
    3. 게시물 (1개)상세 출력 : 전체출력화면에서 특정한 제목을 클릭시 게시물의 상세 정보를 보여주세요.
        상세 정보 : 날짜,제목,조회수,내용   / 조회수 : 상세 정보 조회수 1 증가
    4. 게시물 삭제 : 상세 출력 화면에서 삭제 버튼 클릭시 비밀번호를 입력받아 일치하면 삭제 처리
    5. 게시물 수정 : 상세 출력 화면에서 수정 버튼 클릭시 비밀번호를 입력받아 일치하면 수정 처리

    [CRUD] c(create) r(read) u(update) d(delete)
    등록    , 출력      , 수정      , 삭제 : 기본베이스
    회원가입    마이페이지  회원수정    회원탈퇴
    제품등록    제품목록    제품수정    제품삭제
    게시물쓰기  게시물목록  게시물수정  게시물삭제
    쪽지보내기  받은쪽지보기    쪽지읽은상태수정    쪽지삭제

    [개발순서]
        1. 프론트엔드 와이어프레임/프로토타입 구성 보고 HTML 작성 <css>
        2. JS : 구성된 화면과 요구사항에서 필요한 메모리 구성
        3. JS : 요구사항에 따라 구현할 기능(함수) 구성 , 함수별 비지니스로직 구성
        4. HTML/JS 연동
        5. 테스트
        6. 유지보수

    [1] HTML 작성
    [2] 구현할 페이지 메모리 구성
        - 제목 , 내용 , 비밀번호 , 작성일 , 조회수 필드값을 기록
        방법1)
        let 제목목록 = [ '첫번째 게시물 목록' , '두번재 게시물 제목' , '세번재 게시물 목록']
        let 내용목록 = [' 첫번째 게시물 내용' , '두번재 게시물 내용' , '세번째 게시물 내용']
        let 비밀번호목록 = ['1234' , '4567' , '7891']
        let 작성일목록 =['2024-11-26' , '2024-11-27' , '2024-11-28']
        let 조회수목록 = ['3' , '2' , '0']

        방법2) 각 속성별 하나의 문자열로 구성하여 구성된 문자열을 하나의 배열에서 관리한다.
            [CSV란] : 여러개의 값들을 쉼표(,) 로 구분한 텍스트(문자열)
                -주의할 점 : 데이터 자체의 , 가 존재하면 문제가 발생할 수 있다.
                -배열의 요소 ,(쉼표) / csv의 ,(쉼표)
                -값을 다시 구분할때는 문자열 함수 , 문자열.split(',') 이용한 분해 가능

        첫번째 게시물 : '첫번째 게시물 제목,첫번째 게시물 내용, 1234,2024-11-26,3'
        두번째 게시물 : '두번째 게시물 제목,두번째 게시물 내용, 4567,2024-11-27,2'
        세번째 게시물 : '세번째 게시물 제목,세번째 게시물 내용, 7891,2024-11-28,0'

        (1)하나의 문자열(게시물)들을 여러개 구성하여 배열 저장
        let 게시물목록 = ['첫번째 게시물 제목,첫번째 게시물 내용, 1234,2024-11-26,3'
        '두번째 게시물 제목,두번째 게시물 내용, 4567,2024-11-27,2'
        '세번째 게시물 제목,세번째 게시물 내용, 7891,2024-11-28,0']

        (2) 하나의 문자열(게시물)들을 \n으로 구분하여 또 하나의 문자열에 구성
        let 게시물목록 = '첫번째 게시물 제목,첫번째 게시물 내용, 1234,2024-11-26,3\n
        두번째 게시물 제목,두번째 게시물 내용, 4567,2024-11-27,2\n
        세번째 게시물 제목,세번째 게시물 내용, 7891,2024-11-28,0'

    [3] 함수/기능 구성
        1.등록함수  : [등록] 버튼 클릭시 입력받은 3개값(제목,내용,비밀번호)를 js로 가져와서 배열에 저장 .push
        2.출력함수  : 배열 변화(최초실행1번/등록/삭제/수정) 있을 경우 배열내 모든 정보를 출력하는 함수 .length
        3.삭제함수  : [삭제]버튼 클릭시 비밀번호를 입력받아서 현재 상세게시물의 비밀번호와 일치하면 배열내 해당 게시물 삭제 함수 .splice
        4.수정함수  : [수정]버튼 클릭시 비밀번호를 입력받아서 현재 상세게시물의 비밀번호와 일치하면 새로운 내용을 입력받아 해당 게시물 내용 수정 함수 [index]=새로운값
        
    [날짜/시간 함수]
        1. let nowDate = new Date() : 현재 시스템(컴퓨터)의 날짜와 시간을 반환해주는 객체 생성
        2. Date객체 함수
            nowDate.getFullYear() : 현재 날짜의 연도 반환 , 2024
            nowDate.getMonth() : 현재 날자의 월(0=1월 11=12월) 반환 , 10(11월) , +1
            nowDate.getdate() : 현재 날짜의 일 반환, 28
            nowDate.getHours() : 현재 시간의 시 반환 , 12
            nowDate.getMinutes() : 현재 시간의 분 반환 , 28
            nowDate.getSeconds() : 현재 시간의 초 반환 , 25
        3. 주의할 점 : 월과 일이 한자리수이면 한자리수로 표현 , 두자릿수로 맞춤
            2월 -> 1 -> 01
            nowDate.getMonth()+1 < 10 ? "0"+(nowDate.getMonth()+1) : nowDate.getMonth()+1 / 만약에 월이 10미만이면(한자리수)이면 0을 연결해주고 아니면 ( 한자리수이면 앞에 0을 붙이고 아니면 안 붙인다. )
            ex) 3월(2) : 2+1 < 10 ? "0"3 : 3

        */


// [1] 게시물들을 관리할 배열 선언, 3개정도 샘플 데이터 초기화 , 전역변수o(JS가 실행될 때 1번 선언) vs 지역변수x:{}가 실행될때마다 선언
let 게시물목록 = ["첫번째 게시물 제목,첫번째 게시물 내용,1234,2024-11-26,3",
"두번째 게시물 제목,두번째 게시물 내용,4567,2024-11-27,2",
"세번째 게시물 제목,세번째 게시물 내용,7891,2024-11-28,0"]

//[2] 등록함수 , 실행조건 : [등록]버튼 클릭시
function 등록함수(){console.log('등록함수 실행');
    //1.입력/저장 , document.querySelector('선택자').value
let title = document.querySelector('.title').value; //console.log(title);//title input 마크업에 입력된 값 가져오기
let content = document.querySelector('.content').value; //console.log(content);
let password = document.querySelector('.password').value;   //console.log(password);
    //2.처리, 입력받은값들과 날짜/조회수 하나의 문자열(CSV)구성 -> 배열 저장
        //(1) 사용자에게 입력받지 않고 로직에서 초기화 해주는 변수

//원하는 날짜 또는 시간 구성하기
    //-현재날짜/시간 제공하는 객체/변수
let nowDate = new Date()
let nowYear = nowDate.getFullYear()//현재 연도
let nowMonth = nowDate.getMonth()+1;//현재 월 , +1 , 0(1월) 11(12월)
let nowDay = nowDate.getDate() //현재 일
let date = `${nowYear}-${nowMonth}-${nowDay}`; //작성일, 일반적으로 게시물 등록시 현재 시스템 날짜 사용
let view = 0; //조회수 , 일반적으로 게시물 등록시 게시물 조회수는 0부터 시작
        //(2) 5개의 변수들을 하나의(csv형식) 문자열로 구성
let board = `${title},${content},${password},${date},${view}`; // `백틱 문자열 템플릿
        //(3) 구성된 csv문자열을 배열 저장 , .push
//console.log(board);
게시물목록.push(board);
    //3.출력
출력함수(); //변수호출 : 변수명 , 함수호출 : 함수명()
}//f end

//[3] 전체 출력함수 , 실행조건 : js 열렸을 때 최초1번 실행 , 등록/삭제/수정 처리 성공시 실행
출력함수();
function 출력함수(){
    //(1) 어디에 , table > tbody , document.querySelector(선택자)
let tbody = document.querySelector('table > tbody')
    //(2) 무엇을 , 배열 요소들의 정보를 html에 구성해서
let html = ''
//-배열내 요소 순회(배열내 모든 요소를 반복해서 하나씩 거내기)
    for(let index = 0; index<=게시물목록.length-1; index++){//index는 0부터 마지막 인데긋까지 1식 증가반복
        let board = 게시물목록[index];//하나의 게시물을 csv 구성했기 때문에 게시물정보 분해, 문자열.split() 분해함수
        //문자열.split('기준문자') : 문자열내 기준문자으로 분해해서 분해된 결과를 배열 반환 함수
        let info = board.split(',')//csv 형식은 , (쉼표 기준으로)로 구분했기 대문에, (쉼표 기준으로) 다시 분해한다.
        html += `<tr><td>${info[3]}</td><td><a href="#" onclick="상세출력함수( ${index} )">${info[0]}</a></td><td>${info[4]}</td></tr>`// 변수 += 값 vs 변수 = 변수 + 값 , 기존변수에 새로운 값을 누계/연결
    }//for end

    //(3) 출력 , .innerHTML
tbody.innerHTML = html; // 변수 = 새로운값 , .변수 = 새로운값
}//f end

//[3]상세 출력 함수 , 실행조건 : 전체출력화면에서 특정한 제목을 클릭했을 때
function 상세출력함수( index ){//index:매개변수 , 상세 출력할 배열의 인덱스를 받기
    console.log('상세출력함수 실행');
    console.log(index);
    //어디에, document.querySelector() / document.querySelector()
    //무엇을, 배열 정보를 HTML로 구성, 선택한 게시물 인덱스의 정보를 , index
    let board = 게시물목록[index] //선택한 인덱스의 게시물 호출 //(2) 게시물 문자열 , 기준으로 분해
    let info = board.split(',')
        //info[0] = 제목 info[1] 내용 info[2] 비밀번호 info[3] 작성일 info[4] 조회수
    //출력 , innerHTML
    document.querySelector('.titleBox').innerHTML = info[0]; //제목 데이터를 .titleBox 마크업 사이에 대입
    document.querySelector('.contentBox').innerHTML = info[1];//내용 데이터를 .contentBox 마크업 사이에 대입
    document.querySelector('.dateBox').innerHTML = info[2];//날짜 데이터를 .dateBox 마크업 사이에 대입
    document.querySelector('.viewBox').innerHTML = info[3];//조회수 데이터를 .dateBox 마크업 사이에 대입
    document.querySelector('.btnBox').innerHTML = `<button type="button" onclick="삭제함수(${index})">삭제</button><button type="button">수정</button>`
}//f end

//[4] 삭제함수 , 실행조건 : [삭제]버튼 클릭시
function 삭제함수(index){//매개변수, 삭제할 인덱스 번호
    console.log('삭제함수실행');
    console.log(index)
    //1. 배열내 특정한 인덱스의 요소 제거, 배열변수명.splice(삭제할 인덱스 , 개수)
    게시물목록.splice( index , 1 ); //내가 선택한 게시물의 인덱스를 삭제
    //2. 화면 새로고침 / 다시 출력 / 다시 함수 호출
    출력함수();
}//f end
//[5] 수정함수 , 실행조건 : [수정]버튼 클릭시
function 수정함수(){}