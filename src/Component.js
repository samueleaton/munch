// import collisionWatchers from ''
import renderedClasses from './renderedClasses'
// const collisionWatchers = {};


export default class Component {
  constructor() {
    this.class = this.constructor.name
    console.log('this.name: ', this.name)
  }
  onCollision() {}

  // called when a component is being rendered
  _render() {
    if (!renderedClasses[this.class])
      renderedClasses[this.class] = this.constructor
    if (this.detectCollision) {

    }
  }
}
