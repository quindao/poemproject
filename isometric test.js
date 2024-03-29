class Example extends Phaser.Scene
{
    controls;
    player;
    cursors;
    graphics;
    map;
    loader;
    preload ()
    {
        this.load.image('tiles1', './assets/tilemaps/Tiles/2x/blends_natural_01.png');
        this.load.image('tiles2', './assets/tilemaps/Tiles/2x/blends_natural_02.png');
        this.load.image('tiles3', './assets/tilemaps/Tiles/2x/blends_street_01.png');
        this.load.image('tiles4', './assets/tilemaps/Tiles/2x/blends_streetoverlays_01.png');
        this.load.image('tiles5', './assets/tilemaps/Tiles/2x/d_streetcracks_1.png');
        this.load.image('tiles6', './assets/tilemaps/Tiles/2x/floors_burnt_01.png');
        this.load.image('tiles7', './assets/tilemaps/Tiles/2x/floors_exterior_natural_01.png');
        this.load.image('tiles8', './assets/tilemaps/Tiles/2x/floors_exterior_street_01.png');
        this.load.image('tiles9', './assets/tilemaps/Tiles/2x/walls_burnt_01.png');
        this.load.image('tiles10', './assets/tilemaps/Tiles/2x/walls_burnt_roofs_01.png');
        this.load.tilemapTiledJSON('map', './assets/tilemaps/poem.json');
        this.load.image('car', './assets/tilemaps/Tiles/2x/e_exterior_snow_1.png');
        this.load.image('playercollider', './assets/tilemaps/Tiles/2x/e_exterior_snow_1.png');
        this.load.spritesheet('objects1', 'assets/tilemaps/Tiles/2x/books&misc_01.png', { frameWidth: 128, frameHeight: 256 });
        this.load.spritesheet('objects2', 'assets/tilemaps/Tiles/2x/constructedobjects_01.png', { frameWidth: 128, frameHeight: 256 });
        this.load.spritesheet('objects3', 'assets/tilemaps/Tiles/2x/appliances_radio_01.png', { frameWidth: 128, frameHeight: 256 });
    }
    create ()
    {
        this.map = this.make.tilemap({ key: 'map' });

        console.log(this.map);
        const tileset1 = this.map.addTilesetImage('blends_natural_01', 'tiles1');
        const tileset2 = this.map.addTilesetImage('blends_natural_02', 'tiles2');
        const tileset3 = this.map.addTilesetImage('blends_street_01', 'tiles3');
        const tileset4 = this.map.addTilesetImage('blends_streetoverlays_01', 'tiles4');
        const tileset5 = this.map.addTilesetImage('d_streetcracks_1', 'tiles5');
        const tileset6 = this.map.addTilesetImage('floors_burnt_01', 'tiles6');
        const tileset7 = this.map.addTilesetImage('floors_exterior_natural_01', 'tiles7');
        const tileset8 = this.map.addTilesetImage('floors_exterior_street_01', 'tiles8');
        const tileset9 = this.map.addTilesetImage('walls_burnt_01', 'tiles9');
        const tileset10 = this.map.addTilesetImage('walls_burnt_roofs_01', 'tiles10');   

        this.layer1 = this.map.createLayer('0_Floor', [ tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10]);
        const layer6 = this.map.createLayer('0_FloorOverlay', [ tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10]);
        this.layer7 = this.map.createLayer('0_FloorOverlay2', [ tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10]);
        this.map.setCollision(1);
        this.layer2 = this.map.createLayer('0_FloorOverlay3', [ tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10],);
        const layer3 = this.map.createLayer('0_FloorOverlay4', [ tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10]);
        
        this.object1overlay = this.add.sprite(953, 1447, 'objects1', 58).setOrigin(.5,.25); 
        this.object1overlay.scale = 1.1;
        this.object1overlay.setTint(0x00ff00);
        this.object1overlay.setTintFill(0x00ff00);
        this.object1 = this.add.image(950, 1450, 'objects1', 58).setOrigin(.5,.25).setInteractive();

        this.object2overlay = this.add.sprite(300, 1685, 'objects2', 20).setOrigin(.5,.25); 
        this.object2overlay.scale = 1.1;
        this.object2overlay.setTint(0x00ff00);
        this.object2overlay.setTintFill(0x00ff00);
        this.object2 = this.add.image(300, 1700, 'objects2', 20).setOrigin(.5,.25).setInteractive();

        this.object3overlay = this.add.sprite(1902, 1992, 'objects3', 1).setOrigin(.5,.25); 
        this.object3overlay.scale = 1.1;
        this.object3overlay.setTint(0x00ff00);
        this.object3overlay.setTintFill(0x00ff00);
        this.object3 = this.add.image(1900, 2000, 'objects3', 1).setOrigin(.5,.25).setInteractive();

        this.object4overlay = this.add.sprite(50, 1835, 'objects2', 32).setOrigin(.5,.25); 
        this.object4overlay.scale = 1.1;
        this.object4overlay.setTint(0x00ff00);
        this.object4overlay.setTintFill(0x00ff00);
        this.object4 = this.add.image(50, 1850, 'objects2', 32).setOrigin(.5,.25).setInteractive();

        this.player = this.physics.add.sprite(64, 1024, 'playercollider').setOrigin(.5,.25);

        const layer5 = this.map.createLayer('indoor', [ tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10],);
        this.layer1.setCullPadding(8, 8)

        this.text1 = this.add.text(760, 1400, 'Pots and pans left behind, just like these ruins', { fontFamily: 'Arial', fontSize: 24, color: '#888888' })
        this.text1.alpha = 0;
        this.text2 = this.add.text(50, 1900, 'A bear trap, I should be more careful', { fontFamily: 'Arial', fontSize: 24, color: '#888888' })
        this.text2.alpha = 0;
        this.text3 = this.add.text(1875, 2080, 'A radio with the electronics ripped out,', { fontFamily: 'Arial', fontSize: 24, color: '#888888' })
        this.text3.alpha = 0;
        this.text3b = this.add.text(1850, 2110, 'I shudder to think what they were used for', { fontFamily: 'Arial', fontSize: 24, color: '#888888' })
        this.text3b.alpha = 0;
        this.text4 = this.add.text(0, 1950, 'An IED, I sure hope its not armed', { fontFamily: 'Arial', fontSize: 24, color: '#888888' })
        this.text4.alpha = 0;

        this.physics.add.collider(this.player, this.layer1);
        this.layer4 = this.map.createLayer('outside', [ tileset1, tileset2, tileset3, tileset4, tileset5, tileset6, tileset7, tileset8, tileset9, tileset10],);
        this.layer2.setCullPadding(8, 8)
        layer3.setCullPadding(8, 8)
        this.layer4.setCullPadding(8, 8)
        layer5.setCullPadding(8, 8)
        layer6.setCullPadding(8, 8)
        this.layer7.setCullPadding(8, 8)

        this.cursors = this.input.keyboard.createCursorKeys();
        this.cameras.main.setZoom(.75);

        this.object1.once('pointerup', this.showtext1, this);
        this.object2.once('pointerup', this.showtext2, this);
        this.object3.once('pointerup', this.showtext3, this);
        this.object4.once('pointerup', this.showtext4, this);
    }
    
    showtext1 () {
        this.text1.alpha = 1;
    }
    showtext2 () {
        this.text2.alpha = 1;
    }
    showtext3 () {
        this.text3.alpha = 1;
        this.text3b.alpha = 1;
    }
    showtext4 () {
        this.text4.alpha = 1;
    }

    update (time, delta)
    {
       this.player.body.setVelocity(0);
       const indoor = this.layer7.getTileAtWorldXY(this.player.x, this.player.y, true);
       const upcorner = this.layer1.getTileAtWorldXY(this.player.x, this.player.y-2, true);
        const downcorner = this.layer1.getTileAtWorldXY(this.player.x, this.player.y+64, true);
        const leftcorner = this.layer1.getTileAtWorldXY(this.player.x-64 , this.player.y+30, true);
        const rightcorner = this.layer1.getTileAtWorldXY(this.player.x+64, this.player.y+32, true);
         if (indoor.index === 609)
            {
                this.layer4.setCullPadding(-16, -16)
            }
            else if (indoor.index !== 609)
            {
                this.text1.alpha = 0;
                this.text2.alpha = 0;
                this.text3.alpha = 0;
                this.text3b.alpha = 0;
                this.text4.alpha = 0;
                this.layer4.setCullPadding(8, 8)
            }
        if (this.cursors.left.isDown && indoor.index !== 1)
        {
             this.player.body.setVelocityX(-300);
        }
        else if (this.cursors.right.isDown /* && rightcorner.index !== 1*/)
        {
            this.player.body.setVelocityX(300);
        }
        if (this.cursors.up.isDown /* && upcorner.index !== 1*/)
        {
            this.player.body.setVelocityY(-150);
            
        }
        else if (this.cursors.down.isDown/* && downcorner.index !== 1*/)
        {
            this.player.body.setVelocityY(150);
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