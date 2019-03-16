import 'phaser';
import config from './config';
import GameScene from './scenes/GameScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Game', GameScene);
    this.scene.start('Game');
    console.log("we are we getting to")
  }
}

FBInstant.initializeAsync().then(function() {
  new Game();
}).catch(function(error) {
  console.log(error.message);
});
