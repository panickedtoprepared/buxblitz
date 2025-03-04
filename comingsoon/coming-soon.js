// MailerLite Form Submission Feedback (Optional - adjust based on form behavior)
document.addEventListener('DOMContentLoaded', () => {
    const formContainer = document.querySelector('.ml-embedded');
    if (formContainer) {
        // Listen for form submission (MailerLite handles this, but you can add custom feedback)
        formContainer.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default if you want custom handling
            console.log('MailerLite form submitted via embedded form!');
            // Optionally, show a custom success message or loading animation
            const form = formContainer.querySelector('form');
            if (form) {
                const submitButton = form.querySelector('button.primary');
                const loadingButton = form.querySelector('button.loading');
                if (submitButton && loadingButton) {
                    submitButton.style.display = 'none';
                    loadingButton.style.display = 'block';
                    setTimeout(() => {
                        alert('Thank you for signing up! We’ll notify you when BuxBlitz launches.');
                        submitButton.style.display = 'block';
                        loadingButton.style.display = 'none';
                        form.reset(); // Clear form (optional, MailerLite may handle this)
                    }, 2000); // Simulate server response time
                }
            }
        });
    }
});

// Countdown Timer
const countDownDate = new Date("April 2, 2025 00:00:00").getTime();

const countdownTimer = document.getElementById("countdown-timer");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        countdownTimer.innerHTML = "Launching Now!";
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Animate Form on Focus (for MailerLite input) - Enhanced for touch devices
const emailInput = document.querySelector('.ml-form-fieldRow input');
if (emailInput) {
    // Handle focus for both mouse and touch
    emailInput.addEventListener('focus', () => {
        emailInput.closest('.mailerlite-form').style.boxShadow = '0 0 20px #00d4ff';
    });

    emailInput.addEventListener('blur', () => {
        emailInput.closest('.mailerlite-form').style.boxShadow = 'none';
    });

    // Add touchstart for mobile devices to ensure interaction
    emailInput.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent default touch behavior if needed
        emailInput.focus();
    });
}