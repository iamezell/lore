/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Actor from '../actors/Actor'
import Hero from '../actors/Hero'
import Kobold from '../actors/Kobold'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const bannerText = 'Phaser + ES6 + Webpack'
    let myHero = new Hero(this.game, 0, 0, 'mushroom', 'me', 1);
    myHero.equip({strengthBonus: 10})
    let theKobold = new Kobold(this.game, 100, 0, 'mushroom', 'kobold', 1);
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

    this.mushroom = new Mushroom({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })

    //this.game.add.existing(this.mushroom)
    this.game.add.existing(myHero)
    this.game.add.existing(theKobold)
    // place the fighters in a match
    let match = []
    match.push(myHero)
    match.push(theKobold)
    let matchArray = match.map((char)=>{
      char.rollInititive()
      console.log('the char named'+char.name+' has inititive', char.inititive)
      return char
    }).sort((a,b) => {
      if(a.inititive > b.inititive)
        return -1
      if(a.inititive < b.inititive)
        return 1
      return 0
      })
   let attack = matchArray[0].attack(matchArray[1])
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
