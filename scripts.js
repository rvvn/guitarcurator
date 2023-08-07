document.addEventListener('DOMContentLoaded', function() {
    const guitarList = [
        { id: 1, name: 'Guitar 1', image: 'images/guitar1.jpg', price: '$1000' },
        { id: 2, name: 'Guitar 2', image: 'images/guitar2.jpg', price: '$1200' },
        // ... add more guitars as needed
    ];

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
});
