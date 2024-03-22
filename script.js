document.getElementById("finishing").addEventListener("click", openBasementFinishing);
document.getElementById("close").addEventListener("click", closePopup);

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("quiz-popup").style.display = "none";
}

function openBasementFinishing() {
document.getElementById("popup").style.display = "block";

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
const popupQuiz= document.getElementById("quiz-popup");

nextPopupButton.addEventListener("click", function() {
    popupQuiz.style.display = "block";
    popupQuiz.classList.add("quiz-active");
});
const quizForm = document.getElementById("quiz-form-finishing");
const resultText = document.getElementById("result");

quizForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        resultText.textContent = "Please select an answer.";
    } else {
        const answer = selectedAnswer.value;
        if (answer === "d") {
            resultText.textContent = "Correct!";
        } else {
            resultText.textContent = "Sorry, try again!";
        }
    }
});
document.getElementById("quiz-form-finishing").addEventListener("submit", showButton )

function showButton() {
    document.getElementById("share_button").style.display = "block";
}
const shareFacebookButton = document.getElementById("share_button");
shareFacebookButton.addEventListener("click", function() {
    const shareUrl = "https://www.connecticutbasementsystems.com/basement-finishing.html";
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookShareUrl, "_blank");
});

}









