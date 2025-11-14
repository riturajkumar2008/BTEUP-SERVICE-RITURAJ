// JavaScript for Information Technology Diploma Portal

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initModal();
    initSmoothScrolling();
    initBackToTop();
    initFormValidation();
    initCardAnimations();
    initActiveNavLink();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-primary');
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.classList.remove('bg-primary');
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
}

// Modal functionality
function initModal() {
    const modal = new bootstrap.Modal(document.getElementById('contentModal'));
    
    // Content for different sections
    const modalContent = {
        books: {
            title: 'Books & Reference Materials',
            content: `
                <div class="row">
                    <div class="col-md-6">
                        <h6 class="text-primary">Core Subjects</h6>
                        <ul class="list-unstyled">
                            <li><i class="fas fa-book me-2"></i>Programming Fundamentals</li>
                            <li><i class="fas fa-book me-2"></i>Data Structures</li>
                            <li><i class="fas fa-book me-2"></i>Database Management</li>
                            <li><i class="fas fa-book me-2"></i>Web Development</li>
                            <li><i class="fas fa-book me-2"></i>Computer Networks</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <h6 class="text-success">Reference Books</h6>
                        <ul class="list-unstyled">
                            <li><i class="fas fa-star me-2"></i>Let Us C - Yashavant Kanetkar</li>
                            <li><i class="fas fa-star me-2"></i>Data Structures - Seymour Lipschutz</li>
                            <li><i class="fas fa-star me-2"></i>Database Systems - Korth</li>
                            <li><i class="fas fa-star me-2"></i>HTML & CSS - Jon Duckett</li>
                            <li><i class="fas fa-star me-2"></i>Computer Networks - Tanenbaum</li>
                        </ul>
                    </div>
                </div>
            `
        },
        questions: {
            title: 'Important Questions',
            content: `
                <div class="accordion" id="questionsAccordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                Programming Fundamentals
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#questionsAccordion">
                            <div class="accordion-body">
                                <ul>
                                    <li>Explain the concept of variables and data types</li>
                                    <li>Write a program to find factorial of a number</li>
                                    <li>Explain loops and their types</li>
                                    <li>Write a program to sort an array</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                Data Structures
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#questionsAccordion">
                            <div class="accordion-body">
                                <ul>
                                    <li>Explain Stack and Queue with examples</li>
                                    <li>Write algorithm for Binary Search</li>
                                    <li>Explain Linked List operations</li>
                                    <li>Compare Array vs Linked List</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        previous: {
            title: 'Previous Year Question Papers',
            content: `
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body text-center">
                                <i class="fas fa-file-pdf fa-2x text-danger mb-2"></i>
                                <h6>2023 Question Paper</h6>
                                <button class="btn btn-sm btn-outline-primary">Download</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body text-center">
                                <i class="fas fa-file-pdf fa-2x text-danger mb-2"></i>
                                <h6>2022 Question Paper</h6>
                                <button class="btn btn-sm btn-outline-primary">Download</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body text-center">
                                <i class="fas fa-file-pdf fa-2x text-danger mb-2"></i>
                                <h6>2021 Question Paper</h6>
                                <button class="btn btn-sm btn-outline-primary">Download</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        notes: {
            title: 'Study Notes & Summaries',
            content: `
                <div class="row">
                    <div class="col-md-6">
                        <h6 class="text-primary">Quick Notes</h6>
                        <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action">
                                <i class="fas fa-file-alt me-2"></i>Programming Basics Summary
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <i class="fas fa-file-alt me-2"></i>Data Structures Cheat Sheet
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <i class="fas fa-file-alt me-2"></i>Database Concepts Notes
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h6 class="text-success">Chapter-wise Notes</h6>
                        <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action">
                                <i class="fas fa-book-open me-2"></i>Chapter 1: Introduction to Programming
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <i class="fas fa-book-open me-2"></i>Chapter 2: Control Structures
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <i class="fas fa-book-open me-2"></i>Chapter 3: Arrays and Strings
                            </a>
                        </div>
                    </div>
                </div>
            `
        },
        career: {
            title: 'Career Guidance',
            content: `
                <div class="row">
                    <div class="col-md-6">
                        <h6 class="text-primary">Career Paths</h6>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <strong>Software Developer</strong><br>
                                <small class="text-muted">Develop applications and software solutions</small>
                            </li>
                            <li class="list-group-item">
                                <strong>Web Developer</strong><br>
                                <small class="text-muted">Create websites and web applications</small>
                            </li>
                            <li class="list-group-item">
                                <strong>Database Administrator</strong><br>
                                <small class="text-muted">Manage and maintain databases</small>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <h6 class="text-success">Skills Required</h6>
                        <div class="row">
                            <div class="col-6">
                                <span class="badge bg-primary me-1 mb-1">Java</span>
                                <span class="badge bg-primary me-1 mb-1">Python</span>
                                <span class="badge bg-primary me-1 mb-1">JavaScript</span>
                                <span class="badge bg-primary me-1 mb-1">HTML/CSS</span>
                            </div>
                            <div class="col-6">
                                <span class="badge bg-success me-1 mb-1">SQL</span>
                                <span class="badge bg-success me-1 mb-1">Git</span>
                                <span class="badge bg-success me-1 mb-1">React</span>
                                <span class="badge bg-success me-1 mb-1">Node.js</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        projects: {
            title: 'IT Projects',
            content: `
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Student Management System</h6>
                                <p class="card-text">A complete system to manage student records, attendance, and grades.</p>
                                <span class="badge bg-primary">Java</span>
                                <span class="badge bg-secondary">MySQL</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">E-commerce Website</h6>
                                <p class="card-text">Online shopping platform with user authentication and payment integration.</p>
                                <span class="badge bg-primary">HTML/CSS</span>
                                <span class="badge bg-warning">JavaScript</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Library Management System</h6>
                                <p class="card-text">System to manage books, members, and borrowing operations.</p>
                                <span class="badge bg-primary">Python</span>
                                <span class="badge bg-info">SQLite</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        dsa: {
            title: 'Data Structures & Algorithms',
            content: `
                <div class="row">
                    <div class="col-md-6">
                        <h6 class="text-primary">Data Structures</h6>
                        <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action">
                                <i class="fas fa-layer-group me-2"></i>Arrays and Strings
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <i class="fas fa-link me-2"></i>Linked Lists
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <i class="fas fa-archive me-2"></i>Stacks and Queues
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <i class="fas fa-tree me-2"></i>Trees and Graphs
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h6 class="text-success">Algorithms</h6>
                        <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action">
                                <i class="fas fa-sort me-2"></i>Sorting Algorithms
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <i class="fas fa-search me-2"></i>Searching Algorithms
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <i class="fas fa-route me-2"></i>Graph Algorithms
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <i class="fas fa-calculator me-2"></i>Dynamic Programming
                            </a>
                        </div>
                    </div>
                </div>
            `
        },
        development: {
            title: 'Development Resources',
            content: `
                <div class="row">
                    <div class="col-md-4">
                        <h6 class="text-primary">Web Development</h6>
                        <ul class="list-unstyled">
                            <li><i class="fab fa-html5 me-2 text-danger"></i>HTML5</li>
                            <li><i class="fab fa-css3-alt me-2 text-primary"></i>CSS3</li>
                            <li><i class="fab fa-js-square me-2 text-warning"></i>JavaScript</li>
                            <li><i class="fab fa-react me-2 text-info"></i>React.js</li>
                            <li><i class="fab fa-node-js me-2 text-success"></i>Node.js</li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h6 class="text-success">Mobile Development</h6>
                        <ul class="list-unstyled">
                            <li><i class="fab fa-android me-2 text-success"></i>Android Development</li>
                            <li><i class="fab fa-apple me-2 text-dark"></i>iOS Development</li>
                            <li><i class="fab fa-react me-2 text-info"></i>React Native</li>
                            <li><i class="fab fa-flutter me-2 text-primary"></i>Flutter</li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h6 class="text-warning">Tools & Technologies</h6>
                        <ul class="list-unstyled">
                            <li><i class="fab fa-git-alt me-2 text-danger"></i>Git & GitHub</li>
                            <li><i class="fab fa-docker me-2 text-primary"></i>Docker</li>
                            <li><i class="fab fa-aws me-2 text-warning"></i>AWS</li>
                            <li><i class="fab fa-google me-2 text-success"></i>Google Cloud</li>
                        </ul>
                    </div>
                </div>
            `
        },
                 quiz: {
             title: 'Interactive Quizzes',
             content: `
                 <div class="row">
                     <div class="col-md-6">
                         <h6 class="text-purple">Subject-wise Quizzes</h6>
                         <div class="list-group">
                             <a href="#" class="list-group-item list-group-item-action" onclick="startQuiz('programming')">
                                 <i class="fas fa-code me-2 text-primary"></i>Programming Fundamentals Quiz
                                 <span class="badge bg-primary float-end">10 Questions</span>
                             </a>
                             <a href="#" class="list-group-item list-group-item-action" onclick="startQuiz('dsa')">
                                 <i class="fas fa-layer-group me-2 text-success"></i>Data Structures Quiz
                                 <span class="badge bg-success float-end">15 Questions</span>
                             </a>
                             <a href="#" class="list-group-item list-group-item-action" onclick="startQuiz('database')">
                                 <i class="fas fa-database me-2 text-info"></i>Database Management Quiz
                                 <span class="badge bg-info float-end">12 Questions</span>
                             </a>
                             <a href="#" class="list-group-item list-group-item-action" onclick="startQuiz('web')">
                                 <i class="fas fa-globe me-2 text-warning"></i>Web Development Quiz
                                 <span class="badge bg-warning float-end">8 Questions</span>
                             </a>
                         </div>
                     </div>
                     <div class="col-md-6">
                         <h6 class="text-purple">Quick Assessment</h6>
                         <div class="card">
                             <div class="card-body">
                                 <h6 class="card-title">Daily Challenge</h6>
                                 <p class="card-text">Test your knowledge with our daily IT challenge questions.</p>
                                 <button class="btn btn-purple btn-sm" onclick="startQuiz('daily')">Start Challenge</button>
                             </div>
                         </div>
                         <div class="card mt-3">
                             <div class="card-body">
                                 <h6 class="card-title">Progress Tracker</h6>
                                 <div class="progress mb-2">
                                     <div class="progress-bar bg-purple" style="width: 75%">75%</div>
                                 </div>
                                 <small class="text-muted">Overall Quiz Performance</small>
                             </div>
                         </div>
                     </div>
                 </div>
                 
                 <!-- Quiz Interface -->
                 <div id="quizInterface" class="mt-4" style="display: none;">
                     <div class="card">
                         <div class="card-header bg-purple text-white">
                             <div class="d-flex justify-content-between align-items-center">
                                 <h5 class="mb-0" id="quizTitle">Programming Fundamentals Quiz</h5>
                                 <div>
                                     <span class="badge bg-light text-purple me-2" id="questionCounter">Question 1/10</span>
                                     <span class="badge bg-light text-purple" id="timer">Time: 00:30</span>
                                 </div>
                             </div>
                         </div>
                         <div class="card-body">
                             <div id="questionContainer">
                                 <h6 class="mb-3" id="questionText">What is the primary purpose of a variable in programming?</h6>
                                 <div class="quiz-options">
                                     <div class="form-check mb-2">
                                         <input class="form-check-input" type="radio" name="quizOption" id="option1" value="1">
                                         <label class="form-check-label" for="option1">
                                             To store and manipulate data
                                         </label>
                                     </div>
                                     <div class="form-check mb-2">
                                         <input class="form-check-input" type="radio" name="quizOption" id="option2" value="2">
                                         <label class="form-check-label" for="option2">
                                             To create loops and conditions
                                         </label>
                                     </div>
                                     <div class="form-check mb-2">
                                         <input class="form-check-input" type="radio" name="quizOption" id="option3" value="3">
                                         <label class="form-check-label" for="option3">
                                             To display output on screen
                                         </label>
                                     </div>
                                     <div class="form-check mb-2">
                                         <input class="form-check-input" type="radio" name="quizOption" id="option4" value="4">
                                         <label class="form-check-label" for="option4">
                                             To connect to databases
                                         </label>
                                     </div>
                                 </div>
                                 <div class="d-flex justify-content-between mt-4">
                                     <button class="btn btn-outline-purple" id="prevBtn" onclick="previousQuestion()" disabled>Previous</button>
                                     <button class="btn btn-purple" id="nextBtn" onclick="nextQuestion()">Next</button>
                                 </div>
                             </div>
                             
                             <div id="quizResults" style="display: none;">
                                 <div class="text-center">
                                     <i class="fas fa-trophy fa-3x text-purple mb-3"></i>
                                     <h4 class="text-purple">Quiz Completed!</h4>
                                     <p class="lead">Your Score: <span id="finalScore" class="fw-bold text-purple">8/10</span></p>
                                     <p class="text-muted">Percentage: <span id="percentage" class="fw-bold">80%</span></p>
                                     <div class="progress mb-3">
                                         <div class="progress-bar bg-purple" id="scoreProgress" style="width: 80%"></div>
                                     </div>
                                     <button class="btn btn-purple me-2" onclick="retakeQuiz()">Retake Quiz</button>
                                     <button class="btn btn-outline-purple" onclick="showAnswers()">View Answers</button>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 
                 <div class="row mt-4">
                     <div class="col-12">
                         <h6 class="text-purple">Quiz Features</h6>
                         <div class="row">
                             <div class="col-md-3">
                                 <div class="text-center">
                                     <i class="fas fa-clock fa-2x text-purple mb-2"></i>
                                     <p class="mb-0"><strong>Timed Quizzes</strong></p>
                                     <small class="text-muted">Test under pressure</small>
                                 </div>
                             </div>
                             <div class="col-md-3">
                                 <div class="text-center">
                                     <i class="fas fa-chart-line fa-2x text-purple mb-2"></i>
                                     <p class="mb-0"><strong>Performance Analytics</strong></p>
                                     <small class="text-muted">Track your progress</small>
                                 </div>
                             </div>
                             <div class="col-md-3">
                                 <div class="text-center">
                                     <i class="fas fa-trophy fa-2x text-purple mb-2"></i>
                                     <p class="mb-0"><strong>Leaderboards</strong></p>
                                     <small class="text-muted">Compete with peers</small>
                                 </div>
                             </div>
                             <div class="col-md-3">
                                 <div class="text-center">
                                     <i class="fas fa-certificate fa-2x text-purple mb-2"></i>
                                     <p class="mb-0"><strong>Certificates</strong></p>
                                     <small class="text-muted">Earn achievements</small>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             `
         },
         admin: {
             title: 'Admin Panel',
             content: `
                 <div class="row">
                     <div class="col-md-6">
                         <h6 class="text-indigo">Content Management</h6>
                         <div class="list-group">
                             <a href="#" class="list-group-item list-group-item-action">
                                 <i class="fas fa-book me-2 text-primary"></i>Manage Books & Resources
                             </a>
                             <a href="#" class="list-group-item list-group-item-action">
                                 <i class="fas fa-question-circle me-2 text-success"></i>Update Questions
                             </a>
                             <a href="#" class="list-group-item list-group-item-action">
                                 <i class="fas fa-file-alt me-2 text-info"></i>Edit Study Notes
                             </a>
                             <a href="#" class="list-group-item list-group-item-action">
                                 <i class="fas fa-project-diagram me-2 text-warning"></i>Manage Projects
                             </a>
                         </div>
                     </div>
                     <div class="col-md-6">
                         <h6 class="text-indigo">User Management</h6>
                         <div class="list-group">
                             <a href="#" class="list-group-item list-group-item-action">
                                 <i class="fas fa-users me-2 text-primary"></i>Student Accounts
                             </a>
                             <a href="#" class="list-group-item list-group-item-action">
                                 <i class="fas fa-user-graduate me-2 text-success"></i>Faculty Access
                             </a>
                             <a href="#" class="list-group-item list-group-item-action">
                                 <i class="fas fa-chart-bar me-2 text-info"></i>Analytics Dashboard
                             </a>
                             <a href="#" class="list-group-item list-group-item-action">
                                 <i class="fas fa-cog me-2 text-warning"></i>System Settings
                             </a>
                         </div>
                     </div>
                 </div>
                 <div class="row mt-4">
                     <div class="col-12">
                         <h6 class="text-indigo">Quick Stats</h6>
                         <div class="row">
                             <div class="col-md-3">
                                 <div class="card text-center">
                                     <div class="card-body">
                                         <i class="fas fa-users fa-2x text-primary mb-2"></i>
                                         <h5 class="card-title">1,250</h5>
                                         <p class="card-text">Total Students</p>
                                     </div>
                                 </div>
                             </div>
                             <div class="col-md-3">
                                 <div class="card text-center">
                                     <div class="card-body">
                                         <i class="fas fa-book fa-2x text-success mb-2"></i>
                                         <h5 class="card-title">45</h5>
                                         <p class="card-text">Resources</p>
                                     </div>
                                 </div>
                             </div>
                             <div class="col-md-3">
                                 <div class="card text-center">
                                     <div class="card-body">
                                         <i class="fas fa-quiz fa-2x text-info mb-2"></i>
                                         <h5 class="card-title">89%</h5>
                                         <p class="card-text">Quiz Completion</p>
                                     </div>
                                 </div>
                             </div>
                             <div class="col-md-3">
                                 <div class="card text-center">
                                     <div class="card-body">
                                         <i class="fas fa-chart-line fa-2x text-warning mb-2"></i>
                                         <h5 class="card-title">92%</h5>
                                         <p class="card-text">Satisfaction Rate</p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div class="row mt-4">
                     <div class="col-12">
                         <div class="alert alert-info">
                             <i class="fas fa-info-circle me-2"></i>
                             <strong>Admin Access Required:</strong> This section is restricted to authorized administrators only. Please contact the system administrator for access credentials.
                         </div>
                     </div>
                 </div>
             `
         }
     };

    // Global function to open modal
    window.openModal = function(type) {
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        
        if (modalContent[type]) {
            modalTitle.textContent = modalContent[type].title;
            modalBody.innerHTML = modalContent[type].content;
            modal.show();
        }
    };
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Back to top functionality
function initBackToTop() {
    // Create back to top button
    const backToTopBtn = document.createElement('a');
    backToTopBtn.href = '#';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);

    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Form validation
function initFormValidation() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const message = form.querySelector('textarea').value;
            
            if (name && email && message) {
                showAlert('Message sent successfully!', 'success');
                form.reset();
            } else {
                showAlert('Please fill in all fields.', 'danger');
            }
        });
    }
}

