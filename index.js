const hamburger = document.getElementById('hamburger')
const small_menu = document.getElementById('hammenu')


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    small_menu.classList.toggle('active')

})

