$(function(){
  
  $(".join_input>input").on("focus",function(){
    //형제 요소(태그)찾기 - siblings() 모든형제 , next() 다음에 있는 형제
    //nextAll() 뒤에 있는 모든 형제 , prev() 앞에 있는 형제 하나만
    //prevAll() 앞에 있는 모든 형제
    $(this).next().css("top","-20px");
  });
  $(".join_input>input").on("blur",function(){
    if($(this).val().length==0){
      $(this).next().css("top","50%");
    }
  });
  
  //회원가입 버튼 클릭시 아이디,비밀번호,비밀번호 확인,이메일
  //값 입력 여부 확인 및 , 비밀번호와 비밀번호 확인 의 값이 일치 여부
  $("#bt").on("click",function(){
    if($("#id").val().length==0){
      alert("아이디를 입력하세요");
      $("#id").focus();
    }else if($("#pw").val().length==0){
      alert("비밀번호를 입력하세요");
      $("#pw").focus();
    }else if($("#pwre").val().length==0){
      alert("비밀번호 확인란을 입력하세요");
      $("#pwre").focus();
    }else if($("#email").val().length==0){
      alert("이메일을 입력하세요");
      $("#email").focus();
    }else if($("#pw").val()!=$("#pwre").val()){
      alert("비밀번호가 일치하지않습니다.");
      $("#pw").val("").focus();
      $("#pwre").val("");
    }
  });

  $("#face").on("change",function(){
    var images=this.files[0];

    // 파일(이미지,문서,영상,음악 등등) 불러오기
    var reader = new FileReader();

    reader.onload=function(e){  //파일 불러오기 성공시
      $("#select_face").attr("src",e.target.result);
    }

    reader.readAsDataURL(images); //불러올 파일 경로 넣어주기
    // console.log(images.name);
  });

});