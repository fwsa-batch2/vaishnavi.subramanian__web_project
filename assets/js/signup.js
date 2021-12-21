let toBeAdded = [];


function submitHandler() {
    event.preventDefault();
    const username = document.getElementById("fullName").value;
    const contact = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;



    const y = localStorage.getItem("details");
    const array = JSON.parse(y);

    let isEmailAlreadyExist = false;

    for (let i = 0; i < array.length; i++) {
        let a = array[i].email;
        if (email == a) {
            isEmailAlreadyExist = true;
            break;
        }
    }
    if (isEmailAlreadyExist) {
        document.getElementById("error").innerText = "Sorry ! This mail id already exists";
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
        toBeAdded = [];
        localStorage.setItem("details", JSON.stringify([]));
    }
    return toBeAdded;
}

onPageLoad();


function showPwd() {
    const pass = document.getElementById("showPassword");
    if (pass.checked == true) {
        document.getElementById("password").type = "text";
    } else {
        document.getElementById("password").type = "password";
    }
}