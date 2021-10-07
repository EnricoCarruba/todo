// Leeres, initiales Array
let list = [];
let doneList = [];

// EventListener für Button
let button = document.querySelector("#add-button");
button.addEventListener("click", addToList);

// Eventlistener für Radio Button Show Done
let showDoneButton = document.querySelector("#show-done");
showDoneButton.addEventListener("change", handleDoneEvent);

// EventListener für Radio Button Show open
let showOpenButton = document.querySelector("#show-open");
showOpenButton.addEventListener("change", handleOpenEvent);

// EventListener für Radio Button Show all
let showAllButton = document.querySelector("#show-all");
showAllButton.addEventListener("change", handleAllEvent);

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
    doneList.push(li.innerText.trim());
    list.pop(li.innerText.trim());
  } else {
    li.style.textDecoration = "none";
  }
}

function handleDoneEvent() {
  // Alle Einträge aus der DOM Liste entfernen
  removeChilds();
  // Alle Einträge aus dem Done Array anzeigen
  for (let i = 0; i < doneList.length; i++) {
    let newLi = document.createElement("li");
    newLi.innerText = doneList[i];
    let listEl = document.querySelector("#list");
    listEl.appendChild(newLi);
  }
  console.log(doneList);

  // alle anderen Radio Buttons unchecken
  showOpenButton.checked = false;
  showAllButton.checked = false;
}

function handleOpenEvent() {
  removeChilds();
  for (let i = 0; i < list.length; i++) {
    let newLi = document.createElement("li");
    newLi.innerText = list[i];
    let listEl = document.querySelector("#list");
    listEl.appendChild(newLi);
  }
  console.log(list);
  // alle anderen Radio Buttons unchecken
  showAllButton.checked = false;
  showDoneButton.checked = false;
}

function handleAllEvent() {
  removeChilds();
  for (let i = 0; i < doneList.length; i++) {
    let newLi = document.createElement("li");
    newLi.innerText = doneList[i];
    let listEl = document.querySelector("#list");
    listEl.appendChild(newLi);
  }
  for (let i = 0; i < list.length; i++) {
    let newLi = document.createElement("li");
    newLi.innerText = list[i];
    let listEl = document.querySelector("#list");
    listEl.appendChild(newLi);
  }
  console.log(list);
  console.log(doneList);
  // alle anderen Radio Buttons unchecken
  showDoneButton.checked = false;
  showOpenButton.checked = false;
}

function removeChilds() {
  let removed = document.querySelector("#list");
  while (removed.firstChild) {
    removed.removeChild(removed.firstChild);
  }
}
