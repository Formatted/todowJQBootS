var openTodo = [];
var closedTodo = [];

// -------------------------------------
// Just for testing purposes
openTodo = ["todo one", "to do two a little longer", "to do 3 3 3 3 3 3 3 3 3"];
closedTodo = ["closed todo", "closed to dododododo", "closer to do little"];



// -------------------------------------
var displayToDoList = function() {
    var filler = "";
    for (var key in openTodo) {
        filler += "<li>" + openTodo[key] + "</li>";
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
