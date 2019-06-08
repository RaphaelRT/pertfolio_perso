import './css/slider.styl'

import './css/reset.styl'
import './css/responsive.styl'
import './css/style.styl'

import './js/title_typed.js'
import './js/resize-cloud.js'
import './js/scroll-animation.js'
import './js/scroll-bar.js'

import './js/loader.js'

import Carousel from './js/slider.js'
import Planet from './js/planets.js'
import Stars from './js/stars.js'



import canvas_1 from './images/canvas_1.png'
import canvas_2 from './images/canvas_2.png'
import canvas_3 from './images/canvas_3.png'

import player_1 from './images/player_1.png'
import player_2 from './images/player_2.png'

import webgl_1 from './images/WebGL_1.png'
import webgl_2 from './images/WebGL_2.png'
import webgl_3 from './images/WebGL_3.png'

import japan_1 from './images/japan_1.png'
import japan_2 from './images/japan_2.png'
import japan_3 from './images/japan_3.png'

import loiDeCoco_1 from './images/loiDeCoco_1.png'
import loiDeCoco_2 from './images/loiDeCoco_2.png'
import loiDeCoco_3 from './images/loiDeCoco_3.png'

import futur_1 from './images/Futur_1.png'
import futur_2 from './images/Futur_2.png'
import futur_3 from './images/Futur_3.png'

import KeyBoard_1 from './images/KeyboardHero_1.png'
import KeyBoard_2 from './images/KeyboardHero_2.png'
import KeyBoard_3 from './images/KeyboardHero_3.png'

import douceDePo_1 from './images/DouceDePo_1.png'
import douceDePo_2 from './images/DouceDePo_2.png'

import AcmStudio_1 from './images/AcmStudioMusic_1.png'
import AcmStudio_2 from './images/AcmStudioMusic_2.png'
import AcmStudio_3 from './images/AcmStudioMusic_3.png'


const html = document.querySelector('html')
const workContainer = document.querySelector('.work')
const workContainer_size = workContainer.getBoundingClientRect()
const project_container = document.querySelector('.project-container')
const project_container_size = project_container.getBoundingClientRect()
const astronaute = document.querySelector('.astronaute')
const contact_close = document.querySelector('.contact_close')
const cloud_star=document.querySelector('.cloud_star-inner')
const close = document.querySelector('.close')
const slides = document.querySelector('.slides')
const planetWidth = [130, 140, 150, 155]
const planetResponsive = document.querySelectorAll('.planet')
let planetArray = []
let nameArray = ['planet-1', 'planet-2', 'planet-3', 'planet-4', 'planet-5', 'planet-6', 'planet-7', 'planet-8', 'planet-9', 'planet-10'] //Pour la classe du svg
let colorArray =['#0C6D11','#6727e2','#932926','#ef9d1b','#4e74ea','#f0c1cc','#494947','#f89d2a','#6727e2']
let projectName = ['canvas','Audio Player','WebGL','JapaneseCraft website','Law_recognition','Futur','KeyBoard Hero Game','Douce De Po Website','AcmStudio website']
let projectInfo= [
    'For a School project we had to use a canvas and explore what is possible with it. So i had decided to create a draw Editor',
    'For a School project we had to create an audio player.',
    'For a School project we had to use WebGl with ThreeJS and explore what is possible with it. So i had decided to create a Galaxy generator',
    'For a School project we had to choose a kickStarter Project and create a website for this. So i had decided to choose <a href="https://www.kickstarter.com/projects/2033679078/japanese-craft-arita-ware-by-michelin-chef?ref=discovery&fbclid=IwAR1iDum7b5JCvdGqaNHr7ItKUWP2rvku9VYqXrWCzCnHnLSII1qQceF3__4">japanese craft</a>',
    'For a School project we had to choose a society problem and find a solution. So i had decided to create an assistant which tell you if it is legal to do something',
    'For a School exercice we had to make an experience with animations for the theme (Futur). So i had decided to create an animation for creating 3D without WebGl',
    'For a School project we had to create a game in JavaScript. So i had decided to create a game to learn keyboard for kid',
    'For a School project we had to redesign <a href="https://www.doucedepo.fr/">Douce De Po</a>',
    'This is my first project on Wordpress as freelancer. I had created the base then my client has had content'
]
let projecTech = ['HTML <br> CSS <br> JS <br> CANVAS <br> DAT.GUI',
'HTML <br> CSS <br> JS ',
'HTML <br> CSS <br> JS <br> WEBGL <br> THREE JS <br> DAT.GUI',
'HTML <br> CSS <br> JS ',
'HTML <br> CSS <br> JS <br> SPEECH REGOGNITION API <br> WIT.AI <br> FIREBASE',
'HTML <br> CSS <br> JS ',
'HTML <br> CSS <br> JS ',
'Wordpress','Wordpress']
let projectImg = [[canvas_1,canvas_2,canvas_3],
[player_1,player_2,player_1],
[webgl_1,webgl_2,webgl_3],
[japan_1,japan_2,japan_3],
[loiDeCoco_1,loiDeCoco_2,loiDeCoco_3],
[futur_1,futur_2,futur_3],
[KeyBoard_1,KeyBoard_2,KeyBoard_3],
[douceDePo_1,douceDePo_2,douceDePo_1],
[AcmStudio_1,AcmStudio_2,AcmStudio_3]]
let linkArray=['canvas','Audio_Player','WebGL','JapaneseCraft_website','Law_recognition','Futur','KeyBoard_Hero_Game','Douce_De_Po_Website','http://acmstudiomusic.com/']

