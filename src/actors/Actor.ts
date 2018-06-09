// let random = require('lodash/random');

class Actor extends Phaser.Sprite {

    private _speed: number = null;
    private _direction: number = null;
    private _frameArray: any[] = null;
    private _offset: number = null;
    private _pause: boolean = null;
    private _collisions: number = null;
    private _strength: number = 10;
    private intelligence: number = 10;
    private _wisdom: number = 10;
    private _agility: number = 10;
    private _modifiedAgility: number = 10;
    private _modifiedStrength: number = 10;
    private _modifiedIntelligence: number = 10;
    private _modifiedWisdom: number = 10;

    constructor(game: Phaser.Game, x: number, y: number, key: string, frameArray: any[] = []) {
        super(game, x, y, key, frameArray[0]);
        this._frameArray = frameArray;
        this.init();
    }

    public init(): void {
        console.log('Actor Initialized');
        console.log('testing agility, agillity is ', this._agility);
        console.log('testing rolling inititive');
        this.rollInititive(this._agility);
    }

    public rollInititive(agility): number {
        let num = this.getAgilityModifier(this._agility);
        let modifiedNum = random(20) + num;
        console.log('rolling initive and it is', num);
        return modifiedNum;
    }

    public getAgilityModifier(agility): number {
        let num = 0;
        if (agility >= 0 && agility <= 10) {
            num = 0;
        } else if (agility >= 10) {
            num = agility - 10;
        }
        return num;
    }

}

export default Actor;