let currentImageIndex = 0;

//eventlisteners to call functions to open or close popups 
document.getElementById("finishing").addEventListener("click", openBasementFinishing);
document.getElementById("water-proofing").addEventListener("click", openBasementWaterproofing);
document.getElementById("gutters").addEventListener("click", openGutters);
document.getElementById("crawl-space").addEventListener("click", openCrawlSpace);
document.getElementById("foundation").addEventListener("click", openFoundation);
document.getElementById("air-purifier").addEventListener("click", openAir);

document.getElementById("close").addEventListener("click", closePopupBF);
document.getElementById("close-wp").addEventListener("click", closePopupWP);
document.getElementById("close-gutters").addEventListener("click", closePopupGutters);
document.getElementById("close-crawl").addEventListener("click", closePopupGutters);
document.getElementById("close-foundation").addEventListener("click", closePopupFoundation);
document.getElementById("close-air").addEventListener("click", closePopupAir);

function closePopupBF() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("quiz-popup").style.display = "none";
    const popup = document.getElementById("popup");
    popup.style.display = "none";
    document.body.classList.remove("popup-active");
    document.getElementById("overlay").style.display = "none";
    history.replaceState(null, "", window.location.pathname);
    currentImageIndex = 0; 
    location.reload();

}
function closePopupWP() {
    const popup = document.getElementById("popup-wp");
    popup.style.display = "none";
    document.body.classList.remove("popup-active");
    document.getElementById("quiz-popup-wp").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    currentImageIndex = 0; 
    location.reload();
}
function closePopupGutters() {
    const popup = document.getElementById("popup-gutters");
    popup.style.display = "none";
    document.body.classList.remove("popup-active");
    document.getElementById("quiz-popup-gutters").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    currentImageIndex = 0; 
    location.reload();
}
function closePopupCrawl() {
    const popup = document.getElementById("popup-crawl");
    popup.style.display = "none";
    document.body.classList.remove("popup-crawl");
    document.getElementById("quiz-popup-crawl").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    currentImageIndex = 0; 
    location.reload();
}
function closePopupFoundation() {
    const popup = document.getElementById("popup-foundation");
    popup.style.display = "none";
    document.body.classList.remove("popup-foundation");
    document.getElementById("quiz-popup-foundation").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    currentImageIndex = 0; 
    location.reload();
}
function closePopupAir() {
    const popup = document.getElementById("popup-air");
    popup.style.display = "none";
    document.body.classList.remove("popup-air");
    document.getElementById("quiz-popup-air").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    currentImageIndex = 0; 
    location.reload();

}

function closePopupFoundation() {
    const popup = document.getElementById("popup-foundation");
    popup.style.display = "none";
    document.body.classList.remove("popup-foundation");
    document.getElementById("quiz-popup-foundation").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    currentImageIndex = 0; 
    location.reload();
}

//openBasementFinishing is commented the other functions are the same
function openBasementFinishing() {
    location.reload();
    // logic to open popup 
    const popup = document.getElementById("popup");
    popup.style.display = "block";
    document.body.classList.add("popup-active");
    document.getElementById("overlay").style.display = "block";
 
// get elements by ids 
const popupImage = document.getElementById("popup-image-finishing");
const changePhotoButton = document.getElementById("changePhoto");
const backPhotoButton = document.getElementById("backPhoto");
const svgGrid = document.querySelector(".svg-popup-grid");
const svgGridTwo = document.querySelector(".svg-popup-grid-finishing-two");

const imageUrls = [
    "https://cdn.treehouseinternetgroup.com/cms_images/7/unfinished_basement.jpg",
    "https://cdn.treehouseinternetgroup.com/cms_images/7/finishedbasement.jpg", 
];
let currentImageIndex = 0; 

// handles next and back buttons / image behavior 
backPhotoButton.style.display = "none";
const nextPopupButton = document.getElementById("nextPopup");
svgGridTwo.classList.add("hide");

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
    svgGridTwo.classList.remove("hide");
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
    svgGridTwo.classList.add("hide");
}
});
//handles quiz display and behavior 
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
            resultText.textContent = "Correct! Do you want to share this on Facebook?";
            resultText.classList.add("correct");
        } else {
            resultText.textContent = "Sorry, try again!";
        }
    }
});
document.getElementById("quiz-form-finishing").addEventListener("submit", showButton )
//show share button at end of quiz 
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

