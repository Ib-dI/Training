// Navigation

const nav = document.querySelector('.main-nav')
const navToggler = document.querySelector('.nav-toggler')
const togglerImg = navToggler.querySelector('img')
const loLinks = document.querySelector('.lock')


navToggler.addEventListener('click', togglerNav)

function togglerNav(){
    nav.classList.toggle("active")
    loLinks.classList.toggle('bar')
    if(togglerImg.src.includes('hamburger')) {
        togglerImg.src = './assets/img/cross.svg'
        
    }else{
        togglerImg.src = './assets/img/hamburger.svg'

    }
    
}
const ytLink = "https://www.youtube.com/embed/Mdcw3Sb98DA"

document.addEventListener("DOMContentLoaded", function() {
    var div,
      v = document.getElementsByClassName("youtube-img");
      
    for (let n = 0; n < v.length; n++) {
      div = document.createElement("div");
      div.setAttribute("data-id", v[n].dataset.id);
      div.innerHTML = noThumb();
      div.onclick = noIframe;
      v[n].appendChild(div);
    }
  });
  
function noThumb() {
    var thumb = '<img src="./assets/img/Video.jpg">',
      play = '<div class="play"></div>';
    return thumb + play;
  }
console.log(noThumb("Mdcw3Sb98DA"))



function noIframe() {
    let iframe = document.createElement('iframe')
    var embed =
    "https://www.youtube-nocookie.com/embed/ID?autoplay=1&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0";
  iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "1");
  iframe.setAttribute("allow", "autoplay; encrypted-media");
  this.parentNode.replaceChild(iframe, this);
}
