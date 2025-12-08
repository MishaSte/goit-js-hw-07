const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (form.elements.email.value === '' || form.elements.password.value === '') {
    alert('All form fields must be filled in');
  } else {
    const acc = {
      [form.elements.email.name]: form.elements.email.value,
      [form.elements.password.name]: form.elements.password.value,
    };
    console.log(acc);
    form.reset();
  }
});
