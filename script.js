/// date ///
const dateElement = document.getElementById("date");
let options = { day: "numeric", month: "numeric", year: "numeric" };
let today = new Date();

dateElement.innerHTML = today.toLocaleDateString(options);

/// add task ///
// Sélectionne les éléments HTML nécessaires
const newTaskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const list = document.querySelector(".list");

// Écouteur d'événement sur le bouton "Ajouter"
addTaskBtn.addEventListener("click", () => {
  const taskText = newTaskInput.value.trim(); // Récupère la valeur du champ input

  if (taskText === "") {
    alert("Veuillez entrer une tâche !");
    return; // Arrête l'exécution si la tâche est vide
  }

  const newTask = document.createElement("li");
  newTask.classList.add("item");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("check");

  const label = document.createElement("label");
  label.textContent = taskText; // Utilise la valeur de l'input

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Supprimer";
  deleteBtn.classList.add("deleteBtn");

  // Assemble les éléments dans le <li>
  newTask.appendChild(checkbox);
  newTask.appendChild(label);
  newTask.appendChild(deleteBtn);

  // Ajoute la tâche à la liste <ul class="list">
  list.appendChild(newTask);

  // Vide le champ input après l'ajout
  newTaskInput.value = "";
});

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTaskBtn.click();
  }
});

// delete task //
list.addEventListener("click", function (event) {
  if (event.target.classList.contains("deleteBtn")) {
    event.target.parentElement.remove(); // Supprime l'élément parent (li)
  }
});

// check task //
list.addEventListener("click", function (event) {
  if (event.target.classList.contains("check")) {
    event.target.parentElement.classList.toggle("checked");
  }
});

//reset//
const resetTask = document.querySelector(".resetBtn");

resetTask.addEventListener("click", () => {
  const tasks = document.querySelectorAll(".item");
  tasks.forEach((task) => task.remove());
});
