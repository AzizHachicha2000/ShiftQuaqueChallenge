// Liste des affirmations
const affirmations = [
    "You are capable of amazing things.",
  "Today is your opportunity to shine.",
  "Believe in yourself and your dreams.",
  "You are stronger than you think.",
  "Happiness starts with self-acceptance."
  ];
  
  // Fonction pour obtenir une affirmation aléatoire
  function getRandomAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length); // Générer un index aléatoire
    return affirmations[randomIndex]; // Retourner l'affirmation correspondante
  }
  
  // Initialiser l'affichage de l'affirmation dès que la page se charge
  window.addEventListener("DOMContentLoaded", () => {
    const alertBox = document.getElementById("alert-box");
    const affirmationText = document.getElementById("affirmation-text");
    const closeButton = document.getElementById("close-alert");
  
    // Afficher l'affirmation aléatoire
    affirmationText.textContent = getRandomAffirmation();
    alertBox.style.display = "flex";
  
    // Ajouter l'événement pour fermer la boîte
    closeButton.addEventListener("click", () => {
      alertBox.style.display = "none";
    });
  });