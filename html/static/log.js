const save = document.getElementById("savebtn");
save.onsubmit = function saveLog(){
    let wholelog = document.getElementById("timeline");
    let json_text = JSON.stringify({html : wholelog.outerHTML});
    console.log(json_text);

    const xhr = new XMLHttpRequest;
    xhr.open('post', "/");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(json_text);
}


window.onload = function showLog(){
    const str = document.getElementById("test");
    str.innerHTML = "Hello"
}
