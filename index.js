
document.querySelector("#id-checkbox").addEventListener("click", function(event) {
         document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
         event.preventDefault();
}, false);




element1 = document.querySelector('form#create-task-form'); 
element2 = document.querySelector('ul#tasks'); 
element2.innerHTML = element1
let inputValue = document.getElementById("new-task-description").value;

inputValue2 = document.createTextNode(inputValue);

element2.appendChild(inputValue2);