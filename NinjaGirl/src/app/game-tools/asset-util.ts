import { BaseStageSettings } from "../stage-settings/base-stage.settings";

export class AssetUtil {
  /**
   *
   * @param load
   * @param sceneNumber
   * @param arg2
   */
  static loadGroundAsset<TStageSettings extends BaseStageSettings>(
    load: Phaser.Loader.LoaderPlugin,
    stageSettings: TStageSettings
  ) {
    load.image(
      "ground",
      "/assets/background/scene_" +
        stageSettings.sceneNumber +
        "/ground_1920 x 1080.png"
    );
  }
  /**
   *
   * @param load
   * @param sceneNumber
   * @param layerNumber
   */
  static loadBackgroundAssets<TStageSettings extends BaseStageSettings>(
    load: Phaser.Loader.LoaderPlugin,
    stageSettings: TStageSettings
  ) {
    for (let i = 0; i < stageSettings.layerBackgroundNumer; i++) {
      const imageKey: string =
        "scene_" + stageSettings.sceneNumber + "_layer_0" + i;
      load.image(
        imageKey,
        "/assets/background/scene_" +
          stageSettings.sceneNumber +
          "/" +
          "layer_0" +
          i +
          "_1920 x 1080.png"
      );
    }
  }
  /**
   *
   * @param load
   * @param assetName
   * @param imagesToLoad
   */
  static loadImageAssets(
    load: Phaser.Loader.LoaderPlugin,
    assetName: string,
    imagesToLoad: number
  ) {
    for (let i = 0; i < imagesToLoad; i++) {
      let imageKey: string;
      let imageFile: string;

      if (i < 10) {
        imageKey = assetName + "_00" + i;
        imageFile =
          "/assets/objects/" +
          assetName +
          "/" +
          assetName +
          "__00" +
          i +
          ".png";
      } else {
        imageKey = assetName + "_0" + i;
        imageFile =
          "/assets/objects/" + assetName + "/" + assetName + "__0" + i + ".png";
      }

      load.image(imageKey, imageFile);
    }
  }
  /**
   *
   * @param anims
   * @param assetName
   * @param framesToLoad
   */
  static createAssetAnimation(
    anims: Phaser.Animations.AnimationManager,
    assetName: string,
    framesToLoad: number
  ) {
    const frames: Phaser.Types.Animations.AnimationFrame[] = [];

    const characterAnimationKey: string = assetName;

    for (let i = 0; i < framesToLoad; i++) {
      let frameKey: string;

      if (i < 10) {
        frameKey = assetName + "_00" + i;
      } else {
        frameKey = assetName + "_0" + i;
      }

      frames.push({
        key: frameKey,
        frame: null,
      });
    }

    anims.create({
      key: characterAnimationKey,
      frames: frames,
      frameRate: 10,
      repeat: -1,
    });
  }
  /**
   *
   * @param load
   */
  static loadFullCharacterImageAssets(load: Phaser.Loader.LoaderPlugin) {
    this.loadCharacterImageAssets(load, "ninjaGirl", "Attack", 10);
    this.loadCharacterImageAssets(load, "ninjaGirl", "Attack", 10);
    this.loadCharacterImageAssets(load, "ninjaGirl", "Climb", 10);
    this.loadCharacterImageAssets(load, "ninjaGirl", "Dead", 10);
    this.loadCharacterImageAssets(load, "ninjaGirl", "Glide", 10);
    this.loadCharacterImageAssets(load, "ninjaGirl", "Idle", 10);
    this.loadCharacterImageAssets(load, "ninjaGirl", "Jump", 10);
    this.loadCharacterImageAssets(load, "ninjaGirl", "Jump_Attack", 10);
    this.loadCharacterImageAssets(load, "ninjaGirl", "Jump_Throw", 10);
    this.loadCharacterImageAssets(load, "ninjaGirl", "Jump_Throw", 10);
    this.loadCharacterImageAssets(load, "ninjaGirl", "Run", 10);
    this.loadCharacterImageAssets(load, "ninjaGirl", "Slide", 10);
    this.loadCharacterImageAssets(load, "ninjaGirl", "Throw", 10);
  }
  /**
   *
   * @param load
   */
  static loadFullEnemyImageAssets(load: Phaser.Loader.LoaderPlugin) {
    this.loadCharacterImageAssets(load, "enemy_green", "Die", 9);
    this.loadCharacterImageAssets(load, "enemy_green", "Flying", 4);
    this.loadCharacterImageAssets(load, "enemy_green", "Idle", 4);

    this.loadCharacterImageAssets(load, "enemy_orange", "Die", 9);
    this.loadCharacterImageAssets(load, "enemy_orange", "Flying", 4);
    this.loadCharacterImageAssets(load, "enemy_orange", "Idle", 4);

    this.loadCharacterImageAssets(load, "enemy_purple", "Die", 9);
    this.loadCharacterImageAssets(load, "enemy_purple", "Flying", 4);
    this.loadCharacterImageAssets(load, "enemy_purple", "Idle", 4);

    this.loadCharacterImageAssets(load, "enemy_red", "Die", 9);
    this.loadCharacterImageAssets(load, "enemy_red", "Flying", 4);
    this.loadCharacterImageAssets(load, "enemy_red", "Idle", 4);

    this.loadCharacterImageAssets(load, "enemy_rose", "Die", 9);
    this.loadCharacterImageAssets(load, "enemy_rose", "Flying", 4);
    this.loadCharacterImageAssets(load, "enemy_rose", "Idle", 4);
  }
  /**
   *
   * @param anims
   */
  static createFullCharacterAnimation(
    anims: Phaser.Animations.AnimationManager
  ) {
    this.createCharacterAnimation(anims, "ninjaGirl", "Attack", 10);
    this.createCharacterAnimation(anims, "ninjaGirl", "Climb", 10);
    this.createCharacterAnimation(anims, "ninjaGirl", "Dead", 10, 0);
    this.createCharacterAnimation(anims, "ninjaGirl", "Glide", 10);
    this.createCharacterAnimation(anims, "ninjaGirl", "Idle", 10);
    this.createCharacterAnimation(anims, "ninjaGirl", "Jump", 10);
    this.createCharacterAnimation(anims, "ninjaGirl", "Jump_Attack", 10);
    this.createCharacterAnimation(anims, "ninjaGirl", "Jump_Throw", 10);
    this.createCharacterAnimation(anims, "ninjaGirl", "Jump_Throw", 10);
    this.createCharacterAnimation(anims, "ninjaGirl", "Run", 10);
    this.createCharacterAnimation(anims, "ninjaGirl", "Slide", 10);
    this.createCharacterAnimation(anims, "ninjaGirl", "Throw", 10);

    this.createObjectAnimation(anims, "kunai", 1);
    this.createObjectAnimation(anims, "heart", 12);
  }
  /**
   *
   * @param anims
   */
  static createFullEnemiesAnimation(anims: Phaser.Animations.AnimationManager) {
    this.createCharacterAnimation(anims, "enemy_green", "Die", 9, 0);
    this.createCharacterAnimation(anims, "enemy_green", "Flying", 4);
    this.createCharacterAnimation(anims, "enemy_green", "Idle", 4);

    this.createCharacterAnimation(anims, "enemy_orange", "Die", 9, 0);
    this.createCharacterAnimation(anims, "enemy_orange", "Flying", 4);
    this.createCharacterAnimation(anims, "enemy_orange", "Idle", 4);

    this.createCharacterAnimation(anims, "enemy_purple", "Die", 9, 0);
    this.createCharacterAnimation(anims, "enemy_purple", "Flying", 4);
    this.createCharacterAnimation(anims, "enemy_purple", "Idle", 4);

    this.createCharacterAnimation(anims, "enemy_red", "Die", 9, 0);
    this.createCharacterAnimation(anims, "enemy_red", "Flying", 4);
    this.createCharacterAnimation(anims, "enemy_red", "Idle", 4);

    this.createCharacterAnimation(anims, "enemy_rose", "Die", 9, 0);
    this.createCharacterAnimation(anims, "enemy_rose", "Flying", 4);
    this.createCharacterAnimation(anims, "enemy_rose", "Idle", 4);
  }
  /**
   *
   * @param load
   * @param characterName
   * @param characterState
   * @param imagesToLoad
   */
  static loadCharacterImageAssets(
    load: Phaser.Loader.LoaderPlugin,
    characterName: string,
    characterState: string,
    imagesToLoad: number
  ) {
    for (let i = 0; i < imagesToLoad; i++) {
      const imageKey: string = characterName + "_" + characterState + "_00" + i;
      const imageFile: string =
        "/assets/character/" +
        characterName +
        "/" +
        characterState +
        "/" +
        characterState +
        "__00" +
        i +
        ".png";
      load.image(imageKey, imageFile);
    }
  }
  /**
   *
   * @param anims
   * @param characterName
   * @param characterState
   * @param framesToLoad
   * @param repeat
   */
  static createCharacterAnimation(
    anims: Phaser.Animations.AnimationManager,
    characterName: string,
    characterState: string,
    framesToLoad: number,
    repeat: number = -1
  ) {
    const frames: Phaser.Types.Animations.AnimationFrame[] = [];

    const characterAnimationKey: string = characterName + "_" + characterState;

    for (let i = 0; i < framesToLoad; i++) {
      const frameKey: string = characterName + "_" + characterState + "_00" + i;

      frames.push({
        key: frameKey,
        frame: null,
      });
    }

    anims.create({
      key: characterAnimationKey,
      frames: frames,
      frameRate: 10,
      repeat: repeat,
    });
  }
  /**
   *
   * @param anims
   * @param objectName
   * @param framesToLoad
   * @param repeat
   */
  static createObjectAnimation(
    anims: Phaser.Animations.AnimationManager,
    objectName: string,
    framesToLoad: number,
    repeat: number = -1
  ) {
    const frames: Phaser.Types.Animations.AnimationFrame[] = [];

    const characterAnimationKey: string = objectName;

    for (let i = 0; i < framesToLoad; i++) {
      let frameKey: string;

      if (i < 10) {
        frameKey = objectName + "_00" + i;
      } else {
        frameKey = objectName + "_0" + i;
      }

      frames.push({
        key: frameKey,
        frame: null,
      });
    }

    anims.create({
      key: characterAnimationKey,
      frames: frames,
      frameRate: 10,
      repeat: repeat,
    });
  }
}
