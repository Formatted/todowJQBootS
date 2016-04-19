var openTodo = [];
var closedTodo = [];

// -------------------------------------
// Just for testing purposes
openTodo = ["todo one", "to do two a little longer", "to do 3 3 3 3 3 3 3 3 3"];
closedTodo = ["closed todo", "closed to dododododo", "closer to do little"];



// -------------------------------------
var addToOpenTodo = function() {
  var inputTD = $("#toDoText").val();
  if (inputTD !== "") {
      openTodo.push(inputTD);
      $("#toDoText").val("");
  }
};

var addToDone = function(ddd) {
    closedTodo.push(openTodo[ddd]);
    openTodo.splice(ddd, 1);
    displayToDoList();
}

var remFromToDoList = function(ddd) {
    openTodo.splice(ddd, 1);
    displayToDoList();
}

var displayToDoList = function() {
    var filler = "";
    for (var key in openTodo) {
        filler += "<li id=" + key + ">" + openTodo[key] 
        + '<a style="margin:8px" class="btn btn-xs btn-success"><span class="glyphicon glyphicon-ok"></span></a>'
        + '<a class="btn btn-xs btn-danger"><span class="glyphicon glyphicon-remove-sign"></span></a>'
        + "</li>";
    }
    $("#myList").html(filler);
};

var displayDoneList = function() {
    var filler = "";
    for (var key in closedTodo) {
        filler += "<li>" + closedTodo[key] + "</li>";
    }
    $("#closedList").html(filler);
};

var displayStats = function() {
    var filler = "";
    if (openTodo.length > 0) {
        filler += "<h3>You have to do " + openTodo.length + " more...</h3>";
    }
    if (closedTodo.length > 0) {
        filler += "<h3>You have done " + closedTodo.length + " already!</h3>";
    }
    $("#listStats").html(filler);
};
