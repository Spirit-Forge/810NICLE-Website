/*******************
 * IMAGE FUNCTIONS *
 *******************/

function addZoomEventListeners() {
    let images = document.querySelectorAll("main section img.zoomable");

    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function () {
            let src = this.src;
            let alt = this.alt;
            let img = document.createElement("img");
            img.setAttribute("src", src);

            let zoom = document.createElement("div");
            zoom.classList.add("zoom");

            document.body.appendChild(zoom);
            zoom.appendChild(img);

			document.getElementById("body").style.overflow = "hidden";

            if (alt != ("img" || "" || null)) {
                let caption = document.createElement("p");
                caption.innerHTML = alt;
                zoom.appendChild(caption);
            }

            let exit = document.createElement("span");
            exit.classList.add("exitSpan");
            exit.setAttribute("onclick", "closeImage();");
            exit.innerHTML = "X";
            zoom.appendChild(exit);
            $(".zoom").fadeTo("fast", 1);
        });
    }

    let trailerButtons = document.querySelectorAll("main > h1 > a.trailerButton");

    for (var i = 0; i < trailerButtons.length; i++) {
        trailerButtons[i].addEventListener("click", function () {
            let zoom = document.createElement("div");
            zoom.classList.add("zoom");

            document.body.appendChild(zoom);
            zoom.innerHTML += '<div class="container"><iframe class="responsive-iframe" width="1920" height="1080" src="https://www.youtube.com/embed/k_5MFpyIua8?autoplay=1&vq=1080" title="Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';

            let exit = document.createElement("span");
            exit.classList.add("exitSpan");
            exit.setAttribute("onclick", "closeImage();");
            exit.innerHTML = "X";
            zoom.appendChild(exit);
            $(".zoom").fadeTo("fast", 1);
        });
    }
	
    let OMFG1Buttons = document.querySelectorAll("td > h3 > a.OMFG1Button");

    for (var i = 0; i < OMFG1Buttons.length; i++) {
        OMFG1Buttons[i].addEventListener("click", function () {
            let zoom = document.createElement("div");
            zoom.classList.add("zoom");

            document.body.appendChild(zoom);
            zoom.innerHTML += '<div class="container"><iframe class="responsive-iframe" width="auto%" height="auto%" src="../schedule/film1.html" title="Onu-Metru Film Gala Schedule" frameborder="0"></iframe></div>';
			document.getElementById("body").style.overflow = "hidden";

            let exit = document.createElement("span");
            exit.classList.add("exitSpan");
            exit.setAttribute("onclick", "closeImage();");
            exit.innerHTML = "X";
            zoom.appendChild(exit);
            $(".zoom").fadeTo("fast", 1);
        });
    }

    let OMFG2Buttons = document.querySelectorAll("td > h3 > a.OMFG2Button");

    for (var i = 0; i < OMFG2Buttons.length; i++) {
        OMFG2Buttons[i].addEventListener("click", function () {
            let zoom = document.createElement("div");
            zoom.classList.add("zoom");

            document.body.appendChild(zoom);
            zoom.innerHTML += '<div class="container"><iframe class="responsive-iframe" width="auto%" height="auto%" src="../schedule/film2.html" title="Onu-Metru Film Gala Schedule" frameborder="0"></iframe></div>';
			document.getElementById("body").style.overflow = "hidden";

            let exit = document.createElement("span");
            exit.classList.add("exitSpan");
            exit.setAttribute("onclick", "closeImage();");
            exit.innerHTML = "X";
            zoom.appendChild(exit);
            $(".zoom").fadeTo("fast", 1);
        });
    }
	
    let DirectButtons = document.querySelectorAll("td > h3 > a.DirectButton");

    for (var i = 0; i < DirectButtons.length; i++) {
        DirectButtons[i].addEventListener("click", function () {
            let zoom = document.createElement("div");
            zoom.classList.add("zoom");

            document.body.appendChild(zoom);
            zoom.innerHTML += '<div class="container"><iframe class="responsive-iframe" width="auto%" height="auto%" src="../schedule/direct.html" title="810NICLE Direct Schedule" frameborder="0"></iframe></div>';
			document.getElementById("body").style.overflow = "hidden";

            let exit = document.createElement("span");
            exit.classList.add("exitSpan");
            exit.setAttribute("onclick", "closeImage();");
            exit.innerHTML = "X";
            zoom.appendChild(exit);
            $(".zoom").fadeTo("fast", 1);
        });
    }

    let BBButtons = document.querySelectorAll("td > h3 > a.BBButton");

    for (var i = 0; i < BBButtons.length; i++) {
        BBButtons[i].addEventListener("click", function () {
            let zoom = document.createElement("div");
            zoom.classList.add("zoom");

            document.body.appendChild(zoom);
            zoom.innerHTML += '<div class="container"><iframe class="responsive-iframe" width="auto%" height="auto%" src="../schedule/bb.html" title="Beyond BIONICLE Schedule" frameborder="0"></iframe></div>';
			document.getElementById("body").style.overflow = "hidden";

            let exit = document.createElement("span");
            exit.classList.add("exitSpan");
            exit.setAttribute("onclick", "closeImage();");
            exit.innerHTML = "X";
            zoom.appendChild(exit);
            $(".zoom").fadeTo("fast", 1);
        });
    }
}

document.onload = addZoomEventListeners();

function closeImage() {
    $(".zoom").fadeOut("fast");
    setTimeout(() => {
        $(".zoom").remove();
    }, 200);
	document.getElementById("body").style.overflow = "inherit";
}

window.onclick = function (event) {
    if (event.target.classList.contains('zoom')) {
        closeImage();
    } else if (event.target.classList.contains('modal')) {
        generalToggle();
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeImage();
    }
});

/***********************
 * END IMAGE FUNCTIONS *
 * *********************/