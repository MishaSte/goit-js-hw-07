const form = document.querySelector('.login-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (form.elements.email.value === '' || form.elements.password.value === '') {
    alert('All form fields must be filled in');
  } else {
    const acc = {
      [form.elements.email.name]: form.elements.email.value.trim(),
      [form.elements.password.name]: form.elements.password.value.trim(),
    };
    console.log(acc);
    form.reset();
  }
});
