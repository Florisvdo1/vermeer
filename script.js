(() => {
  const buttons = [...document.querySelectorAll('[data-lang]')];
  const translatables = [...document.querySelectorAll('[data-nl][data-en]')];
  const instagramLink = document.getElementById('instagramLink');

  function setLang(lang) {
    document.documentElement.lang = lang;
    buttons.forEach(btn => btn.classList.toggle('is-active', btn.dataset.lang === lang));
    translatables.forEach(el => {
      const value = el.dataset[lang];
      if (value) el.textContent = value;
    });
  }

  buttons.forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.lang)));

  instagramLink?.addEventListener('click', (e) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) return;
    e.preventDefault();
    const browserUrl = 'https://www.instagram.com/oever.art/';
    const appUrl = 'instagram://user?username=oever.art';
    window.location.href = appUrl;
    setTimeout(() => window.open(browserUrl, '_blank', 'noopener'), 500);
  });

  setLang('nl');
})();
