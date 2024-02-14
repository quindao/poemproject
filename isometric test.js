class Example extends Phaser.Scene
{
    controls;

    preload ()
    {
        this.load.image('tiles2', 'assets/tilemaps/tiles/2x/floors_exterior_street_01.png');
        this.load.image('tiles3', 'assets/tilemaps/tiles/2x/walls_commercial_03.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/isorpg.json');
        this.load.image('car', 'assets/tilemaps/tiles/2x/e_exterior_snow_1.png');
    }

    create ()
    {
        const map = this.add.tilemap('map');
       
        console.log(map);

        const tileset2 = map.addTilesetImage('floors_exterior_street_01', 'tiles2');
        const tileset3 = map.addTilesetImage('walls_commercial_03', 'tiles3');

        const layer1 = map.createLayer('Tile Layer 1', [ tileset2, tileset3 ],);
        const player = this.add.image(128, 128, 'car');
        const layer2 = map.createLayer('Tile Layer 2', [ tileset2, tileset3 ],);
        const layer3 = map.createLayer('Tile Layer 3', [ tileset2, tileset3 ],64,128);
        const layer4 = map.createLayer('Tile Layer 4', [ tileset2, tileset3 ],);
        const layer5 = map.createLayer('Tile Layer 5', [ tileset2, tileset3 ],);
        layer1.setCullPadding(8, 8)
        layer2.setCullPadding(8, 8)
        layer3.setCullPadding(8, 8)
        layer4.setCullPadding(8, 8)
        layer5.setCullPadding(8, 8)
        const cursors = this.input.keyboard.createCursorKeys();
       
        this.cameras.main.setZoom(.5);
        this.input.keyboard.on('keydown-A', event =>
        {
            const indoor = layer1.getTileAtWorldXY(player.x - 64, player.y - 32, true);
            if (indoor.index === 2)
            {
                layer2.setCullPadding(-16, -16)
            }
            else
            {
                layer2.setCullPadding(8, 8)
            }
            const tile = layer1.getTileAtWorldXY(player.x - 32, player.y, true);

            {
                player.x -= 64;
                player.y -= 32;
                player.angle = 0;
            }

        });
    

        //  Right
        this.input.keyboard.on('keydown-D', event =>
        {
            const indoor = layer1.getTileAtWorldXY(player.x + 64, player.y + 32, true);
            if (indoor.index === 2)
            {
                layer2.setCullPadding(-16, -16)
            }
            else
            {
                layer2.setCullPadding(8, 8)
            }
            const tile = layer1.getTileAtWorldXY(player.x + 32, player.y, true);


            {
                player.x += 64;
                player.y += 32;
                player.angle = 0;
            }

        });

        //  Up
        this.input.keyboard.on('keydown-W', event =>
        {
            const indoor = layer1.getTileAtWorldXY(player.x + 64, player.y - 32, true);
            if (indoor.index === 2)
            {
                layer2.setCullPadding(-16, -16)
            }
            else
            {
                layer2.setCullPadding(8, 8)
            }
            const tile = layer1.getTileAtWorldXY(player.x + 64, player.y - 32, true);

            {
                player.y -= 32;
                player.x += 64;
                player.angle = 0;
            }

        });

        //  Down
        this.input.keyboard.on('keydown-S', event =>
        {
            const indoor = layer1.getTileAtWorldXY(player.x - 64, player.y + 32, true);
            if (indoor.index === 2)
            {
                layer2.setCullPadding(-16, -16)
            }
            else
            {
                layer2.setCullPadding(8, 8)
            }
            const tile = layer1.getTileAtWorldXY(player.x, player.y + 32, true);
            {
                player.y += 32;
                player.x -= 64;
                player.angle = 0;
            }

        });
        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            acceleration: 0.04,
            drag: 0.0005,
            maxSpeed: 0.7
        };
        
        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);
    }

    update (time, delta)
    {
        
        this.controls.update(delta);
        
    }
}

const config = {
    type: Phaser.WEBGL,
    
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