const slider_content = document.querySelectorAll('.content')
const landcape_alert = document.querySelector('.landcape-alert')
const landcape_alertSize = landcape_alert.getBoundingClientRect()
let windowWidth = window.innerWidth
let planet
let planetInfo
let additional =false
let x
let tl = new TimelineMax({
  paused: true
})
let loaded = false
let orientationchange = false
let resize 
const input = document.querySelectorAll('input')
window.addEventListener('submit',()=>{
  console.log('test');
  
  for (let i = 0; i < input.length; i++) {
    console.log(input[i].value);
    
    
  }
})





window.addEventListener('orientationchange',()=>{
  orientationchange=true  
  if(window.innerHeight > window.innerWidth){
    landcape_alert.style.display='flex'
    landcape_alert.style.opacity=1
    html.style.overflow="hidden"
    
  }
  else{
    landcape_alert.style.opacity=0
    landcape_alert.style.display='none'
    html.style.overflow="initial"
    location.reload()
  }

})
// window.addEventListener('resize',()=>{
//   resize =true
//   if (orientationchange==false && resize) {
//     location.reload()
    
//   }
// })


if (windowWidth<500) {
  for (let m = 0; m < planetResponsive.length; m++) {
    planetResponsive[m].style.display="flex"
    planetResponsive[m].style.justifyContent="center"
    
  }
}



close.addEventListener('mousedown', (_event) => {
  close.addEventListener('mouseup', (_event) => {
    project_container.style.transform=`translateX(-100%)`
    html.style.overflow="initial"
  })
})



const loop = ()=>{
  requestAnimationFrame(loop)
  project_container.style.top=`${Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)-project_container_size.height}px`
  project_container.style.height=`${window.offsetHeight}px`
  html.style.height=`${workContainer_size.y}px`
  landcape_alert.style.top=`${Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)-landcape_alertSize.height}px`
}
loop()



