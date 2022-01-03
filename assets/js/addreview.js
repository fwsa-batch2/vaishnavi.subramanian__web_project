let feedback = [];

function onPageLoadHandler() {
    let parse = JSON.parse(localStorage.getItem("feedback"));
    if (parse != null) {
        feedback = parse;
    } else {
        localStorage.setItem("feedback", JSON.stringify([]));
    }
    return feedback;
}

onPageLoadHandler();

function submitHandler() {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let comment = document.getElementById("feedback").value;

    let review = {
        "name": name,
        "comment": comment
    }
    feedback.push(review);
    localStorage.setItem("feedback", JSON.stringify(feedback));
    window.location.href = "./../pages/rmreview.html";
}