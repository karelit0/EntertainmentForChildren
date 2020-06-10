import Phaser from 'phaser';
import { PlayerSprite } from '../game-tools/player.sprite';
import { AssetUtil } from '../game-tools/asset-util';
import { EnemySprite } from '../game-tools/enemy.sprite';
import { GameOptions } from '../game-tools/game-options';
import { utils } from 'protractor';
import { Util } from '../game-tools/util';

export class MainScene extends Phaser.Scene {
  platforms: Phaser.Physics.Arcade.StaticGroup | Phaser.GameObjects.Group;

  heart: Phaser.GameObjects.Sprite;

  player: PlayerSprite;
  enemies: EnemySprite[];

  skyBackground: Phaser.GameObjects.TileSprite;
  mountainBackground: Phaser.GameObjects.TileSprite;
  treeBackground: Phaser.GameObjects.TileSprite;
  floorBackground: Phaser.GameObjects.TileSprite;
  ceilingBackground: Phaser.GameObjects.TileSprite;

  constructor() {
    super({ key: 'main' });


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

    AssetUtil.createFullCharacterAnimation(this.anims);
    AssetUtil.createFullEnemiesAnimation(this.anims);

    this.player = new PlayerSprite(this, 0, 0, 'ninjaGirl_Idle');
    this.player.setSize(280, 500);
    this.player.setOffset(0, 0);
    this.player.setOrigin(0, 0);
    this.player.setScale(0.2);
    this.player.setBounce(0);
    this.player.setCollideWorldBounds(true);

    this.enemies = [];

    this.add.existing(this.player);

    this.physics.add.collider(this.player, this.platforms);

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
    if (this.enemies.length < 5) {
      for (let i = 1; i <= 5; i++) {
        const newEnemyPositionX: number = (GameOptions.width / 2) + 200 * i;
        const newEnemyPositionY: number = Util.getRandomInt(0, GameOptions.height / 3);
        const newEnemyName: string = 'enemy' + i;

        const newEnemy = new EnemySprite(this, newEnemyPositionX, newEnemyPositionY, newEnemyName)

        this.add.existing(newEnemy);

        this.physics.add.collider(newEnemy, this.platforms);

        this.enemies.push(newEnemy);
      }
    }

    this.enemies.forEach(enemy => {
      enemy.update();
    });
  }
}