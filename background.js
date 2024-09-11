// Function to change the background color to a gradient with black at the bottom
function changeBackgroundColor(color) {
    document.body.style.background = `linear-gradient(${color}, black)`;
}

// Function to reset the background color to a specific button color and black when mouse leaves
function fadeToColor(color) {
    document.body.style.background = `linear-gradient(${color}, black)`;
}

// Add event listeners for each button to handle hover events
document.getElementById("twitch").addEventListener("mouseover", function() {
    changeBackgroundColor('#6441a5'); // Twitch purple
});
document.getElementById("twitch").addEventListener("mouseout", function() {
    fadeToColor('#6441a5'); // Twitch purple
});

document.getElementById("twitter1").addEventListener("mouseover", function() {
    changeBackgroundColor('#1da1f2'); // Twitter blue
});
document.getElementById("twitter1").addEventListener("mouseout", function() {
    fadeToColor('#1da1f2'); // Twitter blue
});

document.getElementById("twitter2").addEventListener("mouseover", function() {
    changeBackgroundColor('#1da1f2'); // Twitter blue
});
document.getElementById("twitter2").addEventListener("mouseout", function() {
    fadeToColor('#1da1f2'); // Twitter blue
});

document.getElementById("youtube").addEventListener("mouseover", function() {
    changeBackgroundColor('#ff0000'); // YouTube red
});
document.getElementById("youtube").addEventListener("mouseout", function() {
    fadeToColor('#ff0000'); // YouTube red
});

document.getElementById("discord1").addEventListener("mouseover", function() {
    changeBackgroundColor('#7289da'); // Discord blue
});
document.getElementById("discord1").addEventListener("mouseout", function() {
    fadeToColor('#7289da'); // Discord blue
});

document.getElementById("discord2").addEventListener("mouseover", function() {
    changeBackgroundColor('#7289da'); // Discord blue
});
document.getElementById("discord2").addEventListener("mouseout", function() {
    fadeToColor('#7289da'); // Discord blue
});

document.getElementById("Github").addEventListener("mouseover", function() {
    changeBackgroundColor('#333'); // GitHub black
});
document.getElementById("Github").addEventListener("mouseout", function() {
    fadeToColor('#333'); // GitHub black
});
