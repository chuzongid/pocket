let gameImg = ["scissors.png","rock.png","paper.png"];
const path="/23.12.05/static/image/";
let com=0;  //컴퓨터 이미지 setInterval 값 저장변수
let comIdx=0; //컴퓨터이미지 인덱스

$(function(){
  $("#comImg").attr("src",path+gameImg[0])
  $("#start").on("click",start);
  $(".user").on("click",result);
});

function start(){
  com = setInterval(imgRotate,100);
  $("#start").text("게임중");
  $("#start").attr("disabled",true);
  // $(".user").css("background","#fff");
  $(".user").css("background","");
}

function imgRotate(){
  if(comIdx==2) comIdx=-1;
  $("#comImg").attr("src",path+gameImg[++comIdx]);
  
}

function result(){
  var div = $(this);
  if($("#start").prop("disabled")){
    div.css("background","pink");
    var my = clickImg(div);

    clearInterval(com);
    var ment = gameResult(my);
    $(".res").text(ment);

    $("#start").attr("disabled",false);
    $("#start").text("시작");
  }
}

function clickImg(div){
  if(div.hasClass("scissors"))
    return 0;
  if(div.hasClass("rock"))
    return 1;
  if(div.hasClass("paper"))
    return 2;
  
}

function gameResult(my){
  var cu = my - comIdx;
  switch(cu){
    case 0:
      return "무";
    case 1: case -2:
      return "승";
    default:
      return "패";
  }
}