import Phaser from 'phaser';
import { KunaiSprite } from './kunai.sprite';

export class PlayerSprite extends Phaser.Physics.Arcade.Sprite {
    ATTACK_SPEED: number;

    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    kunaiGroup: Phaser.GameObjects.Group;

    isBusy: boolean;
    isDead: boolean;
    willDie: boolean;
    last_attack_time: number;

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

        this.cursors = this.scene.input.keyboard.createCursorKeys();

        scene.physics.add.existing(this);
        this.setSize(280, 500);
        this.setOffset(0, 0);
        this.setOrigin(0, 0);
        this.setScale(0.2);
        this.setBounce(0);
        this.setCollideWorldBounds(true);

        this.isBusy = false;
        this.isDead = false;

        this.kunaiGroup = this.scene.add.group();
        this.ATTACK_SPEED = 500;
        this.last_attack_time = this.scene.time.now;
    }

    update() {
        this.updatePlayer();

        if (this.last_attack_time > this.scene.time.now) {
            return;
        }

        this.last_attack_time = this.scene.time.now + this.ATTACK_SPEED;

        if (this.cursors.space.isDown) {
            if (this.isDead) {
                return;
            }
            if (this.body.blocked.down) {
                this.anims.play('ninjaGirl_Throw', true);
            } else {
                this.anims.play('ninjaGirl_Jump_Throw', true);
            }
            this.launchKunai();
        }

        this.kunaiGroup.children.entries.forEach(kunai => {
            kunai.update();
        });
    }

    killedByEnemy() {
        if (this.isDead) {
            return;
        }
        this.willDie = true;
    }

    private updatePlayer() {
        if (this.willDie) {
            this.isDead = true;
            this.willDie = false;
            this.anims.play('ninjaGirl_Dead', true);
        }

        if (this.isDead) {
            return;
        }

        if (this.cursors.up.isDown || this.cursors.down.isDown || this.cursors.left.isDown || this.cursors.right.isDown) {
            this.isBusy = true;
            if (this.cursors.up.isDown || this.cursors.down.isDown) {
                if (this.cursors.up.isDown) {
                    this.setVelocityY(-150);
                } else {
                    if (!this.body.blocked.down) {
                        this.setVelocityY(150);
                    }
                }
            }

            if (this.cursors.left.isDown || this.cursors.right.isDown) {
                if (this.cursors.left.isDown) {
                    if (!this.flipX) {
                        this.setFlip(true, false);
                    }
                    this.setVelocityX(-160);
                } else {
                    this.setFlip(false, false);
                    this.setVelocityX(160);
                }
            }
        } else {
            this.isBusy = false;
        }

        if (this.body.blocked.down) {
            if (this.isBusy) {
                this.anims.play('ninjaGirl_Run', true);
            } else {
                this.anims.play('ninjaGirl_Idle', true);
                this.setVelocityX(0);
            }
        } else {
            this.anims.play('ninjaGirl_Jump', true);
        }
    }

    private launchKunai() {
        let x = this.body.x;
        const y = this.body.y + this.body.height - this.body.height / 5;

        if (!this.flipX) {
            x += this.body.width * 2.2;
        }

        const newKunai = new KunaiSprite(this.scene, x, y,  0, this.flipX);

        this.kunaiGroup.add(newKunai);
    }
}