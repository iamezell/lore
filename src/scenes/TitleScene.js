export default class TitleScene extends Phaser.Scene {
    constructor() {
        super('TitleScene')
    }

    preload(){
        this.load.image('backgroundImage', 'assets/images/battle/background.png');
    }

    create(){
        let background = this.add.sprite(0, 0, 'backgroundImage')
    }
}