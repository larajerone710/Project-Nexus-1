// Toggle between Login and Signup
function showSignup() {
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.signup').style.display = 'block';
  }
  
  function showLogin() {
    document.querySelector('.signup').style.display = 'none';
    document.querySelector('.login').style.display = 'block';
  }
  
  // Basic Login Validation
  function validateLogin() {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
  
    if (email === "" || password === "") {
      document.getElementById('login-error').textContent = "Please fill in all fields.";
      return false;
    }
    return true;
  }
  
  // Basic Signup Validation
  function validateSignup() {
    let name = document.getElementById('signup-name').value;
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;
  
    if (name === "" || email === "" || password === "") {
      document.getElementById('signup-error').textContent = "Please fill in all fields.";
      return false;
    }
    return true;
  }
  