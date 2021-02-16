let scene, camera, renderer, cube;
let ADD = 0.01;

let createCube = function() {
	let geometry = new THREE.BoxGeometry(1, 1, 1, 0, Math.PI);
	let material = new THREE.MeshBasicMaterial({ color: 0x00a1cb, wireframe: true });
	cube = new THREE.Mesh( geometry, material );
	scene.add(cube);
}
     
// set up the environment - initiallize scene, camera, objects and renderer
let init = function() {
	// create the scene
	scene = new THREE.Scene();
	// scene.background = new THREE.Color(0x074242);
	scene.background = new THREE.Color(0x000000);
	
	// create an locate the camera
	camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.z = 5;

	let axes = new THREE.AxesHelper(5);
	scene.add(axes);

	createCube();
	
	// create the renderer   
	renderer = new THREE.WebGLRenderer();   
	renderer.setSize(window.innerWidth, window.innerHeight);
	
	document.body.appendChild(renderer.domElement);
};
	
// main animation loop - calls 50-60 in a second.
let mainLoop = function() {
	cube.rotation.y += ADD;
	cube.rotation.z += ADD;

	if(cube.position.x <= -3 || cube.position.x >= 3)
	ADD *= -1;

	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
};

init();
mainLoop();
