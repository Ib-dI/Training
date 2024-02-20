
// ! Recupere les éléments buttons
const tabs = [...document.querySelectorAll('.tab')]

tabs.forEach(tab => tab.addEventListener('click', tabsAnimation))

// ? Recupere les éléments content
const tabsContent = [...document.querySelectorAll('.tab-content')]
function tabsAnimation(e) {
    const target = e.target

    const indexRemove = tabs.findIndex(tab => tab.classList.contains('active-tab'))

    // Accessiblé pour les éléments non active
    // Indique que les éléments de la class active ne sont pas selctionnées.
    tabs[indexRemove].setAttribute('aria-selected', 'false')
    tabsContent[indexRemove].setAttribute('tabindex', '-1')

    // Enleve les éléments de la class active
    tabs[indexRemove].classList.remove('active-tab')
    tabsContent[indexRemove].classList.remove('active-tab-content')

    // Renvoie l'index de l'élément active.
    const indexToShow = tabs.indexOf(target)

    // Indiqueque l'élément est sélectionné.
    tabs[indexToShow].setAttribute('tabindex', '0')
    tabs[indexToShow].setAttribute('aria-selected', 'true')

    // Ajoute la classe active à l'élément sélection
    tabs[indexToShow].classList.add('active-tab')
    tabsContent[indexToShow].classList.add('active-tab-content')
}

tabsContent.forEach(tab  => tab.addEventListener('keydown', arrowNavigation))

let tabFocus = 0

function arrowNavigation(e) {
    
    if (e.keycode === 39 || e.keycode === 37) {
       tabs[tabFocus].setAttribute('tabindex', '-1')

       if (e.keycode === 39) {
        tabFocus++
        if (tabFocus >= tabs.length) {
            tabFocus = 0
        }
       } else if (e.keycode === 37) {
        tabFocus--
        if (tabFocus < 0) {
            tabFocus = tabs.length - 1
        }
       }
       tabs[tabFocus].setAttribute('tabindex', '0')
       tabs[tabFocus].focus()

    }
}