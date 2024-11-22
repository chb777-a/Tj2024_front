/*
    조건문 : 조건 문법
        - 조건의 결과값 : true / false
        - 삼항연산자 : 간단한 조건문
        1. IF 조건문 : 조건문을 표현 가능한 문법
            - 조건에 true / false , 비교연산 또는 관계연산
        2. IF 형태
            1) if (조건) 참일 경우 코드

            2) if (조건) { 참일 경우 코드; 참일 경우 코드;} 

            3) if (조건) {참일 경우 코드;}
                else{ 거짓일 경우 코드;}

            4) if (조건1){참1일 경우 코드;}
               else if (조건2){참2일 경우 코드;}
               else if (조건2){참2일 경우 코드;}
               else if (조건2){참2일 경우 코드;}
               else{거짓일 경우 코드}
            
            5) if 중첩
               if(조건){if(조건){} else{} } else{}


        **주의할 점 : if(조건) {} 사이에 ; 없이 작성
        **주의할 점 : {시작중괄호} 괄호 매칭
*/

//[1] if (조건) 바로 뒤에 ; 넣지 말긔
if(10>3) console.log('1. T 10>3') // T -> 출력O
if(10>20) console.log('2 T 10>20') // F -> 출력X
//if(10>20);console.log('3 T 10>20') F-> 출력O 세미콜론 ; 들어가서 문장 끊겨서 출력

//[2] 참일 경우 코드의 명령어 2개 이상이면 {}로 묶긔
if(10>20) console.log( '4-1 10>20'); console.log('4-2 10>20')
if(10>20) { // if start
           console.log('5-1 10>20');
           console.log('5-2 10>20');
          } //if end

if(10>3) { // if start
    console.log('6-1 10>3');
    console.log('6-2 10>3');
} //if end

//[3] if ~ else
if(10>3){
    console.log('7. T10>3');} //출력 O 
else{console.log('7. F10>3');} //출력 X

//[4] if ~ else if ~ else if ~ else , 조건이 다수일 때
if(10 >= 20){ console.log('8. T1 10>=20');} // 출력 X
else if(10 >= 15){console.log('8.T2 10>=15');} // 출력 X
else if(10 >=10){console.log('8.T3 10>=10');} // 출력 O
else{console.log('8.F 그 외');}

//[5] if 중복
let 성별 = '남'
let 점수 = 80;
if (성별 == '남'){  // - 만약에 성별 변수 값이 남자
    if(점수 >= 90) {console.log('남자우수');}  // 성별이 남자 이면서 90점 이상이라면
    else{ console.log('남자');}     
    } // if end
else{ //- 아니면
    if(점수 >=90){console.log('여자우수');}
    else{console.log('여자');} }// if end