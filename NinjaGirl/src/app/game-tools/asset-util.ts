export class AssetUtil {
    static loadImageAssets(load: Phaser.Loader.LoaderPlugin, assetName: string, imagesToLoad: number) {
        for (let i = 0; i < imagesToLoad; i++) {
            let imageKey: string;
            let imageFile: string;

            if (i < 10) {
                imageKey = assetName + '_00' + i;
                imageFile = '/assets/objects/' + assetName + '/' + assetName + '__00' + i + '.png';
            }
            else {
                imageKey = assetName + '_0' + i;
                imageFile = '/assets/objects/' + assetName + '/' + assetName + '__0' + i + '.png';
            }

            load.image(imageKey, imageFile);
        }
    }
    static createAssetAnimation(anims: Phaser.Animations.AnimationManager, assetName: string, framesToLoad: number) {
        const frames: Phaser.Types.Animations.AnimationFrame[] = [];

        const characterAnimationKey: string = assetName;

        for (let i = 0; i < framesToLoad; i++) {
            let frameKey: string;

            if (i < 10) {
                frameKey = assetName + '_00' + i;
            }
            else {
                frameKey = assetName + '_0' + i;
            }


            frames.push({
                key: frameKey,
                frame: null
            });
        }

        anims.create({
            key: characterAnimationKey,
            frames: frames,
            frameRate: 10,
            repeat: -1
        });
    }

    static loadFullCharacterImageAssets(load: Phaser.Loader.LoaderPlugin) {
        this.loadCharacterImageAssets(load, 'ninjaGirl', 'Attack', 10);
        this.loadCharacterImageAssets(load, 'ninjaGirl', 'Attack', 10);
        this.loadCharacterImageAssets(load, 'ninjaGirl', 'Climb', 10);
        this.loadCharacterImageAssets(load, 'ninjaGirl', 'Dead', 10);
        this.loadCharacterImageAssets(load, 'ninjaGirl', 'Glide', 10);
        this.loadCharacterImageAssets(load, 'ninjaGirl', 'Idle', 10);
        this.loadCharacterImageAssets(load, 'ninjaGirl', 'Jump', 10);
        this.loadCharacterImageAssets(load, 'ninjaGirl', 'Jump_Attack', 10);
        this.loadCharacterImageAssets(load, 'ninjaGirl', 'Jump_Throw', 10);
        this.loadCharacterImageAssets(load, 'ninjaGirl', 'Jump_Throw', 10);
        this.loadCharacterImageAssets(load, 'ninjaGirl', 'Run', 10);
        this.loadCharacterImageAssets(load, 'ninjaGirl', 'Slide', 10);
        this.loadCharacterImageAssets(load, 'ninjaGirl', 'Throw', 10);
    }

    static loadFullEnemyImageAssets(load: Phaser.Loader.LoaderPlugin) {
        for (let i = 1; i <= 5; i++) {
            this.loadCharacterImageAssets(load, 'enemy' + i, 'Die', 9);
            this.loadCharacterImageAssets(load, 'enemy' + i, 'Flying', 4);
            this.loadCharacterImageAssets(load, 'enemy' + i, 'Idle', 4);
        }
    }

    static createFullCharacterAnimation(anims: Phaser.Animations.AnimationManager) {
        this.createCharacterAnimation(anims, 'ninjaGirl', 'Attack', 10);
        this.createCharacterAnimation(anims, 'ninjaGirl', 'Climb', 10);
        this.createCharacterAnimation(anims, 'ninjaGirl', 'Dead', 10);
        this.createCharacterAnimation(anims, 'ninjaGirl', 'Glide', 10);
        this.createCharacterAnimation(anims, 'ninjaGirl', 'Idle', 10);
        this.createCharacterAnimation(anims, 'ninjaGirl', 'Jump', 10);
        this.createCharacterAnimation(anims, 'ninjaGirl', 'Jump_Attack', 10);
        this.createCharacterAnimation(anims, 'ninjaGirl', 'Jump_Throw', 10);
        this.createCharacterAnimation(anims, 'ninjaGirl', 'Jump_Throw', 10);
        this.createCharacterAnimation(anims, 'ninjaGirl', 'Run', 10);
        this.createCharacterAnimation(anims, 'ninjaGirl', 'Slide', 10);
        this.createCharacterAnimation(anims, 'ninjaGirl', 'Throw', 10);
    }

    static createFullEnemiesAnimation(anims: Phaser.Animations.AnimationManager) {
        for (let i = 1; i <= 5; i++) {
            this.createCharacterAnimation(anims, 'enemy' + i, 'Die', 9);
            this.createCharacterAnimation(anims, 'enemy' + i, 'Flying', 4);
            this.createCharacterAnimation(anims, 'enemy' + i, 'Idle', 4);
        }
    }

    static loadCharacterImageAssets(load: Phaser.Loader.LoaderPlugin, characterName: string, characterState: string, imagesToLoad: number) {
        for (let i = 0; i < imagesToLoad; i++) {
            const imageKey: string = characterName + '_' + characterState + '_00' + i;
            const imageFile: string = '/assets/character/' + characterName + '/' + characterState + '/' + characterState + '__00' + i + '.png';
            load.image(imageKey, imageFile);
        }
    }

    static createCharacterAnimation(anims: Phaser.Animations.AnimationManager, characterName: string, characterState: string, framesToLoad: number) {

        const frames: Phaser.Types.Animations.AnimationFrame[] = [];

        const characterAnimationKey: string = characterName + '_' + characterState;

        for (let i = 0; i < framesToLoad; i++) {
            const frameKey: string = characterName + '_' + characterState + '_00' + i;

            frames.push({
                key: frameKey,
                frame: null
            });
        }

        anims.create({
            key: characterAnimationKey,
            frames: frames,
            frameRate: 10,
            repeat: -1
        });
    }
}