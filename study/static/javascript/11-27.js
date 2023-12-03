$(function(){
    //전부체크 체크박스에 체크시 전체체크로 변하게 또는 반대상황
    $("#all").on("click",function(){
        let isCheck = $(this).is(":checked");
        if(isCheck){
            $(".ability_list").prop("checked",true);
        }else{
            $(".ability_list").prop("checked",false);
        }
    });

    //체크박스 클릭시마다 체크된체크박스의 길이와 전체체크박스 길이 비교해서 같으면 전부체크에 
    //체크표시되게하기
    $(".ability_list").on("click",function(){
        var chk_count = $(".ability_list:checked").length;
        var all_check = $(".ability_list").length;
        if(chk_count==all_check){
            $("#all").prop("checked",true);
        }else{
            $("#all").prop("checked",false);
        }
    });
    $("#mypw").on("keyup",function(){
        if($(this).val().length<6 || $(this).val().length>12){
            $(".pwvalid").text("비밀번호는 6~12자 입니다.");
        }else{
            $(".pwvalid").text("비밀번호 안전");
        }
    });
    
    $("#pwre").on("keyup",function(){
        if($("#pwre").val()==$("#mypw").val()){
            $(".same").text("일치");
        }else{
            $(".same").text("불일치");
        }
    });
    
    
    $("#myphone").on("keyup",function(){
        var num = $(this).val();
        // num = num.replace(/[^0-9]/g,'').
        //           replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g,`$1-$2-$3`).
        //           replace(/(\-{1,2})$/g,"");

        // num = num.replace(/[^0-9]/g,'').replace(/^(\d{2,3})+(\d{3,4})+(\d{4})$/,`$1-$2-$3`);
        
        /*
        if(num.length==3){
            num=num+"-";
        }
        if(num.length==8){
            num=num+"-";
        }
        $(this).val(num);
        */
       
        /*
        if(num.length==3){
            num=num.slice(0,3)+"-"+num.slice(3);
            $(this).val(num);
        }
        if(num.length==8){
            num=num.slice(0,8)+"-"+num.slice(8);
            $(this).val(num);
        }
        */
       
    });

    $("#join").on("click",function(){
        console.log($("#myface")[0].files[0].name);
        var fname = $("#myface")[0].files[0].name;
        if(!fname.toLowerCase().includes(".png")){
            alert("png형식의 이미지만 가능합니다");
        }
    });


});