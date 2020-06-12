import Phaser from 'phaser';
import { Enemy } from './enemy.enum';
import { EnemyMap } from './enemy.map';
import { PlayerSprite } from './player.sprite';

export class EnemySprite extends Phaser.Physics.Arcade.Sprite {

    ENEMY_NAME: string;
    MOVE_SPEED: number;

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

        const enemyNameMap: EnemyMap = new EnemyMap();

        scene.physics.add.existing(this);
        this.ENEMY_NAME = texture;

        switch (enemyNameMap.MapToEnum.get(this.ENEMY_NAME)) {
            case Enemy.orange: {
                this.setSize(325, 375);
                this.setOffset(20, 30);
                break;
            }
            case Enemy.red: {
                this.setSize(510, 510);
                this.setOffset(20, 30);
                break;
            }
            case Enemy.lemonGreen: {
                this.setSize(340, 340);
                this.setOffset(20, 20);
                break;
            }
            case Enemy.purple: {
                this.setSize(450, 400);
                this.setOffset(30, 30);
                break;
            }
            case Enemy.rose: {
                this.setSize(480, 380);
                this.setOffset(20, 10);
                break;
            }
        }

        this.setOrigin(0, 0);
        this.setScale(0.2);
        this.setBounce(0.2);
        this.setCollideWorldBounds(true);

        this.MOVE_SPEED = Phaser.Math.Between(30, 60);
    }

    update(player: PlayerSprite) {
        this.updateEnemy(player);
    }

    private updateEnemy(player: PlayerSprite) {
        this.anims.play(this.ENEMY_NAME + '_Flying', true);

        this.scene.physics.moveToObject(this, player, this.MOVE_SPEED);

        if (player.body.x > this.body.x) {
            this.setFlipX(false);
        }else{
            this.setFlipX(true);
        }
    }
}