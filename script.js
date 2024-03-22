

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



