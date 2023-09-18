
function addTask (){
    var input = document.getElementById("input");
    // get current text from input field
    var newTask = input.value;
    // only add new item to list if some text was entered
    if (newTask != "") {
    // create new HTML list item
    var item = document.createElement("li");
    // add HTML for buttons and new task text
    // Note, need to use '' because of "" in HTML
    item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" />' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" />' + '<input type="button" class="important" value="!" onclick="markImportant(this.parentNode)">' + newTask;
    // add new item as part of existing list
    document.getElementById("tasks").appendChild(item);
    input.value="";
    input.placeholder="Enter next task";

    }
}  

/*var input = document.getElementById("input");
input.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        document.getElementById("addTask").click();
    }
});*/

// change styling used for given item
function markDone (item) {
    item.className = 'finished';
    }
/* remove an item if its is checked off*/
function remove (item) {
   if(item.className == 'finished'){
    item.remove();
   }
}

//highlight item from document
function markImportant(item){
    item.className = 'imp';
}

function doAbout(){
    document.getElementById("divabout").innerHTML = "Author is Diya Saha";
    document.getElementById("divabout").className = "yellowbackground";
}

function clearAbout(){
    document.getElementById("divabout").innerHTML = "";
}
    