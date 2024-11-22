/* 하나의 점수를 입력받아 변수에 저장 => 80점 이상이면 '합격' 아니면 '불합격' console.log()에 출력*/

/*
let 점수 = Number(prompt('점수 입력'))
let result = 점수 >= 80 ? '합격' : '불합격'
console.log(`결과 : ${result}`)
*/

let 점수 = Number(prompt('점수 입력'))
if (점수 >= 80) {console.log('합격');}
else {console.log('불합격');}
