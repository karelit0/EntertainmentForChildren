import Phaser from 'phaser';

export class MainScene extends Phaser.Scene {
  platforms: Phaser.Physics.Arcade.StaticGroup | Phaser.GameObjects.Group;

  heart: Phaser.GameObjects.Sprite;

  ninjaGirlPlayer: Phaser.Physics.Arcade.Sprite;
  ninjaBoyPlayer: Phaser.Physics.Arcade.Sprite;

  cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  keyObj_Q: Phaser.Input.Keyboard.Key;
  keyObj_A: Phaser.Input.Keyboard.Key;
  keyObj_D: Phaser.Input.Keyboard.Key;

  jumpTimer = 0;

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

    this.loadCharacterImageAssets('ninjaGirl', 'Attack', 10);
    this.loadCharacterImageAssets('ninjaGirl', 'Climb', 10);
    this.loadCharacterImageAssets('ninjaGirl', 'Dead', 10);
    this.loadCharacterImageAssets('ninjaGirl', 'Glide', 10);
    this.loadCharacterImageAssets('ninjaGirl', 'Idle', 10);
    this.loadCharacterImageAssets('ninjaGirl', 'Jump', 10);
    this.loadCharacterImageAssets('ninjaGirl', 'Jump_Attack', 10);
    this.loadCharacterImageAssets('ninjaGirl', 'Jump_Throw', 10);
    this.loadCharacterImageAssets('ninjaGirl', 'Jump_Throw', 10);
    this.loadCharacterImageAssets('ninjaGirl', 'Run', 10);
    this.loadCharacterImageAssets('ninjaGirl', 'Slide', 10);
    this.loadCharacterImageAssets('ninjaGirl', 'Throw', 10);

    this.loadCharacterImageAssets('ninjaBoy', 'Attack', 10);
    this.loadCharacterImageAssets('ninjaBoy', 'Climb', 10);
    this.loadCharacterImageAssets('ninjaBoy', 'Dead', 10);
    this.loadCharacterImageAssets('ninjaBoy', 'Glide', 10);
    this.loadCharacterImageAssets('ninjaBoy', 'Idle', 10);
    this.loadCharacterImageAssets('ninjaBoy', 'Jump', 10);
    this.loadCharacterImageAssets('ninjaBoy', 'Jump_Attack', 10);
    this.loadCharacterImageAssets('ninjaBoy', 'Jump_Throw', 10);
    this.loadCharacterImageAssets('ninjaBoy', 'Jump_Throw', 10);
    this.loadCharacterImageAssets('ninjaBoy', 'Run', 10);
    this.loadCharacterImageAssets('ninjaBoy', 'Slide', 10);
    this.loadCharacterImageAssets('ninjaBoy', 'Throw', 10);

