async function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:5000/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();
        console.log(data);

        // Redirect to login page after successful registration
        window.location.href = 'login.html';
    } catch (error) {
        console.error('Error:', error);
    }
}

async function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        console.log(data);
            // Redirect to verify email page after successful login
            window.location.href = 'verify-email.html';
    } catch (error) {
        console.error('Error:', error);
    }
}


async function verifyEmail() {
    try {
        // Trigger the verifyEmail API
        const response = await fetch('http://localhost:5000/api/users/verify-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error('Error:', error);
    }
}
