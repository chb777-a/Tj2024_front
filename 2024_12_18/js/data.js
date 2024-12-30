function sampleAdminList(){
    let sampleAdminList = localStorage.getItem('sampleAdminList')
    if( sampleAdminList == null){
        sampleAdminList = [
            { ano : 1 , name : '송제영', id : 'admin-01@google.com', pw : '1111'},
            { ano : 2 , name : '박희만', id : 'admin-02@google.com', pw : '2222'},
            { ano : 3 , name : '김도하', id : 'admin-03@google.com', pw : '3333'},
            { ano : 4 , name : '유재석', id : 'admin-04@google.com', pw : '4444'},
            { ano : 5 , name : '강호동', id : 'admin-05@google.com', pw : '5555'},
        ];
    }else{sampleAdminList = JSON.parse(sampleAdminList);        
        }
        return sampleAdminList;
}
