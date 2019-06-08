import starMin from '../images/SVG/star-min.svg'
import starLarge from '../images/SVG/star-large.svg'
const html = document.querySelector('html')
const body = document.querySelector('body')
const background_star = document.querySelector('.background_star')
const inner = document.querySelector('.inner')
const innerSize= inner.getBoundingClientRect()
const pos_background_star = background_star.getBoundingClientRect()
const page_height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight ) 

class Stars{
    constructor(numberOfLargeStars,numberOfMinStars){
        this.numberOfLargeStars = numberOfLargeStars
        this.numberOfMinStars = numberOfMinStars
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        })
        this.scene= new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(50, pos_background_star.width / pos_background_star.height, 0.1, 1000)
        this.init()
    }
    init(){
        /**
        * Rendering
        */
        this.renderer.setSize(innerSize.width, page_height)
        this.renderer.setClearColor(`#181844`)
        background_star.appendChild(this.renderer.domElement)
        /**
        * Create Scene
        */
        this.scene.add(new THREE.AmbientLight(0xffffff))
        /**
         * Create Camera
         */
        
        this.camera.position.set(1, 30, 60)
        this.camera.rotation.x = -30 * Math.PI / 180
        this.scene.add(this.camera)
        this.createStarField()
    }
    createStarField(){    
        /**
         * Create a starMinField
         */
        const starsMinGeometry = new THREE.Geometry()
        for (let i = 0; i < this.numberOfMinStars; i++) {
            const starMin = new THREE.Vector3()
            starMin.x = THREE.Math.randFloatSpread(2000)
            starMin.y = THREE.Math.randFloatSpread(2000)
            starMin.z = THREE.Math.randFloatSpread(1550,2000)
            starsMinGeometry.vertices.push(starMin)
        }
        const textureStarMin = new THREE.TextureLoader().load(starMin)
        const starsMinMaterial = new THREE.PointsMaterial({
            size: 0.5,
            blending: THREE.AdditiveBlending,
            transparent: true,
            map:textureStarMin
        })

        const starMinField = new THREE.Points(starsMinGeometry, starsMinMaterial)
        this.scene.add(starMinField)

        /**
         * Create a starLargeField
         */
        const starsLargeGeometry = new THREE.Geometry()
        for (let i = 0; i < this.numberOfLargeStars; i++) {
        const starLarge = new THREE.Vector3()
            starLarge.x = THREE.Math.randFloatSpread(2000)
            starLarge.y = THREE.Math.randFloatSpread(2000)
            starLarge.z = THREE.Math.randFloatSpread(10)
            starsLargeGeometry.vertices.push(starLarge)
        }
        const textureStarLarge = new THREE.TextureLoader().load(starLarge)
        const starsLargeMaterial = new THREE.PointsMaterial({
            size: 0.7,
            blending: THREE.AdditiveBlending,
            transparent: true,
            map:textureStarLarge
        })
        const starLargeField = new THREE.Points(starsLargeGeometry, starsLargeMaterial)
        this.scene.add(starLargeField)

        //Easing
        window.addEventListener('scroll',()=>{
            TweenMax.to(starMinField.position, 0.4, {
                y: -((html.scrollTop) *0.05),
                ease:Sine.easeOut,
                onComplete() {
                starMinField.position.needsUpdate = true;
                },
            });
            TweenMax.to(starLargeField.position, 0.4, {
                y: -((html.scrollTop) *0.05),
                ease:Sine.easeOut,
                onComplete() {
                starLargeField.position.needsUpdate = true;
                },
            });
        })
        this.loop()
        window.addEventListener('resize',()=>this.resize())
    }
    loop(){
        requestAnimationFrame(()=>this.loop()) 
        this.renderer.render(this.scene, this.camera)
    }
    resize(){
        let page_height_resize = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight ) 
        this.camera.aspect = pos_background_star.width / pos_background_star.height
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(pos_background_star.width, page_height_resize)
        
    }
} 
export default Stars
