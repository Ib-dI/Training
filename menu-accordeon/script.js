console.log('Hello World')

const elmNav = [...document.querySelectorAll('.list')]
const quest = document.querySelectorAll('.question')

const nav = elmNav.slice(1)

activElm(nav, 'active-list')
toggle(quest)

function toggle(qus){
    qus.forEach((item) => {
        item.addEventListener('click', () => {
            item.nextElementSibling.classList.toggle('voir')
            
            if (item.nextElementSibling.classList.contains('voir')) {
        
                item.lastElementChild.src = "./assets/icon/F7ChevronUp.svg"
                console.log('oui')
            }else {
                item.lastElementChild.src = "./assets/icon/F7ChevronDown.svg"
            }
            
        })
    })
}


function activElm (list, name) {
    list.forEach((item) => {

        item.addEventListener('click', () => {
    
            nav.forEach((item) => item.classList.remove(name))
            item.classList.add(name)
        })
    })
}