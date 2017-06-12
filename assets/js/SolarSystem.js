export default class SolarSystem {
    constructor() {
        this.objects = [];
        this.createScene();
    }

    createScene() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        this.move = 0;
        this.radius = 4000;

        this.canvas = document.getElementById('canvas');
        this.canvas.setAttribute('width', width);
        this.canvas.setAttribute('height', height);

        this.renderer = new THREE.WebGLRenderer({canvas: this.canvas});
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000000);

        this.renderer.setClearColor(0x000000);
        this.camera.position.set(0, 0, 1300);
        this.camera.rotation.z = -Math.PI / 20;
        this.scene.add(this.camera);
        this.render();
    }

    render() {
        requestAnimationFrame(()=> {
            this.render();
        });

        this.objects.map((object)=> {
            object.update();
        });

        this.move += 20;
        this.camera.position.x = this.radius * Math.sin(THREE.Math.degToRad(-Date.now() / 60));
        this.camera.position.y = this.radius * Math.sin(THREE.Math.degToRad(Date.now() / 60)) + this.move;
        this.camera.position.z = this.radius * Math.cos(THREE.Math.degToRad(Date.now() / 60));
        this.camera.updateMatrixWorld();
        this.scene.position.y = this.move;
        this.camera.lookAt(this.scene.position);

        this.renderer.render(this.scene, this.camera);
    }

    appendMesh(mesh = []) {
        mesh.map((mesh)=> {
            this.objects.push(mesh);
            this.scene.add(mesh.meshObj);
        });
    }
}