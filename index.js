// Redirect to coming-soon.html after a 2-second delay to show the loading animation
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        window.location.href = 'coming-soon.html';
    }, 2000); // 2 seconds delay for the loading effect
});

// Optional: Handle touch events for mobile to ensure smooth redirects
document.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent default touch behavior if needed
    // No additional action here, as redirect handles navigation
});