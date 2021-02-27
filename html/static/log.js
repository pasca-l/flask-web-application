const save = document.getElementById("savebtn");
save.onclick = function saveLog(){
    let wholelog = document.getElementById("timeline");
    let json_text = JSON.stringify({html : wholelog.outerHTML});
    console.log(json_text);

    const xhr = new XMLHttpRequest;
    xhr.open('post', "/");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(json_text);

    alert("saved as json file!");
}


const load = document.getElementById("loadbtn");
load.onclick = function loadLog(){
    let json_text = None;
}


window.onload = function showLog(){
    const str = document.getElementById("test");
    str.innerHTML = "Hello"
}
