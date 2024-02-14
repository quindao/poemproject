class Example extends Phaser.Scene
{
    controls;
    player;
    cursors;
    layer1;
    layer2;
    preload ()
    {
        this.load.image('tiles2', './assets/tilemaps/Tiles/2x/floors_exterior_tilesandstone_01.png');
        this.load.image('tiles3', './assets/tilemaps/Tiles/2x/walls_commercial_03.png');
        this.load.tilemapTiledJSON('map', './assets/tilemaps/isorpg.json');
        this.load.image('car', './assets/tilemaps/Tiles/2x/e_exterior_snow_1.png');
    }

    create ()
    {
        const map = this.add.tilemap('map');
       
        console.log(map);

        const tileset2 = map.addTilesetImage('floors_exterior_tilesandstone_01', 'tiles2');
        const tileset3 = map.addTilesetImage('walls_commercial_03', 'tiles3');

        this.layer1 = map.createLayer('Tile Layer 1', [ tileset2, tileset3 ],);
        this.player = this.physics.add.image(64, 64, 'car').setOrigin(1);
   
        this.layer2 = map.createLayer('Tile Layer 2', [ tileset2, tileset3 ],);
        const layer3 = map.createLayer('Tile Layer 3', [ tileset2, tileset3 ],64,128);
        const layer4 = map.createLayer('Tile Layer 4', [ tileset2, tileset3 ],);
        const layer5 = map.createLayer('Tile Layer 5', [ tileset2, tileset3 ],);
        this.layer1.setCullPadding(8, 8)
        this.layer2.setCullPadding(8, 8)
        layer3.setCullPadding(-16, -16)
        layer4.setCullPadding(-16, -16)
        layer5.setCullPadding(-16, -16)
        this.cursors = this.input.keyboard.createCursorKeys();
       
        this.cameras.main.setZoom(.5);
       

    }

    update (time, delta)
    {

        this.player.setVelocity(0);
        const indoor = this.layer1.getTileAtWorldXY(this.player.x - 64, this.player.y + 32, true);
            if (indoor.index === 2)
            {
                this.layer2.setCullPadding(-16, -16)
            }
            else
            {
                this.layer2.setCullPadding(8, 8)
            }
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-300);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(300);
        }

        if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-150);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY(150);
        }
        this.cameras.main.centerOn(this.player.x, this.player.y);
    }
}
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
const config = {
    type: Phaser.WEBGL,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        width: 900,
        height: 450
    },
    backgroundColor: '#2d2d2d',
    
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
