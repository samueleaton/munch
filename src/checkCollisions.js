import collisionState from './collisionState'
import renderedClasses from './renderedClasses'
import _ from './utils'

function hasCollision(obj1, obj2) {
  return (
    obj1.x < obj2.x + obj2.width &&
    obj1.x + obj1.width > obj2.x &&
    obj1.y < obj2.y + obj2.height &&
    obj1.height + obj1.y > obj2.y
  )
}

function hasCheckedCollisions(className1, className2) {
  const { checkedCollisions } = collisionState
  return (
    _.get(checkedCollisions, [className1, className2]) ||
    _.get(checkedCollisions, [className2, className1]) ||
    false
  )
}

function setCheckedCollision(className1, className2) {
  const { checkedCollisions } = collisionState
  _.set(checkedCollisions, [className, otherClassName], true)
  _.set(checkedCollisions, [otherClassName, className], true)
}

function traverseDetectors(className, classInstance, detectors) {
  for (const otherClassName in detectors) {
    if (
      detectors.hasOwnProperty(otherClassName) &&
      renderedClasses[otherClassName] &&
      !hasCheckedCollisions(className, otherClassName)
    ) {
      // loop through each instacne of the detectors and check if collision
      _.forEach(renderedClasses[otherClassName], otherClassInstance => {
        // if collision, trigger the `onCollision` methods of each instance
        if (hasCollision(classInstance, otherClassInstance)) {
          classInstance.onCollision(otherClassInstance)
          otherClassInstance.onCollision(classInstance)
        }
      })
      // mark each as checked so you don't re-check 
      setCheckedCollision(className, otherClassName)
    }
  }
}

function checkCollisions() {
  // reset checked collisions
  collisionState.checkedCollisions = {}

  // loop through rendered classes
  _.forOwn(renderedClasses, (instances, className) => {
    // check if there are any instances of the rendered class
    if (!renderedClasses[className])
      return
    // check if the class has any collision detectors
    const detectors = collisionState.detectors[className]
    if (detectors) {
      // loop through each instance and traverse the detectors list
      _.forEach(renderedClasses[className], classInstance => {
        traverseDetectors(className, classInstance, detectors)
      })
    }
  })
}
