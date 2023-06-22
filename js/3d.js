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
    camera.position.z = 1;
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
    const material = [
        new THREE.MeshBasicMaterial({ map: loader.load('/img/cards/' + id + '/5.webp'), side: THREE.DoubleSide, wireframe: false }),
        new THREE.MeshBasicMaterial({ map: loader.load('/img/cards/' + id + '/6.webp'), side: THREE.DoubleSide, wireframe: false }),
        // Plain white material for the sides.
        new THREE.MeshBasicMaterial({ color: 0xffffff }),
    ];

    // Add a bevel to the card.
    const geometry = RoundEdgedBoxFlat(.75, 1.05, .002, .05, 12);
    geometry.computeVertexNormals();
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Add elements to container and start animation.
    container.appendChild(renderer.domElement);
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


/*
let cardArray = ["01", "02", "03", "04"];


// On document load.
window.onload = function () {
    // For each card in cardArray.
    for (let i = 0; i < cardArray.length; i++) {
        // Add card to section.cards.
        let deck = document.getElementsByClassName("cards")[0];
        let card = document.createElement("img");
        card.classList.add("threed");
        card.setAttribute("onclick", "show3D('" + cardArray[i] + "');");
        card.setAttribute("src", "../img/cards/" + cardArray[i] + "/5.webp");
        deck.appendChild(card);
    }
}
*/



function RoundEdgedBoxFlat(w, h, t, r, s) { // width, height, thick, radius corner, smoothness

    // helper const's and let's
    const wi = w / 2 - r;		// inner width, half
    const hi = h / 2 - r;		// inner height, half 
    const w2 = w / 2;			// half width
    const h2 = h / 2;			// half height

    let ul = r / w;				// u left front side
    let ur = (w - r) / w;		// u right front side
    const vl = r / h;			// v low
    const vh = (h - r) / h;	// v high

    let phia, phib, xc, yc, uc, vc, cosa, sina, cosb, sinb;

    let positions = [];
    let uvs = [];

    // for front side
    let t2 = t / 2;			// +  half thick
    let u0 = ul;
    let u1 = ur;
    let u2 = 0;
    let u3 = 1;
    let sign = 1;

    for (let k = 0; k < 2; k++) {  // front and back side

        positions.push(

            -wi, -h2, t2, wi, -h2, t2, wi, h2, t2,
            -wi, -h2, t2, wi, h2, t2, -wi, h2, t2,
            -w2, -hi, t2, -wi, -hi, t2, -wi, hi, t2,
            -w2, -hi, t2, -wi, hi, t2, -w2, hi, t2,
            wi, -hi, t2, w2, -hi, t2, w2, hi, t2,
            wi, -hi, t2, w2, hi, t2, wi, hi, t2

        );

        uvs.push(

            u0, 0, u1, 0, u1, 1,
            u0, 0, u1, 1, u0, 1,
            u2, vl, u0, vl, u0, vh,
            u2, vl, u0, vh, u2, vh,
            u1, vl, u3, vl, u3, vh,
            u1, vl, u3, vh, u1, vh

        );

        phia = 0;

        for (let i = 0; i < s * 4; i++) {

            phib = Math.PI * 2 * (i + 1) / (4 * s);

            cosa = Math.cos(phia);
            sina = Math.sin(phia);
            cosb = Math.cos(phib);
            sinb = Math.sin(phib);

            xc = i < s || i >= 3 * s ? wi : -wi;
            yc = i < 2 * s ? hi : -hi;

            positions.push(xc, yc, t2, xc + r * cosa, yc + r * sina, t2, xc + r * cosb, yc + r * sinb, t2);

            uc = i < s || i >= 3 * s ? u1 : u0;
            vc = i < 2 * s ? vh : vl;

            uvs.push(uc, vc, uc + sign * ul * cosa, vc + vl * sina, uc + sign * ul * cosb, vc + vl * sinb);

            phia = phib;

        }

        // for back side
        t2 = -t2;	// - half thick
        u0 = ur;	// right left exchange
        u1 = ul;
        u2 = 1;
        u3 = 0;
        sign = -1;

    }

    // framing

    t2 = t / 2;	// + half thick (again)

    positions.push(

        -wi, -h2, t2, -wi, -h2, -t2, wi, -h2, -t2,
        -wi, -h2, t2, wi, -h2, -t2, wi, -h2, t2,
        w2, -hi, t2, w2, -hi, -t2, w2, hi, -t2,
        w2, -hi, t2, w2, hi, -t2, w2, hi, t2,
        wi, h2, t2, wi, h2, -t2, -wi, h2, -t2,
        wi, h2, t2, -wi, h2, -t2, -wi, h2, t2,
        -w2, hi, t2, -w2, hi, -t2, -w2, -hi, -t2,
        -w2, hi, t2, -w2, -hi, -t2, -w2, -hi, t2

    );

    const cf = 2 * ((w + h - 4 * r) + Math.PI * r); // circumference
    const cc4 = Math.PI * r / 2 / cf  // circle-circumference / 4 / circumference
    u0 = 0;
    u1 = 2 * wi / cf;
    u2 = u1 + cc4;
    u3 = u2 + 2 * hi / cf;

    const u4 = u3 + cc4;
    const u5 = u4 + 2 * wi / cf;
    const u6 = u5 + cc4;
    const u7 = u6 + 2 * hi / cf;

    uvs.push(

        u0, 1, 0, 0, u1, 0,
        u0, 1, u1, 0, u1, 1,
        u2, 1, u2, 0, u3, 0,
        u2, 1, u3, 0, u3, 1,
        u4, 1, u4, 0, u5, 0,
        u4, 1, u5, 0, u5, 1,
        u6, 1, u6, 0, u7, 0,
        u6, 1, u7, 0, u7, 1

    );

    phia = 0;
    let u, j, j1;
    const ccs = cc4 / s; // partial value according to smoothness

    for (let i = 0; i < s * 4; i++) {

        phib = Math.PI * 2 * (i + 1) / (4 * s);

        cosa = Math.cos(phia);
        sina = Math.sin(phia);
        cosb = Math.cos(phib);
        sinb = Math.sin(phib);

        xc = i < s || i >= 3 * s ? wi : -wi;
        yc = i < 2 * s ? hi : -hi;

        positions.push(xc + r * cosa, yc + r * sina, t2, xc + r * cosa, yc + r * sina, -t2, xc + r * cosb, yc + r * sinb, -t2);
        positions.push(xc + r * cosa, yc + r * sina, t2, xc + r * cosb, yc + r * sinb, -t2, xc + r * cosb, yc + r * sinb, t2);

        u = i < s ? u3 : (i < 2 * s ? u5 : (i < 3 * s ? u7 : u1)); // Attention! different start to front/back

        j = i % s;
        j1 = j + 1;

        uvs.push(u + j * ccs, 1, u + j * ccs, 0, u + j1 * ccs, 0);
        uvs.push(u + j * ccs, 1, u + j1 * ccs, 0, u + j1 * ccs, 1);

        phia = phib;

    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), 2));

    // add multimaterial groups for front, back, framing

    const vtc = (6 + 4 * s) * 3;		// vertex count one side
    geometry.addGroup(0, vtc, 0);
    geometry.addGroup(vtc, vtc, 1);
    geometry.addGroup(2 * vtc, 24 + 2 * 3 * 4 * s, 2);

    return geometry;

}