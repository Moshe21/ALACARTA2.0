const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(btn => {
  let isOpen = false;

  btn.addEventListener('click', () => {
    const menuItem = btn.parentElement;
    const subOptions = menuItem.querySelector('.sub-options');

    isOpen = !isOpen;

    if (isOpen) {
      subOptions.style.display = 'block';
      menuItem.classList.add('open');
    } else {
      subOptions.style.display = 'none';
      menuItem.classList.remove('open');
    }
  });
});