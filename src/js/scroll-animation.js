 
const html = document.querySelector('html')
const body = document.querySelector('body')
const main = document.querySelector('.main')
const mainjs = document.querySelectorAll('.mainjs')
// const cloud = document.querySelector('.cloud')
// const spaceShip = document.querySelector('.spaceShip')
const cloud_star=document.querySelector('.cloud_star-inner')
const stars = document.querySelectorAll('.stars')
const star_large = document.querySelectorAll('.star_large')
const main_size = main.getBoundingClientRect()
const scroll_mouse = document.querySelector('.scroll-mouse')
const about = document.querySelector('.about')
const someSkillJs = document.querySelector('.some-skill-js')
const findMeJS=document.querySelector('.findmejs')
const planets = document.querySelectorAll('.planet')
const footer = document.querySelector('footer')



let windowWidth = window.innerWidth





html.addEventListener('wheel',()=>{
    let footerSize = footer.getBoundingClientRect()
    
})





// function logScrollDirection() {
//     var previous = window.scrollY;
//     window.addEventListener('scroll', function(){
//         window.scrollY > previous ? console.log('down') : console.log('up');
//         previous = window.scrollY;
//     });
// }
// logScrollDirection()
scroll_mouse.addEventListener('click',()=>{
    html.scrollTop=main_size.height+200
})


    
window.addEventListener('scroll',(_event)=>{
    var y = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
    
    
    if (y >750) {
        about.style.opacity=1
    }
    if(y >1000){
        someSkillJs.style.opacity=1
          
    }
    if (y >1100) {
        findMeJS.style.opacity=1 
        
    }
    for (let j = 0; j < planets.length; j++) {
        if (windowWidth>1100) {
            
        
        if (y >1300 ) {
            
            planets[j].style.opacity=1
        }
    }
    else{
        planets[j].style.opacity=1
    }
    
    }
    
    
   
}) 

    const loop = ()=>{
        requestAnimationFrame(loop)
        var y = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
        let translate = 0
        
     
        
     
    for (let i = 0; i < stars.length; i++) {
        stars[i].style.transform=`translateY(-${translate}px)`   
    } 
      
     if (windowWidth>1100) {
         
     
    if (translate<1700) {
        cloud_star.style.transform=`translateY(${translate}px)`
    }
}
    
    
    
    
    
    if(y <= main_size.height){
        main.style.opacity=1-(y/main_size.height)
        for (let i = 0; i < 2; i++) {
            mainjs[i].style.transform=`translateX(-${(y/10)*1.4}px)` 
            mainjs[i].style.transition=`transform 0.3s linear`
        }       
    }
    else{
        main.style.opacity=0
    }    
}
loop()

