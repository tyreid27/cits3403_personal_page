// Dark Mode button. Switch to dark mode and back when button is pressed
/*$(document).ready( function() {
    const switchButton = document.getElementsByClassName('btn-dark');

    if (switchButton != null) {
        switchButton[0].addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
    } 
}); 
*/

window.onload = function() {
    function randomize() {
        document.body.style.backgroundColor = randomColors();
    }
    
    function randomColors() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    
    document.getElementById('btn-random').onclick = function(){randomize()}
}

