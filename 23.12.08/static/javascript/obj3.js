//객체 , json

//전역변수
let name = "";  //입력한 이름 저장
let age = ""; //입력한 나이 저장

let list = [];  //배열

let info = { 
  100 : { name : "이순신" , job : "군인" , 활동지 : "여수" } ,
  101 : { name : "김유신" , job : "군인" , 활동지 : "경주" } , 
  102 : { name : "장보고" , job : "군인" , 활동지 : "진도" } ,
  103 : { name : "문익점" , job : "산업스파이" , 활동지 : "원나라" }

};


//html태그 로드
$(function(){
  
});

function save(){  //저장 버튼 클릭시 동작할 함수
  name = $("#name").val();
  age = $("#age").val();
  
  var obj = { 이름 : name , 나이 : age };
  list.push(obj);

  var out = "";
  for(var object of list){
    out += object.이름 + " " + object.나이 +"<br>";
  }
  $("#res").html( out );

}

function list_print(){  //객체에 저장된 value(데이터)를 출력하는 함수
  // 객체의 key만 추출 하는 방법 - Object.keys(객체명);
  // 객체의 value만 추출하는 방법 - Object.values(객체명);
  let info_keys = Object.keys( info );
  let info_values = Object.values( info );

  for( var key of info_keys ){  //key변수에는 info객체의 key가 하나씩 저장
    $("#res").append( info[key].name +" "+ info[key].job +" "+ info[key].활동지 +"<br>");
  }
  // for( var key2 of info_values ){ 
  //   $("#res").append(key2.name + " " + key2.job + " " + key2.활동지 + "<br>");
  // }

  // console.log( info_keys );
  // console.log( info_values );


  // alert( info[101].name );
}