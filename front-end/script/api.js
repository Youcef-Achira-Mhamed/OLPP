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
      const response = await axios.post('https://astonishing-beneficial-ocelot.glitch.me/login', data);
      
      // If login is successful
      if (response.status === 200) {
        alert('Login successful!');

        // Redirect to a specific page (e.g., dashboard)
        window.location.href = '/dashboard';  // Replace with the actual path of the page you want to navigate to
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
      const response = await axios.post('https://astonishing-beneficial-ocelot.glitch.me/check-email', data);
      
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