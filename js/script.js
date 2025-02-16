// Responsive navbar 
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navbar = document.getElementById('navbar-cta');
    navbar.classList.toggle('hidden');
});

// shadow come navbar
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'shadow-md');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.remove('bg-white', 'shadow-md');
        navbar.classList.add('bg-transparent');
    }
});


    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to remove 'active' class from all links
    const removeActiveClass = () => {
        navLinks.forEach(link => link.classList.remove('text-[#3F9F6E]', 'font-bold'));
    };

    // Add click event to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            removeActiveClass(); // Remove active class from other links
            this.classList.add('text-[#3F9F6E]', 'font-bold'); // Add active class to clicked link
        });
    });

    // Scroll-based active link detection
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + 100; // Adjust offset as needed

        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (
                section.offsetTop <= scrollPosition &&
                section.offsetTop + section.offsetHeight > scrollPosition
            ) {
                removeActiveClass();
                link.classList.add('text-[#3F9F6E]', 'font-bold');
            }
        });
    });
    


