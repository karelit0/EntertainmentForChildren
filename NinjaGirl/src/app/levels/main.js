var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('layer_01', 'Assets/scene_1/layer_01_1920 x 1080.png');
    this.load.image('layer_02', 'Assets/scene_1/layer_02_1920 x 1080.png');
    this.load.image('layer_03', 'Assets/scene_1/layer_03_1920 x 1080.png');
    this.load.image('layer_04', 'Assets/scene_1/layer_04_1920 x 1080.png');
    this.load.image('layer_05', 'Assets/scene_1/layer_05_1920 x 1080.png');

    this.load.spritesheet('dude', 
        'Assets/character/NinjaGirl/Idle/Idle__000.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}

function create ()
{
}

function update ()
{
}