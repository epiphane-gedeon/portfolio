// Carousel infini et continu - version simple
document.addEventListener('DOMContentLoaded', function() {
    const technosContainer = document.querySelector('.technos');
    const technoCards = document.querySelectorAll('.techno-card');
    
    if (!technosContainer || technoCards.length === 0) return;
    
    // Dupliquer les cartes pour la boucle infinie
    technoCards.forEach(card => {
        technosContainer.appendChild(card.cloneNode(true));
    });
    
    // Pause on hover
    technosContainer.addEventListener('mouseenter', () => {
        technosContainer.classList.add('paused');
    });
    
    // Resume on leave
    technosContainer.addEventListener('mouseleave', () => {
        technosContainer.classList.remove('paused');
    });
});