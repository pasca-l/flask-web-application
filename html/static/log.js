const timeline = document.getElementById("timeline");
const time = document.getElementById("clock");
function clock(){
    let now = new Date();
    let year = now.getFullYear();
    let month = showZero(now.getMonth()+1);
    let day = showZero(now.getDate());
    let hour = showZero(now.getHours());
    let minute = showZero(now.getMinutes());
    let second = showZero(now.getSeconds());

    let date = year +'/'+ month +'/'+ day +' '+ hour +':'+ minute +':'+ second;
    time.innerHTML = date;

    return {now : date};
}
setInterval('clock()', 1000);

function showZero(number){
    if(number < 10){
        return "0" + number;
    }
    else{
        return number;
    }
}


const input = document.getElementById("loginput");
const submission = document.getElementById("submitbtn");
submission.onsubmit = function sendMessage(){
    let message = input.value;
    message.replace(/"\n"/g, '<br>')

    let n = timeline.childElementCount;
    const element = document.createElement('li');
    n ++;
    element.id = "message" + n;
    timeline.appendChild(element);

    const elementn = document.getElementById("message" + n);
    elementn.style.listStyleType = 'none';
    elementn.innerHTML = '<pre>' + n +'. '+ clock().now +'<br>'+ message +'</pre>';
    input.value = "";
}


const save = document.getElementById("savebtn");
save.onclick = function saveLog(){

}
