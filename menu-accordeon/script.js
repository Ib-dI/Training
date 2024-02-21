console.log('Hello World')

const elmNav = [...document.querySelectorAll('.list')]
const quest = document.querySelectorAll('.question')
const nav = elmNav.slice(1)
const faContent = [...document.querySelectorAll('.content')]

toggle(quest)

nav.forEach(item => {
    item.addEventListener('click',(e)=>{
        const target = e.target;
        
        const move = nav.findIndex(item => item.classList.contains('active-list'))
        const show = nav.indexOf(target)

        faContent[move].classList.remove('active-content')
        nav[move].classList.remove('active-list')
        faContent[show].classList.add('active-content')
        nav[show].classList.add('active-list')
    })

    const children = [...item.children];
    if (children) {
        children.forEach(child => {
            child.addEventListener('click', (e)=>{
                const target = e.target;
                e.stopPropagation();

                const indexRemove = nav.findIndex(item => item.classList.contains('active-list'))
                const indexToShow = nav.indexOf(target.parentNode)
                
                faContent[indexRemove].classList.remove('active-content')

                nav[indexRemove].classList.remove('active-list')
    
                faContent[indexToShow].classList.add('active-content')
                nav[indexToShow].classList.add('active-list')
            });
        });
    }
    
});

// function transit (e){
//     const indexRemove = nav.findIndex(item => item.classList.contains('active-list'))

//     const indexToShow = nav.indexOf(e.target)

//     faContent[indexRemove].classList.remove('active-content')

//     nav[indexRemove].classList.remove('active-list')

//     faContent[indexToShow].classList.add('active-content')
//     nav[indexToShow].classList.add('active-list')

// }
function toggle(qus){
    qus.forEach((item) => {
        item.addEventListener('click', () => {
            item.nextElementSibling.classList.toggle('voir')
            
            if (item.nextElementSibling.classList.contains('voir')) {
        
                item.lastElementChild.src = "./assets/icon/F7ChevronUp.svg"
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