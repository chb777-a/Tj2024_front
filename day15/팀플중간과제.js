/* [1]배열 활용
        주차정보 1대 csv형식 문자열 표현 : "111가1111,A-1,10:14:30,12:10:20"
        or
        *주차정보목록 = ["111가1111,A-1,10:14:30,3000,12:10:20","222가2222,A-3,11:14:30,3000,13:10:20"]
        or
        *주차정보목록 = ["111가1111,A-1,10:14:30,12:10:20","222가2222,A-3,11:14:30,13:10:20"]
        or
        *주차정보목록 = ["빈좌석","빈좌석","빈좌석","빈좌석","빈좌석","빈좌석","빈좌석","빈좌석","빈좌석","빈좌석",]
        or
        *주차정보목록 = ["빈좌석","빈좌석","빈좌석","111가1111,10:14:30","빈좌석","빈좌석","빈좌석","빈좌석",
                        "222가2222,13:10:20"]
    
   [2] 함수 구성 (함수명, 실행조건, 매개변수 판단)
        -입차함수 : 차량번호 / 주차위치
        -출차함수 : 차량번호

    
        [0]주차정보목록
            let 주차정보목록 = ["빈좌석","빈좌석","빈좌석","111가1111,10:14:30","빈좌석","빈좌석","빈좌석","빈좌석","222가2222,13:10:20","빈좌석"]
        [1] 입차함수 // [입차] 버튼 클릭시 , 차량번호/주차위치
            function 입차함수(){
            //1. 입차 차량번호 / 주차위치를 HTML에서 입력받은 값을 JS로 가져온다.
                let 차량번호 = document.querySelector('.in_carNumber').value; console.log(차량번호)
                let 주차위치 = document.querySelector('.in_carArea').value;
                
                

            //2. 입차 처리 : 중복 검사(빈좌석인지,아닌지)후 두 정보를 하나의 문자열(CSV)로 구성해서 주차정보목록(배열)을 저장한다. 1. if 2. .push
                // 검사1) 빈좌석인지 체크 , if에 선택한 인덱스(주차위치)가 값이 '빈좌석' 문자열이면
                    
                // if(carParking[in_carArea-1] == "A-1"){
                    alret("이미 주차된 차량이 존재합니다.");
                    return;
                    }

                if(주차정보목록[주차위치-1] != "빈좌석"){ //!= 같지 않다.
                alret("이미 주차된 차량이 존재합니다.");
                return;
                }//if end

                // 검사2) 위치가 유효한지 , 1~20만 주차가능

                // 검사3) 차량번호 유효한지 , 이미 주차된 차량번호(중복)

            //!!: 주차위치란 : 현재 설계상 주차위치는 주차정보목록의 배열의 인덱스로 대체 중. 주차위치 == 배열인덱스
                let 오늘 = new Date(); // 현재 시간 만들기
                let 시 = 오늘.getHours();
                let 분 = 오늘.getMinutes();
                let 초 = 오늘.getSeconds();
                let 입차시간 = `${시}:${분}:${초}`
                주차정보목록[주차위치-1] = `${차량번호}/${입차시간}`;
            } //f end
            
            //3. 출력 처리 결과를 출력한다.


        [2]출차함수
            function 출차함수(){
            //1.입력 : 차량번호 HTML에서 입력받은 값을 JS에 저장한다.
                let 차량번호 = document.querySelector('.outCarNum').value;
            //2.처리 : 입력받은 차량번호의 입차시간과 현재시간(출차시간)을 초로 환산하여 요금 계산하기. ,계산식
                // --현재 차량번호가 존재하는지 검사. 1~20까지 하나씩 확인 , 배열 순회
                for(let index = 0; i <= 주차정보목록.length-1; index++){
                    let 차량번호 = 주차정보목록[index] // index번재의 차량정보를 꺼내기
                    if ( 차량정보 == '빈좌석'){ continue; }
                    //continue : 가장 가까운 반복문으로 돌아간다.
                    //차량번호 검사 , 차량정보 = index
                    let 차량 = 차량정보.split(',') //차량[0] = 차량번호 , 차량[1] = 입차시간
                    let 입차차량번호 = 차량[0] //차량[0] = 차량번호 
                    let 입차시간 = 차량[2]//차량[1] = 입차시간
                    if (입차차량번호==출차차량번호){
                    searchOK = true;
                    //+요금 계산 : 초당 100원 , 출차시간 - 입차시간
                        //1. 출차시간 : 현재 출차를 요구했을 때 현재시간
                        let 출차시 = new Date().getHours();
                        let 출차분 = new Date().getMinutes();
                        let 출차초 = new Date().getSeconds();
                        let 출차시간환산 = (출차시*360) + (출차분*60) + (출차초)
                        let 입차시 = Number입차시간.split(',')[0]
                        let 입차분 = Number입차시간.split(',')[1]
                        let 입차초 = Number입차시간.split(',')[2]
                        let 입차시간 환산 = (입차시*360) + (입차분*60) + (입차초)
                        let 사용시간 = 출차시간환산 + 입차시간환산
                        let 사용금액 = 사용시간 * 100

                    //+차량 정보 빼주기 , '차량문자열' => '빈좌석'
                    주차정보목록[index] = "빈좌석";
                    console.log(`출차 완료 : 위치 : ${index+1} 사용금액 : ${사용금액}`);
                    break; // 내가 원하는 목표르 찾거나 이뤘으면 반복문 종료해도 된다.
                    }//if end
                }//for end
            //for 안에서 출차차량번호를 못 찾을 때 실행되는 코드
            if(searchOK == false){ console.log('주차된 차량이 존재하지 않습니다.');}

            }// f end
    */

let 주차장 = ["223나2991,A-1,17:20:03" , "111가1111,A-3,17:21:05" , "222가2222,A-7,18:00:00"]

//등록함수 실행조건 : 입차 버튼 클릭시
function carParking(){//console.log('실행') if문 빠짐
    let in_carNumber = document.querySelector('.in_carNumber').value;
    let in_carArea = document.querySelector('.in_carArea').value;
    let nowDate = new Date();
    let nowHours = nowDate.getHours();
    let nowMinutes = nowDate.getMinutes();
    let nowSeconds = nowDate.getSeconds();
    let date = `${nowHours}:${nowMinutes}:${nowSeconds}`;
    carParking[in_carArea] = `${in_carNumber}/${nowDate}`;
    alert("입차 성공");
}

//출력 함수 , 실행조건 : js 파일 열렸을 때 최초 1번 실행 , 입차,출차 처리 성공시 실행
function 출력함수(){
    let body = document.querySelector('div > textarea')//textarea에
    let html = ''
    for(let index=0; index<=주차장.length-1; index++){
        let parking = 주차장[index]
        let info = parking.split(',')
        html += `<div><textarea>${info(0)}${info(1)}${info(2)}</textarea></div>`;
    }
    body.innerHTML = html;
}