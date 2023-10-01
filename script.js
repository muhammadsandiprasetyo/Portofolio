document.addEventListener('click', function (event) {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  // Periksa apakah navbar terbuka
  const isNavbarOpen = navbarCollapse.classList.contains('show');

  // Periksa apakah yang diklik adalah di luar navbar dan toggle navbar
  if (isNavbarOpen && !navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
    // Tutup navbar
    navbarToggler.click();
  }
});
