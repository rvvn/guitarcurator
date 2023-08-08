document.addEventListener('DOMContentLoaded', function() {
    fetch('guitars.json')
        .then(response => response.json())
        .then(guitarList => {
            const guitarListContainer = document.getElementById('guitar-list');

            guitarList.forEach(guitar => {
                const guitarCard = document.createElement('div');
                guitarCard.className = 'guitar-card';

                guitarCard.innerHTML = `
                    <img src="${guitar.image}" alt="${guitar.name}">
                    <h2>${guitar.name}</h2>
                    <p>Price: ${guitar.price}</p>
                    <button>Buy Now</button>
                `;

                guitarListContainer.appendChild(guitarCard);
            });
        })
        .catch(error => {
            console.error("Error fetching guitars:", error);
        });
});
