
function setupPopup() {
    function openPopup() {
        document.getElementById("popup").style.display = "block";
    }

    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }

    function handleAreaClick() {
        openPopup();
    }

document.getElementById("oval-8708").addEventListener("click", handleAreaClick);

document.getElementById("close").addEventListener("click", closePopup);
}

document.addEventListener("DOMContentLoaded", setupPopup);
