let scene, camera, renderer, controls;


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
    controls.autoRotateSpeed = 1.125;
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
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}


function onWindowResize() {
    camera.aspect = (.875 * window.innerWidth) / (.875 * window.innerHeight);
    camera.updateProjectionMatrix();
    renderer.setSize(.875 * window.innerWidth, .875 * window.innerHeight);
}


function checkIfPastDate(cardArray) {
    // Get current date.
    let today = new Date();
    // Get date from card (first element of cardArray).
    let cardDate = new Date(cardArray[0]);
    // Compare dates.
    if (today > cardDate) {
        console.log("true");
        return true;
    }
    console.log("false");
    return false;
}


let cardArray = [
    ["2023-06-01", "01"],
    ["2023-06-02", "05"],
    ["2023-06-21", "07"]
];


// On document load.
window.onload = function () {
    // For each card in cardArray.
    for (let i = 0; i < cardArray.length; i++) {
        // If card is past date.
        if (checkIfPastDate(cardArray[i])) {
            // Add card to section.cards.
            let deck = document.getElementsByClassName("cards")[0];
            let card = document.createElement("img");
            card.classList.add("threed");
            card.setAttribute("onclick", "show3D('" + cardArray[i][1] + "');");
            card.setAttribute("src", "/img/cards/" + cardArray[i][1] + "/5.png");
            deck.appendChild(card);
        }
    }
}