import Stars from './Stars';
import ParticlesSystem from './ParticlesSystem';
import Planet from './Planet';
import SolarSystem from './SolarSystem';

document.addEventListener('DOMContentLoaded', function () {
    var app = new SolarSystem();
    app
        .appendMesh(
            [
                new Stars({
                    size: 1,
                    count: 1500,
                    scale: {
                        x: 50,
                        y: 50,
                        z: 50
                    }
                }),
                new Stars({
                    size: 2,
                    count: 3000,
                    scale: {
                        x: 10,
                        y: 10,
                        z: 10
                    }
                }),
                new Planet({
                    texture: '',
                    size: 200,
                }),
                new Planet({
                    texture: '',
                    size: 30,
                    speed: .003,
                    distance: -800
                }),
                new ParticlesSystem({
                    maxParticles: 5000,
                    color: '0xff0000',
                    size: 10,
                    horizontalSpeed: .003,
                    verticalSpeed: .003,
                    distance: -800,
                    lifetime: 5,
                    spawnRate: 100
                }),
                new Planet({
                    texture: '',
                    size: 30,
                    speed: .003,
                    distance: 1600
                }),
                new ParticlesSystem({
                    maxParticles: 5000,
                    color: '0xFF00EC',
                    size: 4,
                    horizontalSpeed: .003,
                    verticalSpeed: .003,
                    distance: 1600,
                    lifetime: 5,
                    spawnRate: 1600
                }),
                new Planet({
                    texture: '',
                    size: 40,
                    speed: .001,
                    distance: 2400
                }),
                new ParticlesSystem({
                    maxParticles: 10000,
                    color: '0x00D1FF',
                    size: 4,
                    horizontalSpeed: .001,
                    verticalSpeed: .001,
                    distance: 2400,
                    lifetime: 5,
                    spawnRate: 2400
                }),
                new Planet({
                    texture: '',
                    size: 50,
                    speed: .001,
                    distance: -3200
                }),
                new ParticlesSystem({
                    maxParticles: 10000,
                    color: '0x001FFF',
                    size: 4,
                    horizontalSpeed: .001,
                    verticalSpeed: .001,
                    distance: -3200,
                    lifetime: 5,
                    spawnRate: 3200
                })
            ]
        )
});