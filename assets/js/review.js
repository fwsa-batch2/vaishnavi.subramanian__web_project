function render() {

    let getItem = JSON.parse(localStorage.getItem("feedback"));
    let a = "";
    for (let i of getItem) {
        let c = `
        <div class="sun">
        <img src="./../assets/images/perfect.png" class="pic" alt="img">
        <p class="moon">${i.name}</p>
        <p class="stars">${i.comment}</p>
    </div>
                `
        a = a + c
    }

    document.getElementById("hmm").innerHTML = a;

}
render();

function goToAdd() {
    window.location.href = "./addreview.html"

}