// script.js

const moodSelector = document.getElementById("moodSelector");

// Mood-to-color mapping
const moodColors = {
    sad: ["#FFD700", "#FFB347"],        // Joyful yellows and oranges
    angry: ["#87CEEB", "#B2F5EA"],      // Calming blues and greens
    stressed: ["#D8BFD8", "#AFEEEE"],   // Relaxing lavenders and turquoises
    happy: ["#FF69B4", "#FF6347"]       // Vibrant pinks and reds
};

// Function to generate a random color from the array
function generateMoodColor(mood) {
    const colors = moodColors[mood];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Event listener for the mood selector
moodSelector.addEventListener("change", () => {
    const selectedMood = moodSelector.value;

    // Get a color to improve the mood
    const upliftingColor = generateMoodColor(selectedMood);

    // Apply the color to the page background
    document.body.style.backgroundColor = upliftingColor;
});
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
  })