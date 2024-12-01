        // Function to display image or message in popup
        function showImage(imageUrl, type = "Certificate") {
            const popup = document.getElementById('popup');
            const popupImage = document.getElementById('popup-image');
            const popupMessage = document.getElementById('popup-message');
    
            if (imageUrl) {
                popupImage.src = imageUrl; // Correctly assign the passed image URL
                popupImage.style.display = "block";
                popupMessage.style.display = "none";
            } else {
                popupImage.style.display = "none";
                popupMessage.textContent = `${type} not Given 😢`;
                popupMessage.style.display = "block";
            }
    
            popup.style.display = "block";
        }
    
        // Function to close the popup
        function closePopup() {
            const popup = document.getElementById('popup');
            popup.style.display = "none";
        }