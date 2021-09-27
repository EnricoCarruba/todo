// EventListener für Button
let button = document.querySelector("#add-button");
button.addEventListener("click", addToList);

function addToList() {
  // Element selektieren
  let listItemQuery = document.querySelector("#input");
  // Inhalt auslesen
  let listItemValue = listItemQuery.value;
  // Inhalt in Konsole ausgeben
  console.log(listItemValue);
}
