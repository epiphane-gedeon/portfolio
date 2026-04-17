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

// Project Cards Overlay Interaction
// document.addEventListener('DOMContentLoaded', function() {
//     const cards = document.querySelectorAll('.card');
    
//     cards.forEach(card => {
//         // Click to toggle overlay on touch devices
//         card.addEventListener('click', function(e) {
//             // Prevent click on link from toggling overlay
//             if (e.target.tagName === 'A') return;
            
//             // Toggle active class
//             cards.forEach(c => c.classList.remove('active'));
//             this.classList.add('active');
//         });
        
//         // Optional: Add project link functionality
//         const link = card.querySelector('.overlay-content a');
//         if (link) {
//             link.addEventListener('click', function(e) {
//                 e.preventDefault();
//                 // You can add navigation logic here later
//                 console.log('Navigating to project:', link.textContent);
//             });
//         }
//     });
    
//     // Close overlay when clicking outside
//     document.addEventListener('click', function(e) {
//         if (!e.target.closest('.card')) {
//             cards.forEach(c => c.classList.remove('active'));
//         }
//     });
// });

// // Contact Form Handler
// document.addEventListener('DOMContentLoaded', function() {
//     const contactForm = document.getElementById('contact-form');
//     const formMessage = document.getElementById('form-message');
//     const submitBtn = document.getElementById('submit-btn');

//     if (!contactForm) return;

//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // Disable submit button and add loading state
//         submitBtn.disabled = true;
//         submitBtn.textContent = 'Envoi en cours...';
        
//         // Clear previous messages
//         formMessage.innerHTML = '';
//         formMessage.className = 'form-message';

//         // Collect form data
//         const formData = new FormData(contactForm);

//         // Send AJAX request
//         fetch('submit_form.php', {
//             method: 'POST',
//             body: formData
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 // Show success message
//                 formMessage.className = 'form-message success';
//                 formMessage.innerHTML = '<p>' + data.message + '</p>';
                
//                 // Reset form
//                 contactForm.reset();
                
//                 // Hide message after 5 seconds
//                 setTimeout(function() {
//                     formMessage.innerHTML = '';
//                 }, 5000);
//             } else {
//                 // Show error messages
//                 formMessage.className = 'form-message error';
//                 let errorHTML = '<ul>';
//                 data.errors.forEach(error => {
//                     errorHTML += '<li>' + error + '</li>';
//                 });
//                 errorHTML += '</ul>';
//                 formMessage.innerHTML = errorHTML;
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             formMessage.className = 'form-message error';
//             formMessage.innerHTML = '<p>Une erreur s\'est produite. Veuillez réessayer.</p>';
//         })
//         .finally(function() {
//             // Re-enable submit button
//             submitBtn.disabled = false;
//             submitBtn.textContent = 'Envoyer';
//         });
//     });
// });