function change() {
    let n = document.getElementById("ip").value.trim(); // Get value from input

    if (n === "") {
        alert("Name field can't be empty...");
    } else {
        localStorage.setItem("userName", n); // Store name in local storage
        window.location.href = "mubarak.html"; // Redirect to Mubarak page
    }
}

function changeB() {
    let name = localStorage.getItem("userName"); // Retrieve name from local storage

    if (name) {
        document.getElementById("nameOfUser").innerText = name + "!";
    }
}
