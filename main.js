function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}
ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 700
  }).reveal(` 
    #benefits,
    #benefits header,
    #benefits .card
    #contact, 
    #contact header, 
    #about .content`)
 