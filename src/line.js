import * as three from 'three';

// 创建场景
const scene = new three.Scene();
// 添加相机
const camera = new three.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(new three.Vector3(0, 0, 0));

// 创建一个渲染器
const renderer = new three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// 渲染器置入DOM
document.body.appendChild(renderer.domElement);

// 创建线条
const geometry = new three.Geometry();
geometry.vertices.push(new three.Vector3(-10, 0, 0));
geometry.vertices.push(new three.Vector3(0, 10, 0));
geometry.vertices.push(new three.Vector3(10, 0, 0));
const material = new three.LineBasicMaterial({ color: 0x0000ff });
const line = new three.Line(geometry, material);
scene.add(line);

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}
animate();