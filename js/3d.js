let scene, camera, renderer, controls;
var id = null;


function closeImage() {
    $(".zoom").fadeOut("fast");
    setTimeout(() => {
        $(".zoom").remove();
    }, 200);
}


window.onclick = function (event) {
    if (event.target.classList.contains('zoom')) {
        closeImage();
    }
}


document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeImage();
    }
});



function show3D(id) {
    // Collect garbage.
    if (id !== null) {
        cancelAnimationFrame(id);
    }

    // Create container.
    let zoom = document.createElement("div");
    zoom.classList.add("zoom");
    document.body.appendChild(zoom);

    // Add exit button to container.
    let exit = document.createElement("span");
    exit.classList.add("exitSpan");
    exit.setAttribute("onclick", "closeImage();");
    exit.innerHTML = "X";
    zoom.appendChild(exit);
    $(".zoom").fadeTo("fast", 1);

    // Fetch container.
    let container = document.getElementsByClassName("zoom")[0];

    // Create and set up basic elements.
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, (.875 * window.innerWidth) / (.875 * window.innerHeight), 0.1, 1000);
    camera.position.z = 1.375;
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(.875 * window.innerWidth, .875 * window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Set up controls.
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.addEventListener('start', function () {
        controls.autoRotate = false;
    });

    // Load textures and create object.
    loadManager = new THREE.LoadingManager();
    loader = new THREE.TextureLoader(loadManager);
    const geometry = new THREE.BoxGeometry(.75, 1.05, .001);
    const materials = [
        new THREE.MeshBasicMaterial({ color: 0xffffff }),
        new THREE.MeshBasicMaterial({ color: 0xffffff }),
        new THREE.MeshBasicMaterial({ color: 0xffffff }),
        new THREE.MeshBasicMaterial({ color: 0xffffff }),
        new THREE.MeshBasicMaterial({ map: loader.load('/img/cards/' + id + '/5.png') }),
        new THREE.MeshBasicMaterial({ map: loader.load('/img/cards/' + id + '/6.png') }),
    ];
    const card = new THREE.Mesh(geometry, materials);

    // Add elements to container and start animation.
    container.appendChild(renderer.domElement);
    scene.add(card);
    window.addEventListener('resize', onWindowResize, false);
    animate();
}


function animate() {
    id = requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}


function onWindowResize() {
    camera.aspect = (.875 * window.innerWidth) / (.875 * window.innerHeight);
    camera.updateProjectionMatrix();
    renderer.setSize(.875 * window.innerWidth, .875 * window.innerHeight);
}

