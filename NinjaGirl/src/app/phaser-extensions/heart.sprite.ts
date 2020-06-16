import Phaser from 'phaser';
import { GameOptions } from './game-options';

export class HeartSprite extends Phaser.Physics.Arcade.Sprite {

    /**
     * 
     * @param scene The Scene to which this Game Object belongs. A Game Object can only belong to one Scene at a time.
     * @param x The horizontal position of this Game Object in the world.
     * @param y The vertical position of this Game Object in the world.
     * @param frame An optional frame from the Texture this Game Object is rendering with.
     */
    constructor(scene: Phaser.Scene, x: number, y: number, frame?: string | integer) {
        super(scene, x, y, 'heart', frame);

        scene.physics.add.existing(this);
        scene.add.existing(this);
        this.setOrigin(0, 0);
        this.setSize(120, 110);
        this.setGravity(0, -100);
        this.setScale(0.5, 0.5);
        this.setOffset(0, 0);

        this.anims.play('heart', true);
    }

    update() {

    }

}