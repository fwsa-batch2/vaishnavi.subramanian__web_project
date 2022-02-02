let feedback = [];

function onPageLoadHandler() {
    let parse = JSON.parse(localStorage.getItem("FEEDBACK"));
    if (parse != null) {
        feedback = parse;
    } else {
        localStorage.setItem("FEEDBACK", JSON.stringify([]));
    }
    return feedback;
}

onPageLoadHandler();

function submitHandler(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let comment = document.getElementById("feedback").value;
    let review = {
        "name": name,
        "comment": comment
    };
    feedback.push(review);
    localStorage.setItem("FEEDBACK", JSON.stringify(feedback));
    window.location.href = "./../pages/rmreview.html";
}