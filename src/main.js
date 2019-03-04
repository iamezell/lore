import TitleScene from './scenes/TitleScene'
import BootScene from './scenes/BootScene'
import LoadingScene from './scenes/LoadingScene'

let titleScene = new TitleScene()
let bootScene = new BootScene()
let loadingScene = new LoadingScene()

let gameScene = new Phaser.Scene('Title')

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.Auto,
    width: 640,
    height: 360,
    scene: gameScene
};

const game = new Phaser.Game(config); // eslint-disable-line no-unused-vars
game.scene.add('TitleScene', titleScene);
game.scene.add('BootScene', bootScene);
game.scene.add('LoadingScene', loadingScene);
game.scene.start('BootScene',{scene: "title"});
