// Leeres, initiales Array
let list = [];

// EventListener für Button
let button = document.querySelector("#add-button");
button.addEventListener("click", addToList);

// Funktionen
function addToList() {
  // Query Selector vom Eingabefeld
  let inputElement = document.querySelector("#input");
  let todoText = inputElement.value.trim();

  // Duplicate Check
  if (list.includes(todoText)) {
    alert("EINGABE NICHT MÖGLICH. Diese Aufgabe besteht schon!");
  } else {
    // Eintrag in das Array und in dem DOM
    list.push(todoText);
    const newLi = document.createElement("li");
    newLi.innerText = todoText;
    // neues Listenelement an Liste anhängen
    const listEl = document.querySelector("#list");
    listEl.appendChild(newLi);
    // Checkbox hinzufügen
    let checkboxEl = document.createElement("input");
    checkboxEl.setAttribute("type", "checkbox");
    newLi.appendChild(checkboxEl);
    // Change Event Listener
    checkboxEl.addEventListener("change", handleChangeEvent);
  }
  inputElement.value = "";
}

function handleChangeEvent(e) {
  let checkbox = e.target;
  let li = checkbox.parentElement;
  if (checkbox.checked) {
    li.style.textDecoration = "line-through";
  } else {
    li.style.textDecoration = "none";
  }
}
