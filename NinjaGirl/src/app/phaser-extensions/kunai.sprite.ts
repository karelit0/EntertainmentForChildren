import Phaser from 'phaser';
import { GameOptions } from './game-options';

export class KunaiSprite extends Phaser.Physics.Arcade.Sprite {

    LIFE_TIME_FRAME: number;
    /**
     * 
     * @param scene The Scene to which this Game Object belongs. A Game Object can only belong to one Scene at a time.
     * @param x The horizontal position of this Game Object in the world.
     * @param y The vertical position of this Game Object in the world.
     * @param frame An optional frame from the Texture this Game Object is rendering with.
     */
    constructor(scene: Phaser.Scene, x: number, y: number, frame?: string | integer, flipAttack?: boolean) {
        super(scene, x, y, 'kunai', frame);

        scene.physics.add.existing(this);
        scene.add.existing(this);
        this.setOrigin(0, 0);
        this.setSize(160, 32);
        this.setGravity(0, -100);
        this.setScale(0.35, 0.35);

        if (flipAttack) {
            this.setVelocityX(-300);
            this.setOffset(0, -32);
            this.setAngle(90 * 3);
        } else {
            this.setVelocityX(300);
            this.setOffset(-160, 0);
            this.setAngle(90);
        }
        this.anims.play('kunai', true);

        this.LIFE_TIME_FRAME = 5000 + this.scene.time.now;
    }

    update() {
        if (this.LIFE_TIME_FRAME < this.scene.time.now) {
            this.destroy();
        }
    }

}