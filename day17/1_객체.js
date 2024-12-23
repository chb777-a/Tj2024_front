/*

# 비회원제 게시판
    - 배열과 객체를 이용한 메모리 구성
    - 갤러리마다 여러 개 게시물 존재
    - 게시물마다 여러 개 댓글 존재 
    
# 권장순서
    1. 저장할 데이터들을 수집, 시장조사, 기획
    
    2. 중복을 최소화 할 수 있는 데이터들을 관계별 분류
        - 갤러리, 게시물, 댓글

    3. 분류한 데이터들을 관계 연결 (상하 관계)
        - 갤러리(상) <----> 게시물(하) , (갤러리) 갤러리번호 <---> (게시물) 갤러리 번호
        - 게시물(상) >----> 댓글(하) , (게시물) 게시물번호 <---> (댓글) 게시물번호
    
    4. JS로 샘플 표현하기 , 테이블(표) = 배열 , 행/가로 = 객체
    
    #(1)
    let 카테고리목록 =[
        { 카테고리 번호 : 1 , 카테고리명 : "해외축구" }
        { 카테고리 번호 : 2 , 카테고리명 : "비트코인" }
    ]

    #(2)
    let 게시물목록 =[
        {게시물번호 : 1 , 제목 : "안녕하세요1" , 글쓴이 : "유재석" , 작성일 : "12-03" ,
        조회수 : 3 , 내용 : 하하하하 , 비밀번호 : 1234 , 카테고리번호 : 1}
        
        {게시물번호 : 2 , 제목 : "안녕하세요2" , 글쓴이 : "유재석" , 작성일 : "12-04" ,
        조회수 : 3 , 내용 : 하하하하 , 비밀번호 : 1234 , 카테고리번호 : 2}
        
        {게시물번호 : 3 , 제목 : "안녕하세요3" , 글쓴이 : "유재석" , 작성일 : "12-05" ,
        조회수 : 3 , 내용 : 하하하하 , 비밀번호 : 1234 , 카테고리번호 : 1}

        {게시물번호 : 4 , 제목 : "안녕하세요4" , 글쓴이 : "유재석" , 작성일 : "12-06" ,
        조회수 : 3 , 내용 : 하하하하 , 비밀번호 : 1234 , 카테고리번호 : 1}
    ]
    
    #(3)
    let 댓글목록 = [
        { 댓글번호 : 1 , 비밀번호 : 1234 , 내용 : "그래안녕1" , 게시물번호 : 1 }
        
        { 댓글번호 : 1 , 비밀번호 : 1234 , 내용 : "그래안녕1" , 게시물번호 : 1 }

        { 댓글번호 : 1 , 비밀번호 : 1234 , 내용 : "그래안녕1" , 게시물번호 : 3 }

        { 댓글번호 : 1 , 비밀번호 : 1234 , 내용 : "그래안녕1" , 게시물번호 : 4 }
    ]
    
    
    */