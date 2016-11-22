window.onload = function(){
  var button = document.getElementById('counter');
  button.onclick = function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          if(request.status === 200){
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
    };
    request.open('GET','http://shukla147.imad.hasura-app.io/counter',true);
    request.send(null);
  };

//submit name code
var submit = document.getElementById("submit_btn");
submit.onclick = function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
             if(request.status === 200){
                 var names = request.responseText;
                 names = JSON.parse(names);
                 var list = '';
                 for(var i = 0;i<names.length;i++){
                     list += '<li>' +  names[i] + '</li>';
                 }
             var ul = document.getElementById('namelist');
             ul.innerHTML = list;
             }
          }
    };
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://shukla147.imad.hasura-app.io/submit-name?name='+name ,true);
    request.send(null);
    };




// TODO app

function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}


function add() {
    var task = document.getElementById('task').value;
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

}

function show() {
    var todos = get_todos();

    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '  <button class="remove" style="margin:5px;float:center;height:20px;background-color:red;border-radius:50px;" id=" ' + i + ' "></button></li>';
    }
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;
    var buttons = document.getElementsByClassName('remove');
    for (var j=0; j < buttons.length; j++) {
        buttons[j].addEventListener('click', remove);
    }
}



function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}
document.getElementById('add').addEventListener('click', add);
show();
};

