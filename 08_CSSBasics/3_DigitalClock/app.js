const clock = document.querySelector('#clock')

setInterval(function(){
    let date = new Date();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    clock.innerHTML = time;
}, 1000);