const modal = document.getElementById("postModal");
const btn = document.getElementById("newPostBtn");
const closeBtn = document.getElementById("closeBtn");
const form = document.getElementById("tradeForm");
const feed = document.getElementById("tradeFeed");

// Open/Close Modal
btn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }

// Handle Form Submission
form.onsubmit = (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;
    const rankSelect = document.getElementById("rankSelect");
    const rankName = rankSelect.value;
    const rankIcon = rankSelect.options[rankSelect.selectedIndex].getAttribute("data-icon");

    // Create the New Post Element
    const newPost = document.createElement("div");
    newPost.className = "post-card";
    newPost.innerHTML = `
        <div class="post-info">
            <h3>${title}</h3>
            <p>Created: ${year}</p>
        </div>
        <div class="post-rank">
            <img src="${rankIcon}" alt="${rankName}">
            <span>${rankName}</span>
        </div>
    `;

    // Add to top of feed
    feed.prepend(newPost);

    // Reset and Close
    form.reset();
    modal.style.display = "none";
};