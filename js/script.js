const form = document.getElementById("registerForm");
const password = document.getElementById("psw"); 
const letter = document.getElementById("letter"); 
const capital = document.getElementById("capital"); 
const number = document.getElementById("number"); 
const length = document.getElementById("length"); 

// Show help block
password.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// Hide help block
password.onblur = function() {
    document.getElementById("message").style.display = "none";
}

// Check password
password.onkeyup = function() {
    let lowerCaseLetters = /[a-z]/;
    if (password.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    let upperCaseLetters = /[A-Z]/;
    if (password.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    let numbers = /[0-9]/;
    if (password.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    if (password.value.length >= 10) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

// Submit form
form.addEventListener("submit", event => {
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        sendUser();
    }

    form.classList.add("was-validated");
});

// Function to send user
function sendUser() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    let zip = document.getElementById("zip").value;
    let psw = document.getElementById("psw").value;

    let data = "firstname=" + firstname + "&lastname=" + lastname + "&email=" + email + "&city=" + city + "&zip=" + zip + "&psw=" + psw;

    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost/Register_app/process.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // multipart/form-data               (non-alphanumeric)
    // application/x-www-form-urlencoded (alphanumeric)

    xhttp.send(data);
}

// Cancel modal
function cancel() {
    form.classList.remove("was-validated");
    form.reset();
}