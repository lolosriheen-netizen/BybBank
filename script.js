document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll('.simple-form input, .simple-form select');

  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      if (!input.value.trim()) {
        input.style.backgroundColor = '#f8d7da'; // light red background
        input.style.borderColor = '#dc3545'; // red border for better visibility
      } else {
        input.style.backgroundColor = ''; // reset to default
        input.style.borderColor = '';     // reset border color
      }
    });
  });
});
