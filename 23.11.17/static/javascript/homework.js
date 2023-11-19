window.onload=function(){

    var time = parseInt(prompt("주차시간"));
    var cost = 1000;

    if(time>=480){
        cost=10000; time=0;
    }else if(time>=240){
        cost = 2500; time = time - 240;
    }else if(time>=120){
        cost = 1500; time = time - 120;
    }else{
        time = time<30 ? 0 : time - 30;
    }

    var price = Math.floor(time/10)*100 + cost;
    document.write(`주차요금 : ${price}원`);

// var time = parseInt(prompt("주차시간"));
// var price =0;
// if(time<40){
//     price = 1000;
// }else if((time>=40)&&(time<120)){
//     price = 1000 + Math.floor((time-30)/10) *100;
// }else if((time>=120)&&(time<240)){
//     price = 1500 + Math.floor((time-120)/10) *100;
// }else if((time>=240)&&(time<480)){
//     price = 2500 + Math.floor((time-240)/10) *100;
// }else{
//     price = 10000;
// }
//     document.write(price);
};