import Phaser from "phaser";
import { BaseStageSettings } from "../stage-settings/base-stage.settings";

export class BackgroundGroup extends Phaser.GameObjects.Group {
  backgroundLayers: Phaser.GameObjects.TileSprite[];

  /**
   *
   * @param scene The scene this group belongs to.
   * @param children Game Objects to add to this group; or the `config` argument.
   * @param config Settings for this group. If `key` is set, Phaser.GameObjects.Group#createMultiple is also called with these settings.
   */
  constructor(
    scene: Phaser.Scene,
    children?:
      | Phaser.GameObjects.GameObject[]
      | Phaser.Types.GameObjects.Group.GroupConfig
      | Phaser.Types.GameObjects.Group.GroupCreateConfig,
    config?:
      | Phaser.Types.GameObjects.Group.GroupConfig
      | Phaser.Types.GameObjects.Group.GroupCreateConfig
  ) {
    super(scene, children, config);
    this.backgroundLayers = [];
  }

  createGroup<TStageTemplate extends BaseStageSettings>(
    stageTemplate: TStageTemplate
  ) {
    for (let i = 0; i < stageTemplate.layerBackgroundNumer; i++) {
      const newBackgroundLayer = this.scene.add.tileSprite(
        960,
        540,
        1920,
        1080,
        "scene_" + stageTemplate.sceneNumber + "_layer_0" + i
      );

      this.backgroundLayers.push(newBackgroundLayer);
      this.add(newBackgroundLayer);
    }
  }

  update<TStageTemplate extends BaseStageSettings>(
    stageTemplate: TStageTemplate
  ) {
    for (let i = 0; i < stageTemplate.layerBackgroundNumer; i++) {
      this.backgroundLayers[i].tilePositionX +=
        stageTemplate.backgroundLayersSpeed[i];
    }
  }
}
