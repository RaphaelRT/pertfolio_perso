const left = []
const top = []


class Planet {
  constructor(project, name, width, x,projectName,projectInfo,window) {
    this.window = window
    this.name = name;
    this.posX = x
    this.width = width
    this.height = width
    this.project = project
    this.planetInfo
    this.projectName=projectName
    this.projectInfo = projectInfo
    this.numberOfProject =[]
    this.create()
  }
  create() {
      this.numberOfProject.push('test')
    const planet = document.querySelector(`.${this.name}`)
    if (this.window>500) {
      planet.style.position = 'absolute'
      planet.style.top = `${this.posX}px`
    }
    
    planet.style.zIndex = "1"
    planet.style.width = `${this.width}px`
    planet.style.height = `${this.height}px`
    this.planetInfo = planet.getBoundingClientRect()



    const project = document.querySelector(this.project)
    project.style.width = `${this.width}px`
    project.style.height = `max-content`
    project.style.overflow = `visible`
    project.style.top = `${this.posX+this.height+20}px`
    this.projectInfo = project.getBoundingClientRect()




  }

  getWidth() {
    return this.width
  }
  getInfo() {
    return this.planetInfo
  }

}
export default Planet