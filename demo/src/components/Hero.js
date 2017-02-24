import { Component } from '../../../src/index'

export default class Hero extends Component {
  constructor() {
    super()
    console.log('constructing hero')
    // this.watchCollision('Enemy', )
  }

  handleEnemySwordCollision() {

  }

  handleEnemyCollision() {

  }

  // both this and the Enemy class can define a onCollision but you have to make it so the collision detection is not checked twice
  // this component is not added to the "collisionChecker" util it is mounted
  onCollision(component) {
    if (component.isA('Enemy'))
      this.handleEnemyCollision(component)
  }
}
