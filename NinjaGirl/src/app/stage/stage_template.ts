import Phaser from "phaser";
import { PlayerSprite } from "../phaser-extensions/player.sprite";
import { AssetUtil } from "../game-tools/asset-util";
import { EnemySprite } from "../phaser-extensions/enemy.sprite";
import { EnemyEnumMap } from "../enumerations/enemy-enum.map";
import { EnemyEnum } from "../enumerations/enemy.enum";
import { KunaiSprite } from "../phaser-extensions/kunai.sprite";
import { HeartSprite } from "../phaser-extensions/heart.sprite";
import { BackgroundGroup } from "../phaser-extensions/background.group";
import { BaseStageSettings } from "../stage-settings/base-stage.settings";
import { ScoreService } from "../services/score.service";

export class StageTemplate<
  TSceneSettings extends BaseStageSettings
> extends Phaser.Scene {
  scoreService: ScoreService;
  sceneSettings: TSceneSettings;

  platforms: Phaser.Physics.Arcade.StaticGroup | Phaser.GameObjects.Group;

  heartGroup: Phaser.GameObjects.Group;
  player: PlayerSprite;
  enemyGroup: Phaser.GameObjects.Group;
  backgroundGroup: BackgroundGroup;

  constructor(sceneKey: string, newSceneSettings: new () => TSceneSettings) {
    super({ key: sceneKey });
    this.sceneSettings = new newSceneSettings();
  }

  init(scoreService: ScoreService) {
    this.scoreService = scoreService;
  }

  preload() {
    AssetUtil.loadBackgroundAssets(this.load, this.sceneSettings);
    AssetUtil.loadGroundAsset(this.load, this.sceneSettings);

    AssetUtil.loadImageAssets(this.load, "heart", 12);
    AssetUtil.loadImageAssets(this.load, "kunai", 1);

    AssetUtil.loadFullCharacterImageAssets(this.load);
    AssetUtil.loadFullEnemyImageAssets(this.load);
  }

  create() {
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(
      960,
      this.sceneSettings.groundPositionY,
      "ground",
      null,
      false
    );

    this.enemyGroup = this.add.group();
    this.heartGroup = this.add.group();

    this.backgroundGroup = new BackgroundGroup(this);
    this.backgroundGroup.createGroup(this.sceneSettings);

    AssetUtil.createFullCharacterAnimation(this.anims);
    AssetUtil.createFullEnemiesAnimation(this.anims);

    this.player = new PlayerSprite(this, 0, 0, "ninjaGirl_Idle");

    this.add.existing(this.player);

    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.enemyGroup, this.platforms);
    this.physics.add.collider(this.enemyGroup, this.enemyGroup);
    this.physics.add.collider(this.player, this.enemyGroup, () => {
      this.player.killedByEnemy();
    });
    this.physics.add.collider(
      this.player.kunaiGroup,
      this.enemyGroup,
      (kunai, enemy) =>
        this.killedByPlayer(kunai as KunaiSprite, enemy as EnemySprite)
    );
    this.physics.add.collider(this.player, this.heartGroup, (player, heart) =>
      this.catchHeartByPlayer(player as PlayerSprite, heart as HeartSprite)
    );
    this.physics.add.collider(
      this.enemyGroup,
      this.heartGroup,
      (enemy, heart) =>
        this.catchHeartByEnemy(enemy as EnemySprite, heart as HeartSprite)
    );
  }

  killedByPlayer(kunai: KunaiSprite, enemy: EnemySprite): void {
    kunai.destroy();
    enemy.killedByPlayer();

    const enemyAppearProbabilitySeed = Phaser.Math.Between(
      0,
      this.sceneSettings.enemyAppearProbabilitySeed
    );

    const heartAppearProbabilitySeed = Phaser.Math.Between(
      0,
      this.sceneSettings.heartAppearProbabilitySeed
    );

    if (
      enemyAppearProbabilitySeed % this.sceneSettings.enemyAppearProbability ==
      0
    ) {
      this.sceneSettings.maxEnemies++;
    }

    if (
      heartAppearProbabilitySeed % this.sceneSettings.heartAppearProbability ==
      0
    ) {
      this.launchHeart();
    }

    this.scoreService.score++;
  }

  catchHeartByEnemy(enemy: EnemySprite, heart: HeartSprite): void {
    enemy.destroy();
    heart.destroy();
    this.sceneSettings.maxEnemies++;
    this.scoreService.score--;
  }

  catchHeartByPlayer(player: PlayerSprite, heart: HeartSprite): void {
    heart.destroy();
    this.sceneSettings.maxEnemies--;
    this.scoreService.score++;
  }

  update() {
    this.backgroundGroup.update(this.sceneSettings);

    if (this.sceneSettings.maxEnemies <= 0) {
      if (this.enemyGroup.countActive(true) <= 0) {
        this.scoreService.stage++;
        this.sceneSettings.setLevelUp();
        this.scene.start(this.sceneSettings.nextScene, this.scoreService);
      }
    }

    this.player.update();

    this.updateEnemies();
  }

  updateEnemies() {
    if (this.enemyGroup.countActive(true) < this.sceneSettings.maxEnemies) {
      this.launchEnemy();
    }

    this.enemyGroup.children.entries.forEach((enemy) => {
      enemy.update(this.player);
    });
  }

  launchEnemy() {
    const enemy: EnemyEnum = Phaser.Math.Between(0, 4);
    const newEnemyPositionX: number = this.sceneSettings.getNewEnemyPositionX();
    const newEnemyPositionY: number = this.sceneSettings.getNewEnemyPositionY();

    const enemyNameMap: EnemyEnumMap = new EnemyEnumMap();

    const newEnemy = new EnemySprite(
      this,
      newEnemyPositionX,
      newEnemyPositionY,
      enemyNameMap.MapToString.get(enemy)
    );

    this.add.existing(newEnemy);

    this.enemyGroup.add(newEnemy);
  }

  launchHeart() {
    const newHeartPositionX: number = this.sceneSettings.getNewHeartPositionX();
    const newHeartPositionY: number = this.sceneSettings.getNewHeartPositionY();

    const newEnemy = new HeartSprite(
      this,
      newHeartPositionX,
      newHeartPositionY
    );

    this.add.existing(newEnemy);

    this.heartGroup.add(newEnemy);
  }
}