function openBasementWaterproofing() {
    location.reload();
    const popup = document.getElementById("popup-wp");
    popup.style.display = "block";
    document.body.classList.add("popup-active");
    document.getElementById("overlay").style.display = "block";
    
    const popupImage = document.getElementById("popup-image-wp");
    const changePhotoButton = document.getElementById("changePhoto-wp");
    const backPhotoButton = document.getElementById("backPhoto-wp");
    const svgGrid = document.querySelector(".svg-popup-grid-wp");
    const singleSvg = document.querySelector(".single-svg-wp");
    
    
    const imageUrls = [
        "https://cdn.treehouseinternetgroup.com/cms_images/7/waterproofbefore.jpg",
        "https://cdn.treehouseinternetgroup.com/cms_images/7/basementwaterproof.jpg", 
    ];
    currentImageIndex = 0; 
    
    backPhotoButton.style.display = "none";
    const nextPopupButton = document.getElementById("next-popup-wp");
    svgGrid.classList.add("hide"); 
    
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
        svgGrid.classList.remove("hide");
        singleSvg.classList.add("hide"); 
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
        svgGrid.classList.add("hide"); 
        singleSvg.classList.remove("hide");
    }
    });
    const popupQuiz= document.getElementById("quiz-popup-wp");
    
    nextPopupButton.addEventListener("click", function() {
        popupQuiz.style.display = "block";
        popupQuiz.classList.add("quiz-active");
    });
    const quizForm = document.getElementById("quiz-form-wp");
    const resultText = document.getElementById("result-wp");
    
    quizForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (!selectedAnswer) {
            resultText.textContent = "Please select an answer.";
        } else {
            const answer = selectedAnswer.value;
            if (answer === "c") {
                resultText.textContent = "Correct! Do you want to share this on Facebook?";
                resultText.classList.add("correct");
            } else {
                resultText.textContent = "Sorry, try again!";
            }
        }
    });
    document.getElementById("quiz-form-wp").addEventListener("submit", showButton )
    
    function showButton() {
        document.getElementById("share_button_wp").style.display = "block";
    }
    const shareFacebookButton = document.getElementById("share_button_wp");
    shareFacebookButton.addEventListener("click", function() {
        const shareUrl = "https://www.connecticutbasementsystems.com/basement-finishing.html";
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(facebookShareUrl, "_blank");
    });
    
}   

function openGutters() {
    location.reload();
    const popup = document.getElementById("popup-gutters");
    popup.style.display = "block";
    document.body.classList.add("popup-active");
    document.getElementById("overlay").style.display = "block";
    
    const popupImage = document.getElementById("popup-image-gutters");
    const changePhotoButton = document.getElementById("changePhoto-gutters");
    const backPhotoButton = document.getElementById("backPhoto-gutters");
    const svgGrid = document.querySelector(".svg-popup-grid-gutters");
    const svgGridTwo = document.querySelector(".svg-popup-grid-gutters-two");
    
    const imageUrls = [
        "https://cdn.treehouseinternetgroup.com/cms_images/7/guttersbefore.jpg", 
        "https://cdn.treehouseinternetgroup.com/cms_images/7/guttersafter.jpg",  
    ];
    currentImageIndex = 0; 
    
    backPhotoButton.style.display = "none";
    const nextPopupButton = document.getElementById("next-popup-gutters");

    svgGridTwo.classList.add("hide");
    
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
        svgGridTwo.classList.remove("hide");
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
        svgGridTwo.classList.add("hide");
    }
    });
    const popupQuiz= document.getElementById("quiz-popup-gutters");
    
    nextPopupButton.addEventListener("click", function() {
        popupQuiz.style.display = "block";
        popupQuiz.classList.add("quiz-active");
    });
    const quizForm = document.getElementById("quiz-form-gutters");
    const resultText = document.getElementById("result-gutters");
    
    quizForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (!selectedAnswer) {
            resultText.textContent = "Please select an answer.";
        } else {
            const answer = selectedAnswer.value;
            if (answer === "a") {
                resultText.textContent = "Correct! Do you want to share this on Facebook?";
                resultText.classList.add("correct");
            } else {
                resultText.textContent = "Sorry, try again!";
            }
        }
    });
    document.getElementById("quiz-form-gutters").addEventListener("submit", showButton )
    
    function showButton() {
        document.getElementById("share_button_gutters").style.display = "block";
    }
    const shareFacebookButton = document.getElementById("share_button_gutters");
    shareFacebookButton.addEventListener("click", function() {
        const shareUrl = "https://www.connecticutbasementsystems.com/basement-finishing.html";
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(facebookShareUrl, "_blank");
    });
    
}

