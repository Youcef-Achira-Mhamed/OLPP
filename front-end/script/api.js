const loginForm = document.getElementById('LoginForm');
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(loginForm);
    const data = {
      username: formData.get('username'),
      password: formData.get('password')
    };

    try {
      // Send POST request to the server
      const response = await axios.post('http://localhost:5000/signlog/login', data);
      
      // If login is successful
      if (response.status === 200) {
        
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('userPhoto', response.data.photo || 'default-photo-url'); // Replace 'default-photo-url' if needed
        localStorage.setItem('username', data.username);
        
        alert('Login successful!');
        window.location.href = '../index/homePage.html';
      }
    } catch (error) {
      alert(`Error: ${error}`);
    }
  });


  const signUpForm = document.getElementById('signUpForm');

  signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(signUpForm);
    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
      email: formData.get('email'),
      fname: formData.get('fname') ,
      lname: formData.get('lname'),// Collecting email for sign-up
    };

    try {
      // Send POST request to the server
      const response = await axios.post('http://localhost:5000/signlog/check-email', data);
      
      // If sign-up is successful
      if (response.status === 200) {  // Typically, a successful sign-up returns a 201 Created status
        alert('Sign-up successful! A confirmation code has been sent to your email.');

        // Redirect to a confirmation page or the login page
        window.location.href = '/confirm';  // Replace with your actual confirmation page URL
      }
    } catch (error) {
      alert(`Error: ${error.response.data.message || error.message}`);
    }
  });