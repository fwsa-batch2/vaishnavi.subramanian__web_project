function check() {
    let loginCheck = localStorage.getItem("loggedInUser");
    if (loginCheck == null) {
        window.location.href = "./../pages/login.html";
    }
}

check();