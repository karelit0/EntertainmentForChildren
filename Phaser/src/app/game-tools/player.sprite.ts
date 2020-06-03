import Phaser from 'phaser';

export class PlayerSprite extends Phaser.Physics.Arcade.Sprite {

    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    isBusy: boolean;
    hitGround: boolean;

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
        this.isBusy = false;
        this.hitGround = false;
    }

    update() {
        this.updatePlayer();
    }

    onHitPlatform() {
        this.hitGround = true;
    }

    private updatePlayer() {

        if (this.cursors.up.isDown || this.cursors.down.isDown || this.cursors.left.isDown || this.cursors.right.isDown) {
            this.isBusy = true;
            if (this.cursors.up.isDown || this.cursors.down.isDown) {
                this.hitGround = false;
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

}