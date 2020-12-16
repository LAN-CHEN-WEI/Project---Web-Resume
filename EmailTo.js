    
    let initSubject='',initBody='';//宣告預設表單內容為空
 
    //按下傳送按鈕後執行
    function submitHandler(){
        let to = "a0925038008@gmail.com";//傳送對象
        let name = nameText.value;//讀取ID為 nameTextuser 物件中的值
        let email = emailText.value;
        let tel = telText.value;
        let subject = subText.value;
        
        //把user填的資料都塞到 mail body 中
        let body = ""+bodyText.value+'%0A%0A%0A';//%0A是換行 換了三行
            body += "From："+nameText.value+'%0A';
            body += "Email："+emailText.value+'%0A';
            body += "Tel："+telText.value;
        
        //傳送的主要程式碼+內容填空判斷
        if(nameText.value == "")
        {
            alert("您尚未填寫姓名");
        }
        else if(emailText.value == "")
        {
            alert("您尚未填寫電子郵件");
        }
        else if(telText.value == "")
        {
            alert("您尚未填寫電話");
        }
        else if(subText.value == "")
        {
            alert("您尚未填寫主旨");
        }
        else if(bodyText.value == "")
        {
            alert("您尚未填寫郵件內容");
        }
        else{
            mailTo.href="mailto:"+to+"?subject="+subject+"&body="+body;
            mailTo.click();
        }
        
    }
    //在body onload
    function init(){
        subText.value=initSubject;
        bodyText.value=initBody;
    }
