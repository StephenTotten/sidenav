// JavaScript to handle submenu toggling

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        // Toggle the "active" class on the clicked menu item
        menuItem.classList.toggle('active');
    });
});