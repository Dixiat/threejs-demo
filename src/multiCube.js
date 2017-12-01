import * as three from 'three';

const scene = new three.Scene();

const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

const renderer = new three.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("#2E2B40");
document.body.appendChild(renderer.domElement);

let geometry, material;
// cube1
geometry = new three.BoxGeometry(1, 1, 1)
material = new three.MeshBasicMaterial({ color: '#433F81' });
const cube1 = new three.Mesh(geometry, material);
scene.add(cube1);
// cube2
geometry = new three.BoxGeometry(1, 1, 1),
material = new three.MeshBasicMaterial({ color: '#A49FEF' });
const cube2 = new three.Mesh(geometry, material);
scene.add(cube2);
//cube1_wireframe
geometry = new three.BoxGeometry(3, 3, 3),
material = new three.MeshBasicMaterial({ color: '#433F81', wireframe: true });
const cube1_wireframe = new three.Mesh(geometry, material);
cube1_wireframe.position.z = 2;
scene.add(cube1_wireframe);
//cube2_wireframe
geometry = new three.BoxGeometry(3, 3, 3),
material = new three.MeshBasicMaterial({ color: '#A49FEF', wireframe: true });
const cube2_wireframe = new three.Mesh(geometry, material);
cube2_wireframe.position.z = 2;
scene.add(cube2_wireframe);

// change camera position
document.body.onmousemove = event => {
	camera.position.x = (event.x - window.innerWidth / 2) / 200;
    camera.position.y = -(event.y - window.innerHeight / 2) / 200;
    camera.lookAt(new three.Vector3(0, 0, 0));
};
document.body.onmousewheel = event => {
    camera.position.z += event.deltaY / 1000;
};

animate();

// function
function animate() {
    requestAnimationFrame(animate);

    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01;
    cube1_wireframe.rotation.x += 0.01;
    cube1_wireframe.rotation.y += 0.01;

    cube2.rotation.x -= 0.01;
    cube2.rotation.y -= 0.01;
    cube2_wireframe.rotation.x -= 0.01;
    cube2_wireframe.rotation.y -= 0.01;

    // 旋转摄像机
    // camera.position.x += i;
    // if (Math.abs(camera.position.x) >= 3) {
    //     i = -i;
    //     camera.position.x = Math.round(camera.position.x);
    // }
    // camera.position.z = i > 0
    //     ? Math.sqrt(9 - Math.pow(camera.position.x, 2))
    //     : -Math.sqrt(9 - Math.pow(camera.position.x, 2));
    // camera.lookAt(new three.Vector3(0, 0, 0));

    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
}

