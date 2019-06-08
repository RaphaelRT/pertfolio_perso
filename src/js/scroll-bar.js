const scrollBar = document.querySelector('.scroll-bar')
const html = document.querySelector('html')


window.addEventListener('scroll',()=>{
    let scroll = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop,window.pageYOffset)+ window.offSetY
    let maxScroll = html.scrollHeight
    scrollBar.style.transform=`scaleY(${(window.pageYOffset/20)/10})`
})
