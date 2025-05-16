const togglePassword = document.querySelector('.toggle-password');
const passwordField = document.querySelector('input[type="password"]');

if (togglePassword && passwordField) {
  togglePassword.addEventListener('click', () => {
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
  });
}
