const userId = "2800433639"; // Ton ID Roblox

async function fetchRobloxData() {
    try {
        // Récupération de l'image de profil (Avatar Headshot)
        const pfpResponse = await fetch(`https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=150x150&format=Png&isCircular=true`);
        const pfpData = await pfpResponse.json();
        
        if (pfpData.data && pfpData.data.length > 0) {
            document.getElementById('roblox-pfp').src = pfpData.data[0].imageUrl;
        }

        // Note : Pour le nom d'utilisateur, l'API nécessite souvent un proxy 
        // ou une requête vers l'API Users de Roblox.
        document.getElementById('username').innerText = "Profil Développeur Roblox";

    } catch (error) {
        console.error("Erreur lors de la récupération des données Roblox:", error);
    }
}

// Lancement au chargement de la page
window.onload = fetchRobloxData;