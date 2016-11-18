var button=document.getElementById('likebutton');
var likebutton = 0;
button.onclick= function() {
      likebutton += 1;
      var span=document.getElementById('like');
      span.innerHTML = likebutton.toString();
  };
