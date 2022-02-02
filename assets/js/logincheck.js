function check() {
    let loginCheck = localStorage.getItem("LOGGEDINUSER");
    if (loginCheck == null) {
        window.location.href = "./../pages/login.html";
    }
}

check();