function openCrawlSpace() {
    location.reload();
    const popup = document.getElementById("popup-crawl");
    popup.style.display = "block";
    document.body.classList.add("popup-active");
    document.getElementById("overlay").style.display = "block";
    
    const popupImage = document.getElementById("popup-image-crawl");
    const changePhotoButton = document.getElementById("changePhoto-crawl");
    const backPhotoButton = document.getElementById("backPhoto-crawl");
    const svgGrid = document.querySelector(".svg-popup-grid-crawl");
    const svgGridTwo = document.querySelector(".svg-popup-grid-crawl-second-slide");
    
    const imageUrls = [
        "https://cdn.treehouseinternetgroup.com/cms_images/7/unfinishedcrawlspace.jpg",
        "https://cdn.treehouseinternetgroup.com/cms_images/7/finishedcrawlspace.jpg", 
    ];
    currentImageIndex = 0; 
    
    backPhotoButton.style.display = "none";
    const nextPopupButton = document.getElementById("next-popup-crawl");
    
    svgGridTwo.classList.add("hide");
    
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
        svgGridTwo.classList.remove("hide");
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
        svgGridTwo.classList.add("hide");
    }
    });
    const popupQuiz= document.getElementById("quiz-popup-crawl");
    
    nextPopupButton.addEventListener("click", function() {
        popupQuiz.style.display = "block";
        popupQuiz.classList.add("quiz-active");
    });
    const quizForm = document.getElementById("quiz-form-crawl");
    const resultText = document.getElementById("result-crawl");
    
    quizForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (!selectedAnswer) {
            resultText.textContent = "Please select an answer.";
        } else {
            const answer = selectedAnswer.value;
            if (answer === "d") {
                resultText.textContent = "Correct! Do you want to share this on Facebook?";
                resultText.classList.add("correct");
            } else {
                resultText.textContent = "Sorry, try again!";
            }
        }
    });
    document.getElementById("quiz-form-crawl").addEventListener("submit", showButton )
    
    function showButton() {
        document.getElementById("share_button_crawl").style.display = "block";
    }
    const shareFacebookButton = document.getElementById("share_button_crawl");
    shareFacebookButton.addEventListener("click", function() {
        const shareUrl = "https://www.connecticutbasementsystems.com/html";
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(facebookShareUrl, "_blank");
    });
    
}

function openFoundation() {
    location.reload();
    const popup = document.getElementById("popup-foundation");
    popup.style.display = "block";
    document.body.classList.add("popup-active");
    document.getElementById("overlay").style.display = "block";
    
    const popupImage = document.getElementById("popup-image-foundation");
    const changePhotoButton = document.getElementById("changePhoto-foundation");
    const backPhotoButton = document.getElementById("backPhoto-foundation");
    const svgGrid = document.querySelector(".svg-popup-grid-foundation");
    const svgGridTwo = document.querySelector(".svg-popup-grid-foundation-second-slide");
    
    const imageUrls = [
        "https://cdn.treehouseinternetgroup.com/cms_images/2811/dualimage_foundation.jpg",
        "https://cdn.treehouseinternetgroup.com/cms_images/2811/smartjack_after.jpg", 
    ];
    currentImageIndex = 0; 
    
    backPhotoButton.style.display = "none";
    const nextPopupButton = document.getElementById("next-popup-foundation");
    svgGridTwo.classList.add("hide"); 
    
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
        svgGridTwo.classList.remove("hide"); 
    }
    
    });
    backPhotoButton.addEventListener("click", function() {
        if (currentImageIndex > 0) {
        currentImageIndex--;
        popupImage.src = imageUrls[currentImageIndex];
        svgGridTwo.classList.add("hide");
        popupImage.style.opacity = 0;
        setTimeout(() => {
            popupImage.style.opacity = 1;
        }, 100);
        svgGridTwo.classList.add("hide"); 
    }
    });
    const popupQuiz= document.getElementById("quiz-popup-foundation");
    
    nextPopupButton.addEventListener("click", function() {
        popupQuiz.style.display = "block";
        popupQuiz.classList.add("quiz-active");
    });
    const quizForm = document.getElementById("quiz-form-foundation");
    const resultText = document.getElementById("result-foundation");
    
    quizForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (!selectedAnswer) {
            resultText.textContent = "Please select an answer.";
        } else {
            const answer = selectedAnswer.value;
            if (answer === "b") {
                resultText.textContent = "Correct! Do you want to share this on Facebook?";
                resultText.classList.add("correct");
            } else {
                resultText.textContent = "Sorry, try again!";
            }
        }
    });
    document.getElementById("quiz-form-foundation").addEventListener("submit", showButton )
    
    function showButton() {
        document.getElementById("share_button_foundation").style.display = "block";
    }
    const shareFacebookButton = document.getElementById("share_button_foundation");
    shareFacebookButton.addEventListener("click", function() {
        const shareUrl = "https://www.connecticutbasementsystems.com/html";
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(facebookShareUrl, "_blank");
    });
    
}

