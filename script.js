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
addTaskBtn.addEventListener("click", (addTask) => {
  const taskText = newTaskInput.value.trim(); // Récupère la valeur du champ input

  // Vérifie si le champ est vide
  if (taskText === "") {
    alert("Veuillez entrer une tâche !");
    return; // Arrête l'exécution si la tâche est vide
  }

  // Crée un élément <li>
  const newTask = document.createElement("li");
  newTask.classList.add("item");

  // Crée la checkbox
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("check");

  // Crée le label avec le texte saisi
  const label = document.createElement("label");
  label.textContent = taskText; // Utilise la valeur de l'input

  // Crée le bouton "Supprimer"
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
