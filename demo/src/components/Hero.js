import { Component, Graphics } from '../../../src/index'

export default class Hero extends Component {
  constructor() {
    super({
      collisionDetect: ['Enemy']
    })
    console.log('constructing hero')
    // this.watchCollision('Enemy', )
  }

  handleEnemySwordCollision() {

  }

  handleEnemyCollision() {

  }

  update() {

  }

  render() {
    var rectangle = new Graphics();
    rectangle.lineStyle(4, 0xFF3300, 1);
    rectangle.beginFill(0x66CCFF);
    rectangle.drawRect(0, 0, 50, 50);
    rectangle.endFill();
    rectangle.x = 20;
    rectangle.y = 20;
    window.stage.addChild(rectangle);
    setInterval(() => {
      rectangle.x++
      rectangle.y++
    }, 1000)
  }

  // both this and the Enemy class can define a onCollision but you have to make it so the collision detection is not checked twice
  // this component is not added to the "collisionChecker" util it is mounted
  onCollision(component) {
    console.log('onCollision for Hero: ', component)
    // if (component.isA('Enemy'))
    //   this.handleEnemyCollision(component)
  }
}
