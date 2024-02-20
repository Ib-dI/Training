
const btnboxes = [...document.querySelectorAll('.btn')]
const linksNav = [...document.querySelectorAll('.icone')]

const btnRemove = document.querySelector('#btn-remove')
const btnAdd = document.querySelector('#btn-add')

const containerG = document.querySelector('.groups')
const block = document.querySelectorAll('.bloc')

activeImg(btnboxes, 'active-btn')
activeImg(linksNav, 'active-icone')


linksNav.forEach((item) => {
    item.addEventListener('click', changerImages)
})

function changerImages() {
    // Sélectionner tous les éléments parent de la liste d'images
    const parents = document.querySelectorAll('.icone');
    
    // Parcourir chaque élément parent
    parents.forEach(parent => {
        // Sélectionner l'image enfant de cet élément parent
        const image = parent.querySelector('.svg');
        const rae = image.src.split('/').pop()

        // Vérifier si l'élément parent a la classe active
        if (parent.classList.contains('active-icone')) {
            // Changer l'URL de l'image si l'élément parent a la classe active
            
            image.src = `./assets/ico/active/${rae}`;
        } else {
            // Changer l'URL de l'image si l'élément parent n'a pas la classe active            
            image.src = `./assets/ico/normal/${rae}`;
        
        }
    });
}

btnRemove.addEventListener('click', () => {
    block.forEach((item) => {
        if(item.classList.contains('list')){
            item.classList.remove('list')
        }
    })
    containerG.classList.remove('accounts-list')
})

btnAdd.addEventListener('click', () => {
    block.forEach((item) => {
        if(!item.classList.contains('list')){
            item.classList.add('list')
        }
    })
    containerG.classList.add('accounts-list')
})

// function activebtn(liste, active) {
//     liste.forEach(item => {
//         const img = [...item.querySelectorAll('img')]
        

//         item.addEventListener('click', () => {
//             liste.forEach((item) => {
//                 item.classList.remove(`${active}`)
        
//             })
//             item.classList.add(`${active}`)
//             img.src = `./assets/ico/active/${rae}`

//         })
//         img.forEach((img) => {
//             const rae = img.src.split('/').pop()
//             if (!item.classList.contains(`${active}`)) {
//                 console.log(rae)
//                 img.src = `./assets/ico/${rae}`
//             }
//         })

//         // if (!item.classList.contains(`${active}`)) {    
//         //     img.src = `./assets/ico/${rae}`
//         // }
//     })
// }
function activeImg(liste, active) {
    liste.forEach(item => {
        item.addEventListener('click', () => {
            liste.forEach((item) => item.classList.remove(`${active}`))
            item.classList.add(`${active}`)
        })
    })
    // changerImages()

}