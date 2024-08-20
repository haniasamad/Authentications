function signUp() {
    let email = document.getElementById("email").value
    let localStorageEmail = localStorage.getItem("email");

    let password = document.getElementById("Password").value
    let localStoragePassword = localStorage.getItem("Password");

    if (email === localStorageEmail && password === localStoragePassword) {
        alert("good job")
    }
    else {
        alert("try")
    }

}
