let scene, camera, renderer, torus;
let ADD = 0.01;

let createTorus = function() {
	let geometry = new THREE.TorusGeometry(5, 1, 5, 30);
	let material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
	torus = new THREE.Mesh( geometry, material );
	scene.add(torus);
}
     
// set up the environment - initiallize scene, camera, objects and renderer
let init = function() {
	// create the scene
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x000000);
	
	// create an locate the camera
	camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.z = 20;

	let axes = new THREE.AxesHelper(5);
	scene.add(axes);

	createTorus();
	
	// create the renderer   
	renderer = new THREE.WebGLRenderer();   
	renderer.setSize(window.innerWidth, window.innerHeight);
	
	document.body.appendChild(renderer.domElement);
};
	
// main animation loop - calls 50-60 in a second.
let mainLoop = function() {
	torus.rotation.x += ADD;
	torus.rotation.y += ADD;
	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
};

init();
mainLoop();
