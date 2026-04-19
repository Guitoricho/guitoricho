const tradeFeed = document.getElementById('tradeFeed');
const tradeForm = document.getElementById('tradeForm');
const modal = document.getElementById('postModal');
const newPostBtn = document.getElementById('newPostBtn');
const closeBtn = document.getElementById('closeBtn');

// 1. Charger les données sauvegardées au démarrage
let posts = JSON.parse(localStorage.getItem('rl_trades')) || [];

function displayPosts() {
    tradeFeed.innerHTML = '';
    posts.forEach((post, index) => {
        const card = document.createElement('div');
        card.className = 'post-card';
        card.innerHTML = `
            <div class="post-info">
                <h3 style="margin:0; color:#fff;">${post.title}</h3>
                <p style="color:#888; margin:5px 0;">Compte de : ${post.year}</p>
            </div>
            <div class="rank-display">
                <img src="${post.icon}" alt="${post.rank}">
                <span class="rank-name">${post.rank}</span>
            </div>
        `;
        tradeFeed.prepend(card);
    });
}

// 2. Ouvrir/Fermer le Modal
newPostBtn.onclick = () => modal.style.display = 'block';
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; }

// 3. Ajouter un post
tradeForm.onsubmit = (e) => {
    e.preventDefault();

    const rankSelect = document.getElementById('rankSelect');
    const newTrade = {
        title: document.getElementById('title').value,
        year: document.getElementById('year').value,
        rank: rankSelect.value,
        icon: rankSelect.options[rankSelect.selectedIndex].getAttribute('data-icon')
    };

    posts.push(newTrade);
    localStorage.setItem('rl_trades', JSON.stringify(posts)); // Sauvegarde locale
    
    displayPosts();
    tradeForm.reset();
    modal.style.display = 'none';
};

// Initialisation
displayPosts();