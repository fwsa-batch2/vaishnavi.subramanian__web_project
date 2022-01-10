function check() {
    let user = localStorage.getItem("loggedInUser");
    if (user !== "vaishnavi@gmail.com") {
        alert("Only admins can access this page.");
        window.location.href = "./../pages/rmmenu.html"
    }
}
check();