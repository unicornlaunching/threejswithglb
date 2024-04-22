// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 10);

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Load GLB model
const loader = new THREE.GLTFLoader();
loader.load('inmybedroom.glb', (gltf) => {
  console.log(gltf); // Debugging: check if the model is loaded successfully
  scene.add(gltf.scene);
}, undefined, function(error) {
  console.error(error); // Debugging: log any errors while loading the model
});

// Add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

// Add controls to navigate the scene
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update(); // Update controls every frame
}
animate();
