var todos = ["Buy new turtle"];

window.setTimeout(function() {
  var input = prompt("What would you like to do?");

  function listTodos() {
    console.log("---");
    todos.forEach(function(todo, i) {
      console.log(i + ": " + todo);
    });
    console.log("---");
  }

  function addTodo() {
    var newTodo = prompt("Enter new todo:");
    todos.push(newTodo);
    console.log("Added todo");
  }

  function delTodo() {
    //ask for index of todo to be deleted
    var index = prompt("Enter nr of todo to delete:");
    // delete that todo
    // splice
    todos.splice(index, 1);
    console.log("Deleted todo");
  }

  // MAIN
  while (input !== "quit") {
    if (input === "list") {
      listTodos();
    } else if (input === "new") {
      addTodo();
    } else if (input === "delete") {
      delTodo();
    }
    input = prompt("What would you like to do?");
  }
  console.log("OK, you quit the app.");
}, 500);
