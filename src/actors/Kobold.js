import Actor from './Actor'

class Kobold extends Actor{
  constructor(game, Xval, Yval, image, name, level) {
  super(game, 0, 0, image, name, level)
    this.name = name
  }

}

export default Kobold
