function togglemenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function openCvPdf() {
    const filePath = "assets/CV-Raha-Kariminia.pdf";
    const fileName = "raha-kariminia-cv.pdf";

    window.open(filePath, "_blank");

  }
