// Expand/Collapse Sections (Optional)
document.addEventListener('DOMContentLoaded', () => {
    const headings = document.querySelectorAll('.privacy-policy h3');
    headings.forEach(heading => {
        heading.addEventListener('click', () => {
            const section = heading.nextElementSibling;
            if (section.style.display === 'none' || !section.style.display) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });

    // Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});