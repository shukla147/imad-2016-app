var botton = document.getElementById("Counter");
button.onclick = function(){
    counter += 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};