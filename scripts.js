var finalDate = new Date ("April 25, 2022 00:00:00").getTime()

setInterval(function(){
    var deltaTime = finalDate - Date.now() //ms elapsed since the start
    var days = Math.floor(deltaTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((deltaTime % (1000 * 60)) / 1000);
    
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s"

    if (deltaTime < 0){
        clearInterval(x)
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000)
