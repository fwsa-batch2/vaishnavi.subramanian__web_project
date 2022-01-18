let toBeAdded = [];

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

function showPwd() {
    const pass = document.getElementById("password");
    if (pass.type == "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }

}