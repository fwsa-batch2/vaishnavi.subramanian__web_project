function check() {
    let user = localStorage.getItem("LOGGEDINUSER");
    if (user !== "vaishnavi@gmail.com") {
        alert("Only admins can access this page.");
        window.location.href = "./../pages/rmmenu.html";
    }
}
check();