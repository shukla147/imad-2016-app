window.onload = function(){
	var button = document.getElementById('counter');

  var counter = 0;

  button.onclick = function(){

	  counter = counter + 1;

  	var span = document.getElementById('count');
	  span.innerHTML = counter.toString();
  };
};


// Todo code

function get_todo() {
    var todo = new Array;
    var todo_str = localStorage.getItem('todo');
    if (todo_str !== null) {
        todo = JSON.parse(todo_str); 
    }
    return todo;
}
 
function add() {
    var task = document.getElementById('task').value;
 
    var todo = get_todo();
    todo.push(task);
    localStorage.setItem('todo', JSON.stringify(todo));
 
    show();
 
    return false;
}
 
function remove() {
    var id = this.getAttribute('id');
    var todo = get_todo();
    todo.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todo));
 
    show();
 
    return false;
}
 
function show() {
    var todo = get_todo();
 
    
    for(var i=0; i<todo.length; i++) {
        html +=+ todos[i] + '<button class="remove" id="' + i  + '">X</button>';
    }
    
 
    document.getElementById('todo').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}
 
document.getElementById('add').addEventListener('click', add);
show();
