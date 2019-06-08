const cloud = document.querySelector('.cloud')
const cloudContent = document.querySelector('.cloud_content')

const loop = ()=>{
    requestAnimationFrame(loop)
    let cloudSize = cloud.getBoundingClientRect()
    let cloudContentSize = cloudContent.getBoundingClientRect()
    if(cloudSize.height>cloudContentSize.height){
        cloud.style.height=cloudContentSize.width*1.99+'px'
    }
    else{
        cloud.style.height=cloudContentSize.width*4+'px'    
    }
    
    
    
      
}
