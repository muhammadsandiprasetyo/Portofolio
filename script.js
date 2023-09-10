document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const responseDiv = document.getElementById('response');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah halaman me-reload saat form disubmit

    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'proses_form.php', true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        responseDiv.textContent = response.message;
      }
    };

    xhr.send(formData);
  });
});
