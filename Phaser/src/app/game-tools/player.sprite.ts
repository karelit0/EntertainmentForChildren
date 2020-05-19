import Phaser from 'phaser';

export class PlayerSprite extends Phaser.Physics.Arcade.Sprite {

    loadCharacterImageAssets(characterName: string, characterState: string, imagesToLoad: number) {
        for (let i = 0; i < imagesToLoad; i++) {
            const imageKey: string = characterName + '_' + characterState + '_00' + i;
            const imageFile: string = '/assets/character/' + characterName + '/' + characterState + '/' + characterState + '__00' + i + '.png';
            this.scene.load.image(imageKey, imageFile);
        }
    }

    createCharacterAnimation(characterName: string, characterState: string, framesToLoad: number) {

        const frames: Phaser.Types.Animations.AnimationFrame[] = [];

        const characterAnimationKey: string = characterName + '_' + characterState;

        for (let i = 0; i < framesToLoad; i++) {
            const frameKey: string = characterName + '_' + characterState + '_00' + i;

            frames.push({
                key: frameKey,
                frame: null
            });
        }

        this.scene.anims.create({
            key: characterAnimationKey,
            frames: frames,
            frameRate: 10,
            repeat: -1
        });
    }
}