import { GameOptions } from "../phaser-extensions/game-options";
import { BaseStageSettings } from "./base-stage.settings";
import { StageEnumMap } from "../enumerations/stage-enum.map";
import { StageEnum } from "../enumerations/stage.enum";

export class StageOneSettings extends BaseStageSettings {
  MAX_ENEMIES: number;

  sceneNumber: number;

  enemyAppearProbabilitySeed: number;
  enemyAppearProbability: number;

  heartAppearProbabilitySeed: number;
  heartAppearProbability: number;

  maxEnemies: number;
  nextScene: string;

  layerBackgroundNumer: number;
  backgroundLayersSpeed: number[];

  groundPositionY: number;

  constructor() {
    super();

    this.MAX_ENEMIES = 5;
    this.maxEnemies = this.MAX_ENEMIES;

    this.sceneNumber = 1;
    this.nextScene = new StageEnumMap().MapToString.get(StageEnum.stageTwo);

    this.enemyAppearProbabilitySeed = 60;
    this.enemyAppearProbability =
      this.enemyAppearProbabilitySeed / (this.sceneNumber + 1);

    this.enemyAppearProbability = Math.round(this.enemyAppearProbability);

    this.heartAppearProbabilitySeed = 20;
    this.heartAppearProbability = 1;

    this.layerBackgroundNumer = 5;
    this.backgroundLayersSpeed = [0.05, 0.1, 0.1, 0.2, 0.2];

    this.groundPositionY = 922;
  }
}
