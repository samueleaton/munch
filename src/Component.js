// import collisionWatchers from ''
import renderedClasses from './renderedClasses'
// const collisionWatchers = {};


export default class Component {
  constructor() {
    this.class = this.constructor.name
    console.log('this.name: ', this.name)
  }
  onCollision() {}

  _unrender() {
    renderedClasses[this.class].splice(this.renderedClassIndex, 1)
  }

  // called when a component is being rendered
  _render() {
    if (!renderedClasses[this.class])
      renderedClasses[this.class] = []

    this.renderedClassIndex = renderedClasses[this.class].length
    renderedClasses[this.class].push(this)

    if (this.detectCollision) {
      
    }
  }
}
