const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("main-content");
const MIN_WIDTH = 200; // Minimum width for the sidebar to display content

let isDragging = false;
let startX;
let startWidth;
let sidebarContent = document.createDocumentFragment(); // Store sidebar content

// Store initial sidebar content
for (let i = 0; i < sidebar.children.length; i++) {
    sidebarContent.appendChild(sidebar.children[i].cloneNode(true));
}

sidebar.addEventListener("mousedown", function(e) {
    isDragging = true;
    startX = e.clientX;
    startWidth = parseInt(window.getComputedStyle(sidebar).width);
});

document.addEventListener("mousemove", function(e) {
    if (!isDragging) return;
    let newWidth = startWidth + e.clientX - startX;

    // Check if new width is greater than minimum width
    if (newWidth >= MIN_WIDTH) {
        sidebar.style.width = newWidth + "px";
    } else {
        sidebar.style.width = MIN_WIDTH + "px";
    }
});

document.addEventListener("mouseup", function() {
    isDragging = false;
});




function showPhoto() {
    document.getElementById("photoPopup").style.display = 'block';
    document.getElementById("textPopup").style.display = 'block';
    document.getElementById("out_of_sidebar").style.width = "100%";
    document.getElementById("profile_image_box").style.padding = "2.2vw";
}

function hidePhoto(){
    document.getElementById("photoPopup").style.display = 'none';
    document.getElementById("textPopup").style.display = 'none';
    document.getElementById("out_of_sidebar").style.width = "auto";
    document.getElementById("profile_image_box").style.padding = "0";
}

document.addEventListener('DOMContentLoaded', function() {
    hidePhoto();
  });

