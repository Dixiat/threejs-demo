import * as three from 'three';

// 创建场景
const scene = new three.Scene();
// 添加相机
const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// 创建一个渲染器
const renderer = new three.WebGLRenderer({
    alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
// 渲染器置入DOM
document.body.appendChild(renderer.domElement);

// 创建立方体
const geometry = new three.BoxGeometry(20, 20, 20);
const material = new three.MeshPhongMaterial({
    color: 0xfd59d7,
    specular: 0x009900,
    shininess: 10
});
var cube = new three.Mesh(geometry, material);
scene.add(cube);

// 更新立方体形状
for (let i = 0, l = geometry.vertices.length; i < l; i++) {
    geometry.vertices[i].x += -10 + Math.random() * 20;
    geometry.vertices[i].y += -10 + Math.random() * 20;
}

// 添加光源
const light = new three.PointLight(0xFFFF00);
light.position.set(10, 0, 25);
scene.add(light);

camera.position.z = 100;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
}
animate();