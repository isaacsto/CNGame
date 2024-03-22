

function openPopup() {
        document.getElementById("popup").style.display = "block";
}
  

    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }

    function handleAreaClick() {
        openPopup();
    }

document.getElementById("finishing").addEventListener("click", handleAreaClick);

document.getElementById("close").addEventListener("click", closePopup);

const popupImage = document.getElementById("popup-image-finishing");
const changePhotoButton = document.getElementById("changePhoto");
const backPhotoButton = document.getElementById("backPhoto");
const svgGrid = document.querySelector(".svg-popup-wrap");

const imageUrls = [
    "/CNProjects/CNGame/assets/01_finished_basement_set_7_before_rid_6822_rid.jpg",
    "/CNProjects/CNGame/assets/02_finished_basement_set_7_after_rid_6816_rid.jpg", 
];

let currentImageIndex = 0; 

backPhotoButton.style.display = "none";
const nextPopupButton = document.getElementById("nextPopup");

changePhotoButton.addEventListener("click", function() {
    if (currentImageIndex < imageUrls.length - 1) {
    currentImageIndex++;
    popupImage.src = imageUrls[currentImageIndex];
    backPhotoButton.style.display = "inline-block";
    svgGrid.classList.add("hide");
    popupImage.style.opacity = 0;
    setTimeout(() => {
        popupImage.style.opacity = 1;
    }, 100);
    changePhotoButton.style.display = "none";
    nextPopupButton.style.display = "inline-block";
}

});
backPhotoButton.addEventListener("click", function() {
    if (currentImageIndex > 0) {
    currentImageIndex--;
    popupImage.src = imageUrls[currentImageIndex];
    svgGrid.classList.add("hide");
    popupImage.style.opacity = 0;
    setTimeout(() => {
        popupImage.style.opacity = 1;
    }, 100);
}

});

nextPopupButton.addEventListener("click", function() {
    document.getElementById("popup-quiz").style.display = "block";
    document.getElementById("popup").style.display = "none";
});






