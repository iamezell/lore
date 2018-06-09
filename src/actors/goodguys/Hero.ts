import Actor from '../Actor';
class Hero extends Actor {

    constructor(game: Phaser.Game, x: number, y: number, key: string, frameArray: any[] = []) {
        super(game, x, y, key, frameArray[0]);
        this.init();
        super.init()
    }

    public init(): void {
        console.log('Hero Initialized');
    }

}

export default Hero;