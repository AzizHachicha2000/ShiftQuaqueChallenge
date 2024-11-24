document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Activity Carousel
    let currentActivity = 0;
    const activityImage = document.getElementById('activityImage');
    const activityTitle = document.getElementById('activityTitle');
    const activityDescription = document.getElementById('activityDescription');

    function updateActivity() {
        const activity = activities[currentActivity];
        activityImage.src = activity.image;
        activityImage.alt = activity.title;
        activityTitle.textContent = activity.title;
        activityDescription.textContent = activity.description;
    }

    document.getElementById('prevActivity').addEventListener('click', () => {
        currentActivity = currentActivity > 0 ? currentActivity - 1 : activities.length - 1;
        updateActivity();
    });

    document.getElementById('nextActivity').addEventListener('click', () => {
        currentActivity = currentActivity < activities.length - 1 ? currentActivity + 1 : 0;
        updateActivity();
    });

    // Initialize Therapists Grid
    const therapistsGrid = document.getElementById('therapistsGrid');
    therapists.forEach(therapist => {
        const therapistCard = document.createElement('div');
        therapistCard.className = 'therapist-card';
        therapistCard.innerHTML = `
            <div class="therapist-image">
                <img src="${therapist.image}" alt="${therapist.name}">
            </div>
            <h3 class="therapist-name">${therapist.name}</h3>
            <p class="therapist-specialty">${therapist.specialty}</p>
        `;
        therapistsGrid.appendChild(therapistCard);
    });

    // Initialize Communities List
    const communitiesList = document.getElementById('communitiesList');
    communities.forEach(community => {
        const communityCard = document.createElement('div');
        communityCard.className = 'community-card';
        communityCard.innerHTML = `
            <div class="community-info">
                <i data-lucide="users"></i>
                <span class="community-name">${community.name}</span>
            </div>
            <div class="community-stats">
                <span>${community.members} members</span>
                <i data-lucide="message-circle"></i>
            </div>
        `;
        communitiesList.appendChild(communityCard);
        lucide.createIcons({ icons: ['users', 'message-circle'] });
    });

    // Initial activity update
    updateActivity();
});