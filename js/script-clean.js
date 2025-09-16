// Transurfing Decodificado - Clean JavaScript (No Animations)
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links (if any)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple console message
    console.log('🌟 Transurfing Decodificado carregado!');
});