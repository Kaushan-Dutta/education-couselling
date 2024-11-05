document.getElementById('mentor-login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('mentor-email').value;
    const password = document.getElementById('mentor-password').value;

    // Perform client-side validation (optional)
    if (email === "" || password === "") {
        alert("Please fill in all fields");
        return;
    }

    // Example: Send a request to the back-end for mentor login
    const mentorLoginData = {
        email: email,
        password: password
    };

    fetch('http://localhost:5000/mentor/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(mentorLoginData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Login successful!');
            window.location.href = '/mentor-dashboard.html';  // Redirect to the mentor dashboard
        } else {
            alert('Login failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
