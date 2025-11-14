// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Form validation and submission
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    // Login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            // Here you would typically send this data to your server
            console.log('Login attempt:', { email, password, rememberMe });
            
            // For demo purposes, show success message
            alert('Login successful!');
            
            // Close the modal
            const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
            loginModal.hide();
        });
    }
    
    // Register form submission
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Password validation
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // Here you would typically send this data to your server
            console.log('Registration:', { firstName, lastName, email });
            
            // For demo purposes, show success message
            alert('Registration successful!');
            
            // Close the modal
            const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
            registerModal.hide();
        });
    }
    
    // Faculty scroll function
    window.scrollFaculty = function(direction) {
        const facultyRow = document.getElementById('facultyRow');
        const scrollAmount = 300; // Adjust scroll amount as needed
        
        if (direction === 'left') {
            facultyRow.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else if (direction === 'right') {
            facultyRow.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };
    
    // Admin scroll function
    window.scrollAdmin = function(direction) {
        const adminRow = document.getElementById('adminRow');
        const scrollAmount = 300; // Adjust scroll amount as needed
        
        if (direction === 'left') {
            adminRow.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            adminRow.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Course enrollment button click event
    // const enrollButtons = document.querySelectorAll('.btn-outline-primary');
    
    // enrollButtons.forEach(button => {
    //     button.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         const courseName = this.closest('.card-body').querySelector('.card-title').textContent;
    //         alert(`Thank you for your interest in "${courseName}"! Enrollment form will open shortly.`);
    //     });
    // });
    
    // Category enrollment button click event
    const categoryEnrollButtons = document.querySelectorAll('.category-box .btn');
    
    categoryEnrollButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const courseName = this.previousElementSibling.textContent;
            const categoryName = this.closest('.category-box').querySelector('h4').textContent;
            alert(`You're enrolling in "${courseName}" from ${categoryName} category. Enrollment form will open shortly.`);
        });
    });
    
    // Newsletter subscription form
    const newsletterForm = document.querySelector('footer form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value.trim() === '') {
                alert('Please enter your email address.');
                return;
            }
            
            alert(`Thank you for subscribing to our newsletter with ${emailInput.value}!`);
            emailInput.value = '';
        });
    }
    
    // Add smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkIfInView() {
        const windowHeight = window.innerHeight;
        const windowTopPosition = window.scrollY;
        const windowBottomPosition = windowTopPosition + windowHeight;
        
        animateElements.forEach(element => {
            const elementHeight = element.offsetHeight;
            const elementTopPosition = element.offsetTop;
            const elementBottomPosition = elementTopPosition + elementHeight;
            
            if (
                (elementBottomPosition >= windowTopPosition) && 
                (elementTopPosition <= windowBottomPosition)
            ) {
                element.classList.add('animated');
            }
        });
    }
    
    // Check elements on load
    checkIfInView();
    
    // Check elements on scroll
    window.addEventListener('scroll', checkIfInView);
    
    // Mobile menu toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        document.addEventListener('click', function(e) {
            const isNavbarToggler = navbarToggler.contains(e.target);
            const isNavbarCollapse = navbarCollapse.contains(e.target);
            
            if (!isNavbarToggler && !isNavbarCollapse && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    }
});