/*

    변수 유효범위
        1. 전역 변수 : 특정한 {} 안에서 선언하지 않은 변수
        2. 지역 변수 : 특정한 {} 안에서 선언한 변수
            - {} : if(){}, for(){}, function(){}
            - 특징 : {} 사용 중일때만 메모리 할당
        3. 매개 변수 : 함수 호출시 인자값을 저장하는 변수



        */

// 전역변수 (js 전체 사용가능) / 대한민국
let 전역변수 = '대한민국'
// 지역변수  ( if 구역 ) / 인천광역시
if(true){
    let 지역변수2 = '인천광역시'
    console.log(전역변수)
    console.log(지역변수1)
    // 지역변수 ( for 구역 ) / 부평구
    for (let i = 0; i<i; i++){
        let 지역변수2 = '부평구'
        console.log(전역변수)
        console.log(지역변수1)
        console.log(지역변수2)
    }
    console.log(전역변수)
    console.log(지역변수1)
    console.log(지역변수2) //-false 출력 안 됨 because : for 구역 안에서 지역변수2(부평구)가 선언되었기 때문에 , for 구역이 끝나서 출력 안 됨
}

// 함수 구역
function 수원(){
    let 지역변수3 = '수원시'
    console.log(전역변수)
}

//[1]활용
let star = '' // 전역 변수
for(let i = 1; i<=10; i++){
    //let star = '' 는 지역변수
    star+='*'; //누적 합계
}
console.log(star);
//for 안에서 선언된 변수는 for 안에서만 사용한다.

//[2] 활용 2 , 사람의 이름을 입력받아 배열에 모두 저장하시오.
let 이름배열 = []
function 등록함수(){
    let 이름 = prompt('이름:') //지역변수 , 이름을 입력받아 배열 저장
    이름배열.push(이름); //지역변수 값을 전역변수 배열에 추가한다.
}
//-이름(전역변수)X,이름배열(전역변수)o 