/*******************
 * IMAGE FUNCTIONS *
 *******************/


function addZoomEventListeners() {
    let images = document.querySelectorAll("main > section > img.zoomable");

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

            if (alt != ("img" || "" || null)) {
                let caption = document.createElement("p");
                caption.innerHTML = alt;
                zoom.appendChild(caption);
            }

            let exit = document.createElement("span");
            exit.classList.add("exitSpan");
            exit.setAttribute("onclick", "closeImage();");
            exit.innerHTML = "🞮";
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
            zoom.innerHTML += '<video controls autoplay><source src="/img/810_2023_Logo_active_VP9.webm" type="video/webm">Your browser does not support the video tag.</video>';

            let exit = document.createElement("span");
            exit.classList.add("exitSpan");
            exit.setAttribute("onclick", "closeImage();");
            exit.innerHTML = "🞮";
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