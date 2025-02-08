const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const sadMessage = document.getElementById('sad-message');

// Function for what happens when "Yes" is clicked
yesBtn.addEventListener('click', function() {
    alert("Yay! You made me so happy! 💖");
    window.location.reload();  // Optionally reload the page after a happy response.
});

// Function for what happens when "No" is clicked
noBtn.addEventListener('click', function() {
    sadMessage.classList.remove('hidden');
    noBtn.disabled = true;  // Disable the "No" button after it's clicked

    // Keep showing the sad message and not allow them to leave until "Yes" is clicked
    setTimeout(function() {
        alert("Come on, please say yes! I promise it will be fun 💖");
    }, 2000);
});