    this.loadImageAssets('heart', 10);

  }

  create() {
    console.log('create method');

    this.add.image(960, 540, 'layer_01');
    this.add.image(960, 540, 'layer_02');
    this.add.image(960, 540, 'layer_03');
    this.add.image(960, 540, 'layer_04');
    this.add.image(960, 540, 'layer_05');

    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(960, 922, 'ground', null, false);

    this.createCharacterAnimation('ninjaGirl', 'Attack', 10);
    this.createCharacterAnimation('ninjaGirl', 'Climb', 10);
    this.createCharacterAnimation('ninjaGirl', 'Dead', 10);
    this.createCharacterAnimation('ninjaGirl', 'Glide', 10);
    this.createCharacterAnimation('ninjaGirl', 'Idle', 10);
    this.createCharacterAnimation('ninjaGirl', 'Jump', 10);
    this.createCharacterAnimation('ninjaGirl', 'Jump_Attack', 10);
    this.createCharacterAnimation('ninjaGirl', 'Jump_Throw', 10);
    this.createCharacterAnimation('ninjaGirl', 'Jump_Throw', 10);
    this.createCharacterAnimation('ninjaGirl', 'Run', 10);
    this.createCharacterAnimation('ninjaGirl', 'Slide', 10);
    this.createCharacterAnimation('ninjaGirl', 'Throw', 10);

    this.createCharacterAnimation('ninjaBoy', 'Attack', 10);
    this.createCharacterAnimation('ninjaBoy', 'Climb', 10);
    this.createCharacterAnimation('ninjaBoy', 'Dead', 10);
    this.createCharacterAnimation('ninjaBoy', 'Glide', 10);
    this.createCharacterAnimation('ninjaBoy', 'Idle', 10);
    this.createCharacterAnimation('ninjaBoy', 'Jump', 10);
    this.createCharacterAnimation('ninjaBoy', 'Jump_Attack', 10);
    this.createCharacterAnimation('ninjaBoy', 'Jump_Throw', 10);
    this.createCharacterAnimation('ninjaBoy', 'Jump_Throw', 10);
    this.createCharacterAnimation('ninjaBoy', 'Run', 10);
    this.createCharacterAnimation('ninjaBoy', 'Slide', 10);
    this.createCharacterAnimation('ninjaBoy', 'Throw', 10);

    this.createAssetAnimation('heart', 10);

    this.heart = this.add.sprite(0, 0, 'heart_001').play('heart').setScale(0.5);
    this.heart.visible = false;


    this.ninjaGirlPlayer = this.physics.add.sprite(0, 0, 'ninjaGirl_Idle').setSize(280, 500).setOffset(0, 0).setOrigin(0, 0);
    this.ninjaGirlPlayer.setScale(0.2);
    this.ninjaGirlPlayer.setBounce(0.2);
    this.ninjaGirlPlayer.setCollideWorldBounds(true);

    this.ninjaBoyPlayer = this.physics.add.sprite(1800, 0, 'ninjaBoy_Idle').setSize(230, 450).setOffset(0, 0).setOrigin(0, 0);
    this.ninjaBoyPlayer.setScale(0.2);
    this.ninjaBoyPlayer.setBounce(0.2);
    this.ninjaBoyPlayer.setCollideWorldBounds(true);

    this.ninjaGirlPlayer.setVisible(true);
    this.ninjaBoyPlayer.setVisible(true);

    this.physics.add.collider(this.ninjaGirlPlayer, this.platforms);
    this.physics.add.collider(this.ninjaBoyPlayer, this.platforms);

    this.physics.add.overlap(this.ninjaBoyPlayer, this.ninjaGirlPlayer, this.hitPlayer, null, this);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.keyObj_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);  // Get key object
    this.keyObj_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);  // Get key object
    this.keyObj_Q = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);  // Get key object
  }


  update() {
    console.log('update method');

    this.updateNinjaGirlPlayer();
    this.updateNinjaBoyPlayer();
    this.updateHeart();
  }

  updateHeart() {
    if (!this.heart.visible) {
      return;
    }

    const heartPositionX = ((this.ninjaGirlPlayer.x + this.ninjaBoyPlayer.x) / 2) + 25;
    const heartPositionY = this.ninjaGirlPlayer.y - 25;

    this.heart.setPosition(heartPositionX, heartPositionY);
  }

  updateNinjaGirlPlayer() {
    if (this.cursors.left.isDown) {
      if (!this.ninjaGirlPlayer.flipX) {
        this.ninjaGirlPlayer.setFlip(true, false);
      }

      this.ninjaGirlPlayer.setVelocityX(-160);
      this.ninjaGirlPlayer.anims.play('ninjaGirl_Run', true);
      return;
    }

    if (this.cursors.right.isDown) {
      if (this.ninjaGirlPlayer.flipX) {
        this.ninjaGirlPlayer.setFlip(false, false);
      }

      this.ninjaGirlPlayer.setVelocityX(160);
      this.ninjaGirlPlayer.anims.play('ninjaGirl_Run', true);
      return;
    }

    if (this.cursors.up.isDown) {
      if (this.jumpTimer < this.time.now) {
        this.ninjaGirlPlayer.body.velocity.y = -250;
        this.jumpTimer = this.time.now + 750;
        this.ninjaGirlPlayer.anims.play('ninjaGirl_Jump', true);
      }
      return;
    }

    if (this.keyObj_Q.isDown) {
        this.ninjaGirlPlayer.anims.play('ninjaGirl_Deadq', true);
      return;
    }

    this.ninjaGirlPlayer.setVelocityX(0);
    this.ninjaGirlPlayer.anims.play('ninjaGirl_Idle');
  }

  updateNinjaBoyPlayer() {
    if (this.keyObj_A.isDown) {
      if (!this.ninjaBoyPlayer.flipX) {
        this.ninjaBoyPlayer.setFlip(true, false);
      }

      this.ninjaBoyPlayer.setVelocityX(-160);
      this.ninjaBoyPlayer.anims.play('ninjaBoy_Run', true);
      return;
    }

    if (this.keyObj_D.isDown) {
      if (this.ninjaBoyPlayer.flipX) {
        this.ninjaBoyPlayer.setFlip(false, false);
      }

      this.ninjaBoyPlayer.setVelocityX(160);
      this.ninjaBoyPlayer.anims.play('ninjaBoy_Run', true);
      return;
    }

    this.ninjaBoyPlayer.setVelocityX(0);
    this.ninjaBoyPlayer.anims.play('ninjaBoy_Idle');
  }


  loadCharacterImageAssets(characterName: string, characterState: string, imagesToLoad: number) {
    for (let i = 0; i < imagesToLoad; i++) {
      const imageKey: string = characterName + '_' + characterState + '_00' + i;
      const imageFile: string = '/assets/character/' + characterName + '/' + characterState + '/' + characterState + '__00' + i + '.png';
      this.load.image(imageKey, imageFile);
    }
  }


  loadImageAssets(assetName: string, imagesToLoad: number) {
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

      this.load.image(imageKey, imageFile);
    }
  }

  createCharacterAnimation(characterName: string, characterState: string, framesToLoad: number) {

    const frames: Phaser.Types.Animations.AnimationFrame[] = [];

    const characterAnimationKey: string = characterName + '_' + characterState;

    for (let i = 0; i < framesToLoad; i++) {
      const frameKey: string = characterName + '_' + characterState + '_00' + i;

      frames.push({
        key: frameKey,
        frame: null
      });
    }

    this.anims.create({
      key: characterAnimationKey,
      frames: frames,
      frameRate: 10,
      repeat: -1
    });
  }

  createAssetAnimation(assetName: string, framesToLoad: number) {
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

    this.anims.create({
      key: characterAnimationKey,
      frames: frames,
      frameRate: 10,
      repeat: -1
    });
  }

  hitPlayer() {
    this.heart.visible = true;
  }

  hitFloor() {
    this.heart.visible = true;
  }
}