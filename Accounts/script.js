console.log("Hello World")

const listName = [...document.querySelectorAll(".list")]
const pointShow = [...document.querySelectorAll(".points")]

const nameItem = document.querySelectorAll(".list")
const searchInput = document.querySelector(".search-input")

// listName.forEach((item) => {
    
//     const child = item.querySelector('.points')
//     if(child){
//         listName.addEventListener("mouseenter", () => {

//         if(!child.classList.contains("active-points")){
//             child.classList.add("active-points")
//         }
//     })
// }
    
// })
// listName.forEach((item) => {
//     item.addEventListener("mouseleave", ()=> {
//         const child = item.querySelector('.points')
//         child.classList.remove("active-points")
//     })
// })


activeImg(listName, 'active-list')

listName.forEach((item) => toggleHover(item, 3, 'active-points'))
// activeImg(pointShow, 'active-points')
function toggleHover(liste, gdChild, active) {
    const child = liste.querySelector(` li:nth-child(${gdChild})`)
    if(child){
        liste.addEventListener("mouseenter", () => {
            if(!child.classList.contains(active)){
                child.classList.add(active)
            }
        })

        liste.addEventListener("mouseleave", () => {
            if(child.classList.contains(active)){
                child.classList.toggle(active)
            }
        })
    }
}
function activeImg(liste, active) {
    liste.forEach(item => {
        const child = item.querySelector('.points')
        item.addEventListener('click', () => {
            liste.forEach((item) => {
                item.classList.remove(`${active}`)
                const child = item.querySelector('.points')
                if(child) {
                child.classList.remove(`active-points`)
            }
            
            })

            
            item.classList.add(`${active}`)
            if(child) {
                child.classList.add(`active-points`)
            }
        })
    })
}
searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    
    nameItem.forEach((item) => {
        const sousListe = item.querySelectorAll('.name')
        
        sousListe.forEach((item) => {
            if (!item.innerText.toLowerCase().includes(value)) {
                const parentElementLi = item.parentElement.parentElement
                parentElementLi.parentElement.style.display = "none"
            } else {
                const parentElementLi = item.parentElement.parentElement
                parentElementLi.parentElement.style.display = "flex"
            }
        })

    })
})