window.addEventListener('load', (_event) => {

  loaded = true
  const setPosition = () => {
    for (let i = 0; i < planetArray.length; i++) {
      for (let k = 0; k < planetArray.length - 1; k++) {


        if (((planetArray[i].posX + planetArray[i].height > planetArray[k].posX + planetArray[k].height) ||
            (planetArray[i].posX + planetArray[i].height < planetArray[k].posX + planetArray[k].height))) {

        } else {

          x += planetArray[i].x + planetArray[i].height

        }
      }
    }
  }





  for (let i = 0; i < 9; i++) {
    x = Math.floor(Math.random() * workContainer_size.height * 0.7)
   
    
    planet = new Planet(`.js-${i}`, nameArray[i], planetWidth[Math.floor(Math.random() * planetWidth.length)], x,projectName[i],projectInfo[i],windowWidth)
    planetInfo = planet.getInfo()
    setPosition()
    planetArray.push(planet)
    let $planet = document.querySelector(`.${planetArray[i].name}`)
    let $circle = $planet.querySelector('circle')
    let $project = document.querySelector(`.js-${i}`)
    let $project_popup = $project.querySelector(`.js-content`)
    let $project_title = document.querySelector('.project_title')
    let $project_p = document.querySelector('.project_p')
    let $discover = document.querySelector('.discover')
    let projecTech_txt = document.querySelector('.project_tech')
    let $carousels = document.querySelectorAll('.js-carousel')
   
    

   
   
    $project_popup.innerHTML=`Project : ${projectName[i]}`
          $project.style.background=`${colorArray[i]}80`

          $project_title.innerHTML=` Project : ${projectName[i]}`
          $project_p.innerHTML=`<strong> Info :</strong> <br><br>${projectInfo[i]}`
      
          

          projecTech_txt.innerHTML=`<strong> Tech :</strong> <br><br> ${projecTech[i]}`
    
  
    for(const $carousel of $carousels)
        {
        const carousel = new Carousel($carousel)
         }
    

    if (loaded == true) {

      $planet.addEventListener('mousedown', (_event) => {
        $planet.addEventListener('mouseup', (_event) => {
          $discover.setAttribute('href',linkArray[i])
          for (let j = 0; j < projectImg.length; j++) {
            let project_image= document.querySelectorAll('.project-image')
  
            if (project_image[j] != undefined) {
              project_image[j].style.width='100%'
            project_image[j].src= projectImg[i][j]
            }
          }
           
          $project_popup.innerHTML=`Project : ${projectName[i]}`
          $project.style.background=`${colorArray[i]}80`

          $project_title.innerHTML=` Project : ${projectName[i]}`
          $project_p.innerHTML=`<strong> Info :</strong> <br><br>${projectInfo[i]}`

          projecTech_txt.innerHTML=`<strong> Tech :</strong> <br><br> ${projecTech[i]}`

          project_container.style.opacity=1
          project_container.style.transform=`translateX(0%)`
          project_container.style.background=`${colorArray[i]}`
          $discover.style.background=`${colorArray[i]}`
          
          html.style.overflow="hidden" 

         })
        })
      

     
      $planet.addEventListener('mouseenter', (_event) => {
        
        _event.cancelBubble = true 
        
        tl.to(`.${planetArray[i].name}`, 0.1, {
          scaleY: 1.1,
          scaleX: 1.1,
          transformOrigin: "50% 50%",
          ease: Power0.easeNone
        })
        .to(`.js-${i}`, 0.1, {
          scaleY: 1.1,
          scaleX: 1.1,
          transformOrigin: "50% 50%",
          ease: Cubic.easeIn 
        })
        
        if ($circle == null) {} 
        else {
          $circle.style.opacity = 0.5
        }
        
        tl.play()
        

      })
      
      
      
      $planet.addEventListener('mouseleave', (_event) => {
       
        _event.cancelBubble = true
        tl.progress(0)
        tl.clear()
        tl.eventCallback("onComplete", function () {
        tl.to(`.js-${i}`, 0.1, {
          scaleY: 0,
          scaleX: 0,
          transformOrigin: "50% 50%",
          ease: Cubic.easeIn 
        })
        .to(`.${planetArray[i].name}`, 0.1, {
          scaleY: 1,
          scaleX: 1,
          transformOrigin: "50% 50%",
          ease: Power0.easeNone
        })
        tl.play()
      });
        
        
        
        
        
        
        if ($circle == null) {} 
        else {
          $circle.style.opacity = 0
        }

      })
      

    }




  }

})

const stars = new Stars(10000,10000)
