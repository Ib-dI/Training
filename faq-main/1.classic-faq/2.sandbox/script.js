console.log('connecté')
const questions = document.querySelectorAll('.question')

questions.forEach((item) =>{
    // console.log(item.nextElementSibling)
    item.addEventListener('click', ()=>{
        item.nextElementSibling.classList.toggle('visible')
        // console.log(item.firstElementChild)
        item.firstElementChild.classList.toggle('rotation')
    })
})