const collisionState = {
  detectors: {
    Hero: {
      'Enemy': true
    },
    Enemy: {
      'Hero': true
    }
  },
  checkedCollision: {
    Hero: { Enemy: true },
    Enemy: { Hero: true }
  }
};
export default collisionState;