// Show alert messages
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const container = document.querySelector('.container');
    container.insertBefore(alertDiv, container.firstChild);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 5000);
}

// Card animations
function initCardAnimations() {
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// Active navigation link
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Add loading animation to buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn') && !e.target.classList.contains('btn-close')) {
        const originalText = e.target.innerHTML;
        e.target.innerHTML = '<span class="loading"></span> Loading...';
        e.target.disabled = true;
        
        setTimeout(() => {
            e.target.innerHTML = originalText;
            e.target.disabled = false;
        }, 2000);
    }
});

// Quiz functionality
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let quizTimer = null;
let timeLeft = 30;

// Quiz questions database
const quizQuestions = {
    programming: {
        title: 'Programming Fundamentals Quiz',
        questions: [
            {
                question: 'What is the primary purpose of a variable in programming?',
                options: [
                    'To store and manipulate data',
                    'To create loops and conditions',
                    'To display output on screen',
                    'To connect to databases'
                ],
                correct: 1
            },
            {
                question: 'Which of the following is NOT a data type in most programming languages?',
                options: [
                    'Integer',
                    'String',
                    'Boolean',
                    'Loop'
                ],
                correct: 4
            },
            {
                question: 'What does the "if" statement do in programming?',
                options: [
                    'Creates a loop',
                    'Makes a decision based on a condition',
                    'Defines a function',
                    'Declares a variable'
                ],
                correct: 2
            },
            {
                question: 'Which loop is used when you know the number of iterations?',
                options: [
                    'While loop',
                    'For loop',
                    'Do-while loop',
                    'If-else loop'
                ],
                correct: 2
            },
            {
                question: 'What is the purpose of a function in programming?',
                options: [
                    'To store data',
                    'To repeat code',
                    'To organize and reuse code',
                    'To create variables'
                ],
                correct: 3
            }
        ]
    },
    dsa: {
        title: 'Data Structures Quiz',
        questions: [
            {
                question: 'Which data structure follows LIFO principle?',
                options: [
                    'Queue',
                    'Stack',
                    'Array',
                    'Linked List'
                ],
                correct: 2
            },
            {
                question: 'What is the time complexity of searching in a binary search tree?',
                options: [
                    'O(1)',
                    'O(log n)',
                    'O(n)',
                    'O(n²)'
                ],
                correct: 2
            },
            {
                question: 'Which sorting algorithm has the best average-case performance?',
                options: [
                    'Bubble Sort',
                    'Quick Sort',
                    'Selection Sort',
                    'Insertion Sort'
                ],
                correct: 2
            },
            {
                question: 'What is a linked list?',
                options: [
                    'A collection of arrays',
                    'A linear data structure with nodes',
                    'A tree structure',
                    'A hash table'
                ],
                correct: 2
            },
            {
                question: 'Which data structure is best for implementing a queue?',
                options: [
                    'Stack',
                    'Array',
                    'Linked List',
                    'Tree'
                ],
                correct: 3
            }
        ]
    },
    database: {
        title: 'Database Management Quiz',
        questions: [
            {
                question: 'What does SQL stand for?',
                options: [
                    'Structured Query Language',
                    'Simple Query Language',
                    'Standard Query Language',
                    'System Query Language'
                ],
                correct: 1
            },
            {
                question: 'Which SQL command is used to retrieve data?',
                options: [
                    'INSERT',
                    'SELECT',
                    'UPDATE',
                    'DELETE'
                ],
                correct: 2
            },
            {
                question: 'What is a primary key?',
                options: [
                    'A foreign key reference',
                    'A unique identifier for a record',
                    'A data type',
                    'A table name'
                ],
                correct: 2
            },
            {
                question: 'Which database model is most commonly used today?',
                options: [
                    'Hierarchical',
                    'Network',
                    'Relational',
                    'Object-oriented'
                ],
                correct: 3
            },
            {
                question: 'What is normalization in database design?',
                options: [
                    'Adding more data',
                    'Organizing data to reduce redundancy',
                    'Creating backups',
                    'Deleting old records'
                ],
                correct: 2
            }
        ]
    },
    web: {
        title: 'Web Development Quiz',
        questions: [
            {
                question: 'What does HTML stand for?',
                options: [
                    'Hyper Text Markup Language',
                    'High Tech Modern Language',
                    'Home Tool Markup Language',
                    'Hyperlink and Text Markup Language'
                ],
                correct: 1
            },
            {
                question: 'Which CSS property controls text color?',
                options: [
                    'text-color',
                    'color',
                    'font-color',
                    'text-style'
                ],
                correct: 2
            },
            {
                question: 'What is JavaScript primarily used for?',
                options: [
                    'Styling web pages',
                    'Creating web page structure',
                    'Adding interactivity to web pages',
                    'Storing data'
                ],
                correct: 3
            },
            {
                question: 'Which tag is used to create a hyperlink?',
                options: [
                    '<link>',
                    '<a>',
                    '<href>',
                    '<url>'
                ],
                correct: 2
            },
            {
                question: 'What does CSS stand for?',
                options: [
                    'Computer Style Sheets',
                    'Creative Style Sheets',
                    'Cascading Style Sheets',
                    'Colorful Style Sheets'
                ],
                correct: 3
            }
        ]
    }
};

