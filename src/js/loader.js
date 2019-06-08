const $loader = document.querySelector('.loader')


const loader = new Vivus('loader', {}, function (loader) {
    if (loader.getStatus() === 'end') {
        loader.reset().play()
    }
  })
window.addEventListener('load',()=>{
    $loader.style.display='none'
})

