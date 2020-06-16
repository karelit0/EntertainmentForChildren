import { GameOptions } from "../phaser-extensions/game-options";

export abstract class BaseStageSettings {
  MAX_ENEMIES: number;

  sceneNumber: number;
  nextScene: string;
  maxEnemies: number;

  enemyAppearProbabilitySeed: number;
  enemyAppearProbability: number;

  heartAppearProbabilitySeed: number;
  heartAppearProbability: number;

  layerBackgroundNumer: number;
  backgroundLayersSpeed: number[];

  groundPositionY: number;

  getNewHeartPositionY(): number {
    const newHeartPositionY: number = Phaser.Math.Between(
      110,
      this.groundPositionY
    );

    return newHeartPositionY;
  }
  getNewHeartPositionX(): number {
    const newHeartPositionX: number = Phaser.Math.Between(
      0,
      GameOptions.width - 100
    );

    return newHeartPositionX;
  }

  getNewEnemyPositionX(): number {
    const newEnemyPositionX: number = Phaser.Math.Between(
      GameOptions.width - GameOptions.width / 3,
      GameOptions.width
    );

    return newEnemyPositionX;
  }

  getNewEnemyPositionY(): number {
    const newEnemyPositionY: number = Phaser.Math.Between(
      0,
      this.groundPositionY
    );

    return newEnemyPositionY;
  }

  setLevelUp() {
    this.MAX_ENEMIES++;
    this.maxEnemies = this.MAX_ENEMIES;

    this.enemyAppearProbabilitySeed = 2;
    this.enemyAppearProbability = 1;

    this.heartAppearProbabilitySeed = 2;
    this.heartAppearProbability = 1;
  }
}
