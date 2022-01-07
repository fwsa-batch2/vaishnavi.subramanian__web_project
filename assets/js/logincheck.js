function check() {
    let chk = localStorage.getItem("loggedInUser");
    if (chk == null) {
        window.location.href = "./../pages/login.html"
    }
}

check();