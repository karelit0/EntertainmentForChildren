import { GameOptions } from "../phaser-extensions/game-options";
import { BaseStageSettings } from "./base-stage.settings";
import { StageEnum } from "../enumerations/stage.enum";
import { StageEnumMap } from "../enumerations/stage-enum.map";

export class StageFourteenSettings extends BaseStageSettings {
  constructor() {
    super();

    this.MAX_ENEMIES = 5;
    this.maxEnemies = this.MAX_ENEMIES;

    this.sceneNumber = 14;
    this.nextScene = new StageEnumMap().MapToString.get(StageEnum.stageFifteen);

    this.enemyAppearProbabilitySeed = 60;
    this.enemyAppearProbability =
      this.enemyAppearProbabilitySeed / (this.sceneNumber + 1);

    this.enemyAppearProbability = Math.round(this.enemyAppearProbability);

    this.heartAppearProbabilitySeed = 20;
    this.heartAppearProbability = 1;

    this.layerBackgroundNumer = 9;
    this.backgroundLayersSpeed = [
      0.05,
      0.05,
      0.1,
      0.1,
      0.15,
      0.15,
      0.2,
      0.2,
      0.25,
    ];
    this.groundPositionY = 990;
  }
}
