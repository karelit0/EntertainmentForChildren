import Phaser from 'phaser';
import { PlayerSprite } from '../game-tools/player.sprite';
import { AssetUtil } from '../game-tools/asset-util';
import { EnemySprite } from '../game-tools/enemy.sprite';
import { GameOptions } from '../game-tools/game-options';
import { Util } from '../game-tools/util';
import { EnemyMap } from '../game-tools/enemy.map';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Enemy } from '../game-tools/enemy.enum';

export class MainScene extends Phaser.Scene {
  platforms: Phaser.Physics.Arcade.StaticGroup | Phaser.GameObjects.Group;

  heart: Phaser.GameObjects.Sprite;

  player: PlayerSprite;
  enemyGroup: Phaser.GameObjects.Group;

  skyBackground: Phaser.GameObjects.TileSprite;
  mountainBackground: Phaser.GameObjects.TileSprite;
  treeBackground: Phaser.GameObjects.TileSprite;
  floorBackground: Phaser.GameObjects.TileSprite;
  ceilingBackground: Phaser.GameObjects.TileSprite;
  MAX_ENEMIES: number;

  constructor() {
    super({ key: 'main' });

    this.MAX_ENEMIES = 5;
  }

  preload() {
    console.log('preload method');

    this.load.image('layer_01', '/assets/background/scene_1/layer_01_1920 x 1080.png');
    this.load.image('layer_02', '/assets/background/scene_1/layer_02_1920 x 1080.png');
    this.load.image('layer_03', '/assets/background/scene_1/layer_03_1920 x 1080.png');
    this.load.image('layer_04', '/assets/background/scene_1/layer_04_1920 x 1080.png');
    this.load.image('layer_05', '/assets/background/scene_1/layer_05_1920 x 1080.png');
    this.load.image('ground', '/assets/background/scene_1/ground_1920 x 1080.png');


    AssetUtil.loadImageAssets(this.load, 'heart', 10);
    AssetUtil.loadFullCharacterImageAssets(this.load);
    AssetUtil.loadFullEnemyImageAssets(this.load);
  }

  create() {
    console.log('create method');

    this.ceilingBackground = this.add.tileSprite(960, 540, 1920, 1080, 'layer_01');
    this.skyBackground = this.add.tileSprite(960, 540, 1920, 1080, 'layer_02');
    this.mountainBackground = this.add.tileSprite(960, 540, 1920, 1080, 'layer_03');
    this.treeBackground = this.add.tileSprite(960, 540, 1920, 1080, 'layer_04');
    this.floorBackground = this.add.tileSprite(960, 540, 1920, 1080, 'layer_05');

    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(960, GameOptions.groundPositionY, 'ground', null, false);
    this.enemyGroup = this.add.group();

    AssetUtil.createFullCharacterAnimation(this.anims);
    AssetUtil.createFullEnemiesAnimation(this.anims);

    this.player = new PlayerSprite(this, 0, 0, 'ninjaGirl_Idle');

    this.add.existing(this.player);

    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.enemyGroup, this.platforms);
    this.physics.add.collider(this.enemyGroup, this.enemyGroup);
    this.physics.add.collider(this.player, this.enemyGroup);
  }

  update() {
    console.log('update method');

    this.ceilingBackground.tilePositionX += 0.05;
    this.skyBackground.tilePositionX -= 0.1;
    this.mountainBackground.tilePositionX += 0.1;
    this.treeBackground.tilePositionX -= 0.2;
    this.floorBackground.tilePositionX += 0.2;

    this.player.update();

    this.updateEnemies();
  }

  updateEnemies() {

    this.enemyGroup.children.entries.forEach(enemy => {
      enemy.update(this.player);
    });

    if (this.enemyGroup.countActive(true) < this.MAX_ENEMIES) {

      this.launchEnemy();
    }
  }

  launchEnemy() {
    const enemy: Enemy = Phaser.Math.Between(0, 4);
    const newEnemyPositionX: number = Phaser.Math.Between((GameOptions.width / 2), GameOptions.width);
    const newEnemyPositionY: number = Phaser.Math.Between(0, (GameOptions.height / 2));
    const enemyNameMap: EnemyMap = new EnemyMap();

    const newEnemy = new EnemySprite(this, newEnemyPositionX, newEnemyPositionY, enemyNameMap.MapToString.get(enemy))

    this.add.existing(newEnemy);

    this.enemyGroup.add(newEnemy);
  }
}