// EventListener für Button
let button = document.querySelector("#add-button");
button.addEventListener("click", addToList);

function addToList() {
  // Element selektieren
  let listItemQuery = document.querySelector("#input");
  // Inhalt vom Eingabefeld auslesen
  let listItemValue = listItemQuery.value;
  // Generieren vom neuen Listenelement und Inhalt in Liste schreiben
  const newItem = document.createElement("ul");
  newItem.innerText = listItemValue;
  console.log(newItem.innerText);
  // neues Listenelement an Body anhängen
  const body = document.querySelector("body");
  body.appendChild(newItem);
}
