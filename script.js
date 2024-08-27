const dinosaurs = [
    { name: "Tyrannosaurus Rex", type: "Carnivore", url: "https://fr.wikipedia.org/wiki/Tyrannosaurus" },
    { name: "Triceratops", type: "Herbivore", url: "https://fr.wikipedia.org/wiki/Triceratops" },
    { name: "Velociraptor", type: "Carnivore", url: "https://fr.wikipedia.org/wiki/Velociraptor" },
    { name: "Brachiosaurus", type: "Herbivore", url: "https://fr.wikipedia.org/wiki/Brachiosaurus" },
    { name: "Stegosaurus", type: "Herbivore", url: "https://fr.wikipedia.org/wiki/Stegosaurus" },
    { name: "Apatosaurus", type: "Herbivore", url: "https://fr.wikipedia.org/wiki/Apatosaurus" },
    { name: "Diplodocus", type: "Herbivore", url: "https://fr.wikipedia.org/wiki/Diplodocus" },
    { name: "Spinosaurus", type: "Carnivore", url: "https://fr.wikipedia.org/wiki/Spinosaurus" },
    { name: "Allosaurus", type: "Carnivore", url: "https://fr.wikipedia.org/wiki/Allosaurus" },
    { name: "Ankylosaurus", type: "Herbivore", url: "https://fr.wikipedia.org/wiki/Ankylosaurus" },
    { name: "Iguanodon", type: "Herbivore", url: "https://fr.wikipedia.org/wiki/Iguanodon" },
    { name: "Pachycephalosaurus", type: "Herbivore", url: "https://fr.wikipedia.org/wiki/Pachycephalosaurus" },
    { name: "Parasaurolophus", type: "Herbivore", url: "https://fr.wikipedia.org/wiki/Parasaurolophus" },
    { name: "Carnotaurus", type: "Carnivore", url: "https://fr.wikipedia.org/wiki/Carnotaurus" },
    // Ajoute d'autres dinosaures ici
];

// Fonction pour créer la carte d'un dinosaure
function createDinoCard(dino) {
    const card = document.createElement('div');
    card.classList.add('dino-card');

    card.innerHTML = `
        <img src="https://via.placeholder.com/150x140?text=${dino.name}" alt="${dino.name}">
        <div class="dino-type">${dino.type}</div>
        <h2>${dino.name}</h2>
        <a href="${dino.url}" target="_blank">En savoir plus</a>
    `;

    return card;
}

// Fonction pour afficher la liste des dinosaures
function displayDinosaurs() {
    const list = document.getElementById('dinosaur-list');
    list.innerHTML = '';

    dinosaurs.forEach(dino => {
        const card = createDinoCard(dino);
        list.appendChild(card);
    });
}

// Fonction de recherche
document.getElementById('search').addEventListener('input', function(e) {
    const searchQuery = e.target.value.toLowerCase();
    const filteredDinos = dinosaurs.filter(dino => dino.name.toLowerCase().includes(searchQuery));
    const list = document.getElementById('dinosaur-list');
    list.innerHTML = '';

    filteredDinos.forEach(dino => {
        const card = createDinoCard(dino);
        list.appendChild(card);
    });
});

// Affiche les dinosaures au chargement de la page
displayDinosaurs();
