let oldNum = 0; //연산자 클릭 이전의 숫자 저장 변수
let op ='';     //클릭한 연산자 저장변수
let nowNum = 0; //최근에 클릭한 숫자 저장 변수


$(function(){
  $(".item").on("click",input);
});

function input(){                         //버튼 클릭시 함수 실행
  var div = $(this);                      //클릭한 div태그    
  var data = div.data("value"); 

  data = (data === "=" )? calc() : operand( data , isNaN( data ) );
   
  
  $("#res").append(data);
  

}

function calc(){  //=요녀석을 클릭하면 oldNum과 nowNum을 op에맞춰서 계산
  $("#res").empty();
  switch( op ){
    case "+" :
      return nowNum = oldNum + nowNum;
    case "-" :
      return nowNum = oldNum - nowNum;
    case "*" :
      return nowNum = oldNum * nowNum;
    case "/" :
      return nowNum = oldNum / nowNum;
  }

}  
    
  


function operand( d , isN ){
  if( isNaN ( d ) ) {                       //false면 숫자 true면 숫자변환불가
    op = d ;                                //클릭한 연산자를 op에 저장
    oldNum = nowNum ;
    nowNum = 0;                         
  }else{
    nowNum = nowNum * 10 + Number( d ) ;             
  }
  return d ;
}

/*
  과제
가위 바위 보
컴퓨터와 대결구도를 갖춘 가위바위보

화면의 왼쪽에는 컴퓨터 가위바위보 이미지 0.3초간격으로 바뀌기
// 화면의 오른쪽에는 컴퓨터 가위바위보 이미지 3장 넣기
내가 가위바위보 이미지를 클릭하면 컴퓨터의 이미지도 멈추고 
결과를 화면중앙에 표시하기

setInterval 사용해야함
clearInterval
*/