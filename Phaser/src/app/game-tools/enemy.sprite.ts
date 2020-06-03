import Phaser from 'phaser';
import { SrvRecord } from 'dns';
import { EmptyError } from 'rxjs';

export class EnemySprite extends Phaser.Physics.Arcade.Sprite {

    enemyName: string;

    /**
     * 
     * @param scene The Scene to which this Game Object belongs. A Game Object can only belong to one Scene at a time.
     * @param x The horizontal position of this Game Object in the world.
     * @param y The vertical position of this Game Object in the world.
     * @param texture The key of the Texture this Game Object will use to render with, as stored in the Texture Manager.
     * @param frame An optional frame from the Texture this Game Object is rendering with.
     */
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | integer) {
        super(scene, x, y, texture, frame);
        this.enemyName = texture;

        scene.physics.add.existing(this);

        switch (this.enemyName) {
            case 'enemy1': {
                this.setSize(350, 425);
                this.setOffset(20, 0);
                break;
            }
            case 'enemy2': {
                this.setSize(400, 425);
                this.setOffset(20, 0);
                break;
            }
            case 'enemy3': {
                this.setSize(450, 425);
                this.setOffset(20, 0);
                break;
            }
            case 'enemy4': {
                this.setSize(350, 425);
                this.setOffset(20, 0);
                break;
            }
            case 'enemy5': {
                this.setSize(400, 425);
                this.setOffset(20, 0);
                break;
            }
        }

        this.setOrigin(0, 0);
        this.setScale(0.2);
        this.setBounce(0.2);
        this.setCollideWorldBounds(true);
        this.setFlipX(true);

    }

    update() {
        this.updateEnemy();
    }

    private updateEnemy() {
        this.anims.play(this.enemyName + '_Flying', true);
    }
}