// let feedback = [];

// function onPageLoadHandler() {
//     let parse = JSON.parse(localStorage.getItem("feedback"));
//     if (parse != null) {
//         feedback = parse;
//     } else {
//         localStorage.setItem("feedback", JSON.stringify([]));
//     }
//     return feedback;
// }

// onPageLoadHandler();

// function submitHandler() {
//     event.preventDefault;

//     let name = document.getElementById("name").value;
//     let comment = document.getElementById("feedback").value;

//     let review = {
//         "name": name,
//         "comment": comment
//     }
//     feedback.push(review);
//     localStorage.setItem("feedback", JSON.stringify(feedback));
//     render();
// }

function render() {

    let getItem = JSON.parse(localStorage.getItem("feedback"));
    let a = "";
    for (i = 0; i < getItem.length; i++) {
        let b = getItem[i];
        let c = `
        <div class="sun">
        <img src="./../assets/images/perfect.png" class="pic" alt="img">
        <p class="moon">${b.name}</p>
        <em class="stars">${b.comment}</em>
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