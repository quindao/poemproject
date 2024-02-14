class Example extends Phaser.Scene
{
    controls;

    preload ()
    {
        this.load.image('tiles2', 'assets/tilemaps/tiles/2x/floors_exterior_street_01.png');
        this.load.image('tiles3', 'assets/tilemaps/tiles/2x/walls_commercial_03.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/isorpg.json');
    }

    create ()
    {
        const map = this.add.tilemap('map');

        console.log(map);

        const tileset2 = map.addTilesetImage('floors_exterior_street_01', 'tiles2');
        const tileset3 = map.addTilesetImage('walls_commercial_03', 'tiles3');

        const layer1 = map.createLayer('Tile Layer 1', [ tileset2, tileset3 ],);
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

        this.cameras.main.setZoom(1);

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
