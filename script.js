function storedata() {
    

    let inputValue = document.getElementById("name");
    localStorage.setItem("name", inputValue.value)



    let email = document.getElementById("email");
    localStorage.setItem("email", email.value)

    let pass = document.getElementById("Password");
    localStorage.setItem("Password", pass.value)
    alert("password done")
}

// let input = document.write(input).value

// let name = "hania"
// let email = "haniasamad04@gmail.com"
// let Password = "99"

// if(name == hania){
    
//     }
// else if (email == "haniasamad04@gmail.com"){
    
// }
// else()

