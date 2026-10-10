
fetch("data/businesses.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(businesses) {
        const businessList = document.getElementById("businessList");

        businesses.forEach(function(business) {
            const card = document.createElement("div");
            card.classList.add("business-card");

            card.innerHTML = `
                <div class="business-logo">🏪</div>
                <h3>${business.name}</h3>
                <span class="category">${business.category}</span>
                <p class="rating">
                    <span class="stars">★★★★☆</span>
                    ${business.rating} / 5
                </p>
                <p>${business.description}</p>
            `;

            businessList.appendChild(card);
        });
    })
    .catch(function(error) {
        document.getElementById("statusMessage").textContent =
            "Unable to load businesses. Please try again later.";
        console.error("Error loading businesses:", error);
    });
