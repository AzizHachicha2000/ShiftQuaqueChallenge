document.addEventListener('DOMContentLoaded', () => {
    const activitiesList = document.querySelector('.activity-carousel'); // Conteneur pour le carrousel des images

    // Tableau des activités avec liens
    const activities = [
        {
            title: "5-Minute Meditation",
            description: "Start your day with mindfulness",
            image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=400&h=250",
            link: "meditation.html" // Lien pour la première image
        },
        {
            title: "Gratitude Journaling",
            description: "Write three things you're grateful for",
            image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=400&h=250",
            link: "journale.html" // Lien pour la deuxième image
        },
        {
            title: "Nature Walk",
            description: "Take a refreshing 15-minute walk",
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400&h=250",
            link: "#" // Aucun lien pour la troisième image
        }
    ];

    

    // Parcourir les activités et les insérer dans la galerie
    activities.forEach((activity) => {
        const activityCard = document.createElement('div');
        activityCard.classList.add('activity-card');

        // Si un lien est disponible, créer un lien autour de l'image
        if (activity.link !== "#") {
            const activityLink = document.createElement('a');
            activityLink.href = activity.link; // Lien dynamique
            activityCard.appendChild(activityLink);

            const activityImage = document.createElement('img');
            activityImage.src = activity.image;
            activityImage.alt = activity.title;
            activityLink.appendChild(activityImage);
        } else {
            // Si pas de lien, ajouter juste l'image sans lien
            const activityImage = document.createElement('img');
            activityImage.src = activity.image;
            activityImage.alt = activity.title;
            activityCard.appendChild(activityImage);
        }

        // Création de l'overlay de l'activité (titre et description)
        const overlay = document.createElement('div');
        overlay.classList.add('activity-overlay');
        activityCard.appendChild(overlay);

        const title = document.createElement('h3');
        title.innerText = activity.title;
        overlay.appendChild(title);

        const description = document.createElement('p');
        description.innerText = activity.description;
        overlay.appendChild(description);

        // Ajout de la carte d'activité dans le conteneur
        activitiesList.appendChild(activityCard);
    });
});