// Global quiz functions
window.startQuiz = function(quizType) {
    currentQuiz = quizQuestions[quizType];
    currentQuestionIndex = 0;
    userAnswers = [];
    timeLeft = 30;
    
    document.getElementById('quizInterface').style.display = 'block';
    document.getElementById('quizTitle').textContent = currentQuiz.title;
    
    loadQuestion();
    startTimer();
};

window.nextQuestion = function() {
    // Save current answer
    const selectedOption = document.querySelector('input[name="quizOption"]:checked');
    if (selectedOption) {
        userAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= currentQuiz.questions.length) {
        showResults();
    } else {
        loadQuestion();
    }
};

window.previousQuestion = function() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
};

function loadQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('questionCounter').textContent = `Question ${currentQuestionIndex + 1}/${currentQuiz.questions.length}`;
    
    // Update options
    for (let i = 1; i <= 4; i++) {
        const option = document.getElementById(`option${i}`);
        const label = option.nextElementSibling;
        label.textContent = question.options[i - 1];
        option.checked = false;
    }
    
    // Restore user's previous answer if exists
    if (userAnswers[currentQuestionIndex] !== undefined) {
        document.getElementById(`option${userAnswers[currentQuestionIndex]}`).checked = true;
    }
    
    // Update button states
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').textContent = currentQuestionIndex === currentQuiz.questions.length - 1 ? 'Finish' : 'Next';
};

