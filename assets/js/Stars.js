export default class Stars {
    constructor(props) {
        this.geometry = new THREE.Geometry();
        this.material = new THREE.PointsMaterial({
            color: 0xbbbbbb,
            opacity: 0,
            size: props.size,
            sizeAttenuation: false
        });

        for (let i = 0; i < props.count; i++) {
            var vertex = new THREE.Vector3();
            vertex.x = Math.random() * 2 - 1;
            vertex.y = Math.random() * 2 - 1;
            vertex.z = Math.random() * 2 - 1;
            vertex.multiplyScalar(6000);
            this.geometry.vertices.push(vertex);
        }

        this.mesh = new THREE.Points(this.geometry, this.material);
        this.mesh.scale.set(props.scale.x, props.scale.y, props.scale.z);
    }

    update() {
        this.meshObj.position.y += 20;
    }

    get meshObj() {
        return this.mesh;
    }
}