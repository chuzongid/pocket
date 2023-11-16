window.onload=function(){

var time = parseInt(prompt("주차시간"));
var price =0;
if(time<40){
    price = 1000;
}else if((time>=40)&&(time<120)){
    price = 1000 + Math.floor((time-30)/10) *100;
}else if((time>=120)&&(time<240)){
    price = 1500 + Math.floor((time-120)/10) *100;
}else if((time>=240)&&(time<480)){
    price = 2500 + Math.floor((time-240)/10) *100;
}else{
    price = 10000;
}
    document.write(price);
};