import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'Game', active: false });
    console.log("hrll")
  }

  preload() {
    this.load.image('logo', 'assets/logo.png');
  }

  create() {
    const width = this.game.config.width;
    const height = this.game.config.height;
    this.add.image(width/2, height/2, 'logo');
  }
}
