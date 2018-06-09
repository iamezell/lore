import random from 'lodash/random'

class Actor extends Phaser.Sprite {
  constructor(game, numX, numY, image, atlas) {
    super(game, numX, numY, image, atlas)
    console.log('hello from constructor')
    this.strength = 10;
    this.agility = 10;
    this.wisdom = 10;
    this.intelligence = 10;
  }

  
}

export default Actor
