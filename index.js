
document.querySelector("#create-task-form").addEventListener("click", function(event) {
  let inputValue = document.getElementById("new-task-description").value;

inputValue2 = document.createTextNode(inputValue);
         document.getElementById("list").innerHTML += inputValue2;
         event.preventDefault();
}, false);




element1 = document.querySelector('form#create-task-form'); 
element2 = document.querySelector('ul#tasks'); 
element2.innerHTML = element1
let inputValue = document.getElementById("new-task-description").value;

inputValue2 = document.createTextNode(inputValue);

element2.appendChild(inputValue2);