function startTimer() {
    clearInterval(quizTimer);
    timeLeft = 30;
    updateTimer();
    
    quizTimer = setInterval(() => {
        timeLeft--;
        updateTimer();
        
        if (timeLeft <= 0) {
            clearInterval(quizTimer);
            nextQuestion();
        }
    }, 1000);
};

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

function showResults() {
    clearInterval(quizTimer);
    
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
    
    let correctAnswers = 0;
    for (let i = 0; i < currentQuiz.questions.length; i++) {
        if (userAnswers[i] === currentQuiz.questions[i].correct) {
            correctAnswers++;
        }
    }
    
    const percentage = Math.round((correctAnswers / currentQuiz.questions.length) * 100);
    
    document.getElementById('finalScore').textContent = `${correctAnswers}/${currentQuiz.questions.length}`;
    document.getElementById('percentage').textContent = `${percentage}%`;
    document.getElementById('scoreProgress').style.width = `${percentage}%`;
};

window.retakeQuiz = function() {
    currentQuestionIndex = 0;
    userAnswers = [];
    document.getElementById('questionContainer').style.display = 'block';
    document.getElementById('quizResults').style.display = 'none';
    loadQuestion();
    startTimer();
};

window.showAnswers = function() {
    // Implementation for showing correct answers
    alert('Answers feature coming soon!');
};

// Add some interactive features
console.log('Information Technology Diploma Portal loaded successfully! 🚀');
