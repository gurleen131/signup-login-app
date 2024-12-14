// Show Signup Form when clicking "Create Account"
document.getElementById('goToSignup').addEventListener('click', function() {
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('signupFormContainer').style.display = 'block';
});

// Show Login Form when clicking "Login"
document.getElementById('goToLogin').addEventListener('click', function() {
    document.getElementById('signupFormContainer').style.display = 'none';
    document.getElementById('loginFormContainer').style.display = 'block';
});

// Signup Form Submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        // Redirect to Home page after successful signup
        if (data.message === "User created successfully") {
            window.location.href = "home.html"; // Redirect to home page
        }
    })
    .catch(error => console.error('Error:', error));
});

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        // Redirect to Home page after successful login
        if (data.message === "Login successful") {
            window.location.href = "home.html"; // Redirect to home page
        }
    })
    .catch(error => console.error('Error:', error));
});
