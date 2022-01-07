let toBeAdded = [];


function submitHandler(event) {
    event.preventDefault();

    const username = document.getElementById("fullName").value;
    const contact = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const parse = localStorage.getItem("details");
    const array = JSON.parse(parse);

    let isEmailAlreadyExist = false;

    for (let i of array) {
        let a = i.email;
        if (email == a) {
            isEmailAlreadyExist = true;
            break;
        }
    }
    if (isEmailAlreadyExist) {
        document.getElementById("error").innerText = "Sorry ! This email already exists !!";
        return;
    }

    const userDetail = {
        "username": username,
        "contact": contact,
        "email": email,
        "password": password
    }

    toBeAdded.push(userDetail);

    const detailsInString = JSON.stringify(toBeAdded);
    localStorage.setItem("details", detailsInString);


    window.location.href = "./login.html";


}

function onPageLoad() {
    let parse = JSON.parse(localStorage.getItem("details"));
    if (parse != null) {
        toBeAdded = parse;
    } else {
        localStorage.setItem("details", JSON.stringify([]));
    }
    return toBeAdded;
}

onPageLoad();


function showPwd() {
    const pass = document.getElementById("showPassword");
    if (pass.checked) {
        document.getElementById("password").type = "text";
    } else {
        document.getElementById("password").type = "password";
    }

}

// function validate() {
//     let name = document.forms["form"]["name"].value;
//     let number = document.forms["form"]["number"].value;
//     let email = document.forms["form"]["mail"].value;
//     let password = document.forms["form"]["password"].value;

//     if (name.length < 3) {
//         document.getElementById("fullName").innerHTML = "Name should contain atleast 3 or more characters"
//     }
//     if()

// }

function validate() {
    let formname = document.getElementById("fullName").value;
    let formnumber = document.getElementById("fullName").value;
    let formemail = document.getElementById("fullName").value;
    let formpassword = document.getElementById("fullName").value;
    if (formname.length < 3) {
        document.getElementById("fullName").innerHTML = "Name should contain atleast 3 or more characters"
    }

}