const nameOfUser = localStorage.getItem("userName") || "Guest"; // Retrieve name from local storage or set default
const nameElement = document.getElementById("nameOfUser");

function typeWriterEffect(text, element, speed = 150) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => {
                element.innerHTML = ""; // Clear and restart
                index = 0;
                type();
            }, 2000); // Pause before restarting
        }
    }
    type();
}

document.addEventListener("DOMContentLoaded", () => {
    typeWriterEffect(nameOfUser, nameElement);
});
