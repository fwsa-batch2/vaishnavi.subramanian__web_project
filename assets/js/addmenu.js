let coffeeToBeAdded = [];

function onPageLoad() {
    let parse = JSON.parse(localStorage.getItem("COFFEELIST"));
    if (parse != null) {
        coffeeToBeAdded = parse;
    } else {
        localStorage.setItem("COFFEELIST", JSON.stringify([]));
    }
    return coffeeToBeAdded;
}

onPageLoad();

function submitHandler(event) {
    event.preventDefault();

    const coffeeName = document.getElementById("coffeeName").value;
    const description = document.getElementById("description").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const price = document.getElementById("price").value;

    const coffee = {
        "coffeeName": coffeeName,
        "description": description,
        "imageUrl": imageUrl,
        "price": price,
    };

    coffeeToBeAdded.push(coffee);
    const coffeeInString = JSON.stringify(coffeeToBeAdded);
    localStorage.setItem("COFFEELIST", coffeeInString);
    window.location.href = "./../pages/rmmenu.html";
}