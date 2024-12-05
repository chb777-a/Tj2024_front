let eno = 4;

let 도서목록 = [					
    {도서번호 : 1, 도서명 : "소년이 온다", 저자 : "한강", 출판사 : "창비"},
    {도서번호 : 2, 도서명 : "파과", 저자 : "구병모", 출판사 : "위즈덤하우스"},
    {도서번호 : 3, 도서명 : "기원", 저자 : "정유정", 출판사 : "은행나무"}
  ]	;				
                      
  let 재고목록 = [					
    { 도서번호 : 1, 도서개수 : 1, 입고날짜 : '2024-05-12'},					
    { 도서번호 : 2, 도서개수 : 2, 입고날짜 : '2024-04-12'},					
    { 도서번호 : 3, 도서개수 : 3, 입고날짜 : '2024-03-12'}					
  ];					

  function 도서등록() {	
	     let 도서명 = document.querySelector('#bookName').value
         let 출판사 = document.querySelector('#bookCom').value
         let 저자 = document.querySelector('#bookWri').value

         let 책등록 = {
            도서번호 : eno , 
            도서명 : 도서명 ,
            출판사 : 출판사,
            저자 : 저자
        }
        eno++
        도서목록.push(책등록);

        console.log(도서목록);
        도서출력();
  }	

  도서출력();  
  function 도서출력() {	
    let newBook = document.querySelector('.도서테이블');
    let html = ` `
        for(let index = 0; index<=도서목록.length-1; index++) {
            let info = 도서목록[index];
            html += ` 
            <table border="1">
                    <tr><td> ${ info.도서명 }</td><td>${ info.저자 }</td><td>${ info.출판사 }</td><td><button  onclick = "도서수정()">수정</button><button onclick = "도서삭제(${info.도서번호})">삭제</button></td></tr>
            </table>
        </div>`
        }
        newBook.innerHTML = html;
  }	
      
  function 도서수정() {	

      
  }	
      
function 도서삭제( 삭제코드 ){ 
    for( let index = 0 ; index <= 도서목록.length-1 ; index++ ){
        if( 도서목록[index].도서번호 == 삭제코드 ){
            
            도서목록.splice( index , 1 ); 
            break; 
        } 
    } 
    도서출력();
    return ; 
} 
console.log(도서목록)
  

function 재고등록() {	
    let 도서번호 = document.querySelector('#bookNum').value 
    let 도서개수 = document.querySelector('#bookCount').value
    let 입고날짜 = document.querySelector('#bookDay').value

    let 재고등록 = {
       도서번호 : 도서번호 , 
       도서개수 : 도서개수 ,
       입고날짜 : 입고날짜
   }
   재고목록.push(재고등록);

   console.log(재고등록);
   재고출력();
}	

재고출력();  
function 재고출력() {	
  let newProd = document.querySelector('.재고테이블');
  let html = ` `
      for(let index = 0; index<=재고목록.length-1; index++) {
          let info = 재고목록[index];
          html += ` 
          <table border="1">
                  <tr><td> ${ info.도서번호 }</td><td>${ info.도서개수 }</td><td>${ info.입고날짜 }</td><td><button  onclick = "재고수정()">수정</button><button onclick = "재고삭제(${info.도서번호})">삭제</button></td></tr>
          </table>
      </div>`
      }
      newProd.innerHTML = html;
}	