let menuToggle = document.querySelector('.menuToggle');
let navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click',(e)=>{
    e.preventDefault();
    navigation.classList.toggle('navigation_active');
    menuToggle.classList.toggle('menuToggle_active')
})
