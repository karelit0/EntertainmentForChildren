import { GameOptions } from "../phaser-extensions/game-options";
import { BaseStageSettings } from "./base-stage.settings";
import { StageEnumMap } from "../enumerations/stage-enum.map";
import { StageEnum } from "../enumerations/stage.enum";

export class StageNineteenSettings extends BaseStageSettings {
  constructor() {
    super();

    this.MAX_ENEMIES = 5;
    this.maxEnemies = this.MAX_ENEMIES;

    this.sceneNumber = 19;
    this.nextScene = new StageEnumMap().MapToString.get(StageEnum.stageOne);

    this.enemyAppearProbabilitySeed = 60;
    this.enemyAppearProbability =
      this.enemyAppearProbabilitySeed / (this.sceneNumber + 1);

    this.enemyAppearProbability = Math.round(this.enemyAppearProbability);

    this.heartAppearProbabilitySeed = 2;
    this.heartAppearProbability = 1;

    this.layerBackgroundNumer = 7;
    this.backgroundLayersSpeed = [0.05, 0.1, 0.1, 0.15, 0.15, 0.2, 0.2];
    this.groundPositionY = 990;
  }
}
