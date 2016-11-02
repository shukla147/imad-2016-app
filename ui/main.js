window.onload = function(){
	var button = document.getElementById('counter');

  button.onclick = function(){
        var request = new XMLHttpRequest();
        request.onreadystatechange = function(){
          if(request.readyState ===XMLHttpRequest.DONE){
             if(request.status === 200){
                 var counter = request.responseText;
                 	var span = document.getElementById('count');
	  span.innerHTML = counter.toString();
             } 
          }  
        };
        request.open('GET','http://shukla147.imad.hasura-app.io/counter',true)
        request.send(null);
  };
};


// Todo code
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
 
    return false;
}
 
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function show() {
    var todos = get_todos();
 
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '\t<button class="remove" id="' + i  + '">X</button></li>';
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
 
document.getElementById('add').addEventListener('click', add);
show();