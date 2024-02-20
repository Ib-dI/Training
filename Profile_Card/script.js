console.log('Hello World')

const btnFollow = document.querySelector('.btn')
const details = document.querySelector('.profile')
const container = document.querySelector('.container')



btnFollow.addEventListener('click', ()=>{
    container.classList.add('no-before')
    details.remove()
    document.body.innerHTML = `
    <div class="following">
    <div class="profile-img">
        <!-- <img src="./assets/img/karsten-winegeart-8buSHH2o6nE-unsplash.jpg" alt=""> -->
    </div>
    <div class="info">
        <h1 class="name">Sue Smythe</h1>
        <div class="grad">
            <img src="./assets/icones/graduation-cap.svg" alt="">
        <p>UI/UX designer</p>
        </div>
        
    </div>
    <div class="btn-following">
        <button class="btn-unfollow">
            Following
        </button>
        <button class="message">
            <img src="./assets/icones/envelope.svg" alt="">
            Message
        </button>
    </div>
    </div>
    `
})