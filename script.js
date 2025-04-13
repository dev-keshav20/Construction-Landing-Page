document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.nav');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        }
    });

    // Form validation
    const form = document.querySelector('form');
    const inputs = document.querySelectorAll('input');
    const submitBtn = document.querySelector('.form-btn');

    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderBottom = '2px solid red';
            } else {
                input.style.borderBottom = '1px solid #ccc';
            }
        });

        // Email validation
        const emailInput = document.querySelector('input[type="email"]');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            isValid = false;
            emailInput.style.borderBottom = '2px solid red';
        }

        if (isValid) {
            // Here you can add your form submission logic
            alert('Form submitted successfully!');
            form.reset();
        } else {
            alert('Please fill in all fields correctly');
        }
    });

    // Card hover enhancement
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});