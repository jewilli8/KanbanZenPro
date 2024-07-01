// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
let launchFormbtn = $('#launchForm');
const taskTitleInputEl= $('#taskTitleInput');
const taskDueDateInputEl = $('#taskDueDateInput');
const taskDescriptionnputEl = $('#taskDescriptionInput');

// Todo: create a function to generate a unique task id
function generateTaskId() {
return crypto.randomUUID();
}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
for (const task of taskList){
  console.log(task.title);
}
}

// function to handle adding a new task
function handleAddTask(event){
  event.preventDefault();

  //Read user input from form dialog 
  const taskTitle = taskTitleInputEl.val().trim();
  const taskDueDate = taskDueDateInputEl.val();
  const taskDescription = taskDescriptionnputEl.val().trim();
const taskID = generateTaskId();

const newTask = {
  title: taskTitle,
  dueDate: taskDueDate,
  description: taskDescription,
  taskID: taskID
}
let taskList = JSON.parse(localStorage.getItem("tasks"));
console.log(taskList)
if (!taskList){
  taskList = [];
  taskList.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(taskList));
}
else{

// taskList.push(newTask);
localStorage.setItem("tasks", JSON.stringify(taskList));
}
renderTaskList
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}


// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    dialog = $( "#dialog-form" ).dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
           "Add Task": handleAddTask,
           
          Cancel: function() {
            dialog.dialog( "close" );
          }
        },
        close: function() {
          form[ 0 ].reset();
          allFields.removeClass( "ui-state-error" );
        }
      });
      $(launchFormbtn).on( "click", function() {
        
        dialog.dialog( "open" );
        
       
      });
      renderTaskList
    } );
   
  

