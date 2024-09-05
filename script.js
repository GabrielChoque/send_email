const btn = document.getElementById('button');

// Mostrar/Ocultar la contraseña
const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('message');

togglePassword.addEventListener('click', function () {
    // Alterna el tipo de input entre 'password' y 'text'
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    
    // Cambia el ícono del ojo (puedes usar un ícono o cambiar el texto)
    this.textContent = type === 'password' ? '👁️' : '🙈';
});

// Enviar formulario con EmailJS
document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_pozj876';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
        }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
        });
});
