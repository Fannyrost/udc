const initUpdateNavbarOnScroll = () => {
  const full_navbar = document.querySelector('.full-navbar');
  if (full_navbar) {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      const notice = document.querySelector('.notice-bar');
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-white');
        notice.classList.add('notice-bar-off');
      } else {
        navbar.classList.remove('navbar-white');
        notice.classList.remove('notice-bar-off');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
