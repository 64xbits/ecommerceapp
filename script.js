function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Here you can perform login validation, e.g., sending the credentials to a server and checking them
    // For simplicity, let's just do a basic check
    if (username === 'admin' && password === 'password') {
      alert('Login successful');
      // Redirect to another page or perform further actions after successful login
    } else {
      alert('Invalid username or password');
    }
  }
  