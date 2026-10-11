// Dark mode toggle
(function () {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  // Font Awesome's JS build swaps <i> tags for <svg>, so re-render the icon
  // each time instead of holding a reference to the original <i>.
  function setIcon(isDark) {
    themeToggle.innerHTML = isDark
      ? '<i class="fas fa-sun" aria-hidden="true"></i>'
      : '<i class="fas fa-moon" aria-hidden="true"></i>';
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    themeToggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  let saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const startDark = saved === 'dark' || (!saved && prefersDark);

  document.body.classList.toggle('dark-mode', startDark);
  setIcon(startDark);

  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    setIcon(isDark);
    try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) {}
  });
})();

// Automatic Copyright Year Updater
(function () {
  const yearElement = document.getElementById('copyright-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
})();
