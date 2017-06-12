export default class ParticlesSystem {
    constructor(props) {
        this.particleSystem = new THREE.GPUParticleSystem({maxParticles: props.maxParticles});
        this.clock = new THREE.Clock(true);
        this.tick = 0;

        this.settings = {
            position: new THREE.Vector3(),
            positionRandomness: .3,
            velocity: new THREE.Vector3(),
            velocityRandomness: .3,
            color: props.color,
            colorRandomness: 2,
            turbulence: 0,
            lifetime: props.lifetime,
            size: props.size,
            sizeRandomness: 1,
            spawnRate: props.spawnRate,
            horizontalSpeed: props.horizontalSpeed,
            verticalSpeed: props.verticalSpeed,
            distance: props.distance,
            timeScale: 1
        };
    }

    update() {
        let delta = this.clock.getDelta() * this.settings.timeScale;
        this.tick += delta;
        if (delta > 0) {
            this.settings.position.x = Math.sin(Date.now() * this.settings.horizontalSpeed) * this.settings.distance;
            this.settings.position.z = Math.cos(Date.now() * this.settings.verticalSpeed) * this.settings.distance;
            this.settings.position.y += 20;

            for (let i = 0; i < this.settings.spawnRate * delta; i++) {
                this.meshObj.spawnParticle(this.settings);
            }
        }
        this.meshObj.update(this.tick);
    }

    get meshObj() {
        return this.particleSystem;
    }
}