/* ==========================================
   YOUR BRO - script.js
========================================== */

// Search folders on the home page
function searchFolders() {

    let input = document.getElementById("searchInput");

    if (!input) return;

    let filter = input.value.toLowerCase();

    let cards = document.querySelectorAll(".folder-card");

    cards.forEach(function(card){

        let title = card.querySelector("h3").textContent.toLowerCase();

        let desc = card.querySelector("p").textContent.toLowerCase();

        if(title.includes(filter) || desc.includes(filter)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

}

/* ==========================================
   Download Button
========================================== */

function downloadFile(link){

    if(link === ""){
        alert("Download link has not been added yet.");
        return;
    }

    window.open(link,"_blank");

}

/* ==========================================
   Coming Soon
========================================== */

function comingSoon(){

    alert("Coming Soon!");

}

/* ==========================================
   Smooth Fade Animation
========================================== */

window.addEventListener("load",function(){

    document.body.style.opacity="0";

    document.body.style.transition="opacity .5s";

    setTimeout(function(){

        document.body.style.opacity="1";

    },100);

});

/* ==========================================
   Active Navigation
========================================== */

let currentPage = window.location.pathname.split("/").pop();

let navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link){

    let href = link.getAttribute("href");

    if(href === currentPage){

        link.classList.add("active");

    }

});

/* ==========================================
   Console Message
========================================== */

console.log("YOUR BRO Website Loaded Successfully!");