function openAir() {
    location.reload();
    const popup = document.getElementById("popup-air");
    popup.style.display = "block";
    document.body.classList.add("popup-active");
    document.getElementById("overlay").style.display = "block";
    
    const popupImage = document.getElementById("popup-image-air");
    const changePhotoButton = document.getElementById("changePhoto-air");
    const backPhotoButton = document.getElementById("backPhoto-air");
    const svgGrid = document.querySelector(".svg-popup-grid-air");
    const singleSvg = document.querySelector(".single-svg");
    
    const imageUrls = [
        "https://cdn.treehouseinternetgroup.com/cms_images/7/airfilter_model.jpg",
        "https://cdn.treehouseinternetgroup.com/cms_images/7/filter_breakdown.jpg", 
    ];
    currentImageIndex = 0; 
    
    backPhotoButton.style.display = "none";
    const nextPopupButton = document.getElementById("next-popup-air");
    svgGrid.classList.add("hide"); 
    
    changePhotoButton.addEventListener("click", function() {
        if (currentImageIndex < imageUrls.length - 1) {
            currentImageIndex++;
            popupImage.src = imageUrls[currentImageIndex];
            backPhotoButton.style.display = "inline-block";
            popupImage.style.opacity = 0;
            setTimeout(() => {
                popupImage.style.opacity = 1;
            }, 100);
            changePhotoButton.style.display = "none";
            nextPopupButton.style.display = "inline-block";
            svgGrid.classList.remove("hide");
            singleSvg.classList.add("hide"); 
        }
    });
    
    backPhotoButton.addEventListener("click", function() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            popupImage.src = imageUrls[currentImageIndex];
            popupImage.style.opacity = 0;
            setTimeout(() => {
                popupImage.style.opacity = 1;
            }, 100);
            svgGrid.classList.add("hide"); 
            singleSvg.classList.remove("hide");
        }
    });
    const popupQuiz= document.getElementById("quiz-popup-air");
    
    nextPopupButton.addEventListener("click", function() {
        popupQuiz.style.display = "block";
        popupQuiz.classList.add("quiz-active");
    });
    const quizForm = document.getElementById("quiz-form-air");
    const resultText = document.getElementById("result-air");
    
    quizForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (!selectedAnswer) {
            resultText.textContent = "Please select an answer.";
        } else {
            const answer = selectedAnswer.value;
            if (answer === "d") {
                resultText.textContent = "Correct! Do you want to share this on Facebook?";
                resultText.classList.add("correct");
            } else {
                resultText.textContent = "Sorry, try again!";
            }
        }
    });
    document.getElementById("quiz-form-air").addEventListener("submit", showButton )
    
    function showButton() {
        document.getElementById("share_button_air").style.display = "block";
    }
    const shareFacebookButton = document.getElementById("share_button_air");
    shareFacebookButton.addEventListener("click", function() {
        const shareUrl = "https://www.connecticutbasementsystems.com/html";
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(facebookShareUrl, "_blank");
    });
    
}

//just close quiz functions 
function closeQuizAir() {
    document.getElementById("quiz-popup-air").style.display = "none";
}
document.getElementById("close-quiz-air").addEventListener("click", closeQuizAir);

function closeQuizFoundation() {
    document.getElementById("quiz-popup-foundation").style.display = "none";
}
document.getElementById("close-quiz-foundation").addEventListener("click", closeQuizFoundation);

function closeQuizCrawlSpace() {
    document.getElementById("quiz-popup-crawl").style.display = "none";
}
document.getElementById("close-quiz-crawl").addEventListener("click", closeQuizCrawlSpace);

function closeQuizGutters() {
    document.getElementById("quiz-popup-gutters").style.display = "none";
}
document.getElementById("close-quiz-gutters").addEventListener("click", closeQuizGutters);

function closeQuizWaterProofing() {
    document.getElementById("quiz-popup-wp").style.display = "none";
}
document.getElementById("close-quiz-wp").addEventListener("click", closeQuizWaterProofing);

function closeQuizFinishing() {
    document.getElementById("quiz-popup").style.display = "none";
}
document.getElementById("close-quiz-finishing").addEventListener("click", closeQuizFinishing);