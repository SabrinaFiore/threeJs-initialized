let scene, camera, renderer, sphere;
let ADD = 0.01;

let createSphere = function() {
	let geometry = new THREE.SphereGeometry(5, 30, 30, 0, Math.PI);
	let material = new THREE.MeshBasicMaterial({ color: 0xA2B6A2, wireframe: true });
	sphere = new THREE.Mesh( geometry, material );
	scene.add(sphere);
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

	createSphere();
	
	// create the renderer   
	renderer = new THREE.WebGLRenderer();   
	renderer.setSize(window.innerWidth, window.innerHeight);
	
	document.body.appendChild(renderer.domElement);
};
	
// main animation loop - calls 50-60 in a second.
let mainLoop = function() {
	sphere.rotation.x += ADD;
	sphere.rotation.y += ADD;
	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
};

init();
mainLoop();
