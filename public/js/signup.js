const signupForm = document.querySelector('#signup-form');

const signupFormHandler = async (event) => {

    console.log('SIGN-UP FORM RAN!')
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
        console.log(response)
      }
    }
  };

  signupForm.addEventListener('submit', signupFormHandler);