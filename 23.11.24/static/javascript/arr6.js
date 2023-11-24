let name=["하지원", "전지현", "남기현", "이다희", "이가림", "김정환"];
let score= [  //국어 수학 영어 총점 평균
    [78,87,54,219,73],  //하지원  
    [80,70,60,210,70],  //전지현
    [88,99,65,252,84],  //남기현
    [94,34,87,215,71],  //이다희
    [10,20,30,60,20],   //이가림
    [1,2,3,6,2]         //김정환
  ];

//입력한 이름의 학생 성적을 국어:00점 수학:00점 영어:00점 평균:00점 출력하세요

function search(){  //성적조회 버튼 클릭시 실행
  var input_name = $("#name").val(); //input태그에 입력한 이름 가져오기
  var index = name.indexOf(input_name); //name배열에서 입력한 이름 찾아 인덱스 얻기
  if(index==-1){  //name배열에 없는 이름이라면
    $("#result").html("등록되지 않은 학생입니다.");
  }else{  //name배열에 존재하는 이름이라면
    $("#result").html(`국어:${score[index][0]} 수학:${score[index][1]} 영어:${score[index][2]} 평균:${score[index][4]}`);
  }
}
function over(){  //검색 버튼 클릭시 실행
  var avg_num = parseInt($("#avg").val()); //avg input태그에 입력된 글자 가져오기
  var output=""
  for(var i=0; i<score.length; i++){
    if(score[i][4]>=avg_num){
      output+=name[i]+"";
    }
  }
  if(output==""){
    output +="조건에 맞는 학생이 없습니다.";
  }

  $("#result").html(output);

}