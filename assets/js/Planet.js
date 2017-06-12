export default class Planet {
    constructor(props) {
        this.speed = props.speed;
        this.distance = props.distance;
        this.t = 0;

        this.geometry = new THREE.SphereGeometry(props.size, 40, 40);
        this.texture = new THREE.Texture();
        this.loader = new THREE.ImageLoader();

        if (props.texture) {
            thisloader.load(props.texture,
                function (image) {
                    this.texture.image = image;
                    this.texture.needsUpdate = true;
                },
                function (xhr) {
                    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
                },
                function (xhr) {
                    console.log('An error happened');
                }
            );

            this.material = new THREE.MeshPhongMaterial({map: this.texture});

            // if (props.name === 'sun') {
            //     this.material = new THREE.MeshBasicMaterial({map: this.texture});
            // }

        } else {
            this.material = new THREE.MeshNormalMaterial();
        }

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.castShadow = true;
    }

    update() {
        this.meshObj.rotation.y += 0.003;
        this.meshObj.position.y += 20;

        if (this.speed) {
            this.meshObj.position.x = Math.sin(Date.now() * this.speed) * this.distance;
            this.meshObj.position.z = Math.cos(Date.now() * this.speed) * this.distance;

            this.t += Math.PI / 180 * 2;
        }
    }

    get meshObj() {
        return this.mesh;
    }
}