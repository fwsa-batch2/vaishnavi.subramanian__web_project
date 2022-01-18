function addingFeedback() {

    let parsedFeedback = JSON.parse(localStorage.getItem("feedback"));
    let feedback = "";
    for (let i of parsedFeedback) {
        let newFeedback = `
        <div class="whole_div">
        <img src="./../assets/images/perfect.png" class="profile_pic" alt="img">
        <p class="name">${i.name}</p>
        <p class="comment">${i.comment}</p>
        </div>`;
        feedback = feedback + newFeedback;
    }

    document.getElementById("to_be_added").innerHTML = feedback;

}
addingFeedback();

function goToAdd() {
    window.location.href = "./addreview.html";

}