let board = new Array();

//중복없이 25개 숫자 저장하기
for(var i=1; i<=25; i++){
  var tmp = Math.floor(Math.random()*100)+1;
  if(board.indexOf(tmp)==-1)
    board.push(tmp);
  else{
    i--;
  }
}

$(function(){
  

  $.each( board,function(i,v){    //i-인덱스 v-배열값
    $(".numBox").eq(i).text(v);
  });

  $(".numBox").on("click",function(){
    $(this).css("background","black");
    $(this).css("color","white");
    var idx = $(".numBox").index(this);
    board[idx]=0;
    

    endgame();
    
  });

});

function endgame(){
  var w1,w2,w3,w4,w5 = new Array();
  var h1,h2,h3,h4,h5 = new Array();
  var d1,d2 = new Array();
  var k=0;
  if(idx<5){                    //가로 첫쨰줄
    w1.push(board[idx]);
    if(w1.length==5){
      alert("빙고");
      k++;
    }
  }
  if(idx%5==0){                 //세로 첫쨰줄
    h1.push(board[idx]);
    if(h1.length==5){
      alert("빙고");
      k++;
    }
  }
  if(idx%6==0){                  //대각선
    d1.push(board[idx]);
    if(d1.length==5){
      alert("빙고");
      k++;
    }
  }
  if(idx%4==0 && idx!=0){        //대각선
    d2.push(board[idx]);
    if(d2.length==5){
      alert("빙고");
      k++;
    }
  }



}