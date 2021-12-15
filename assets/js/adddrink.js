let toBeAdded = [];


function submitHandler() {
    event.preventDefault();
    const coffeeName = document.getElementById("coffeeName").value;
    const description = document.getElementById("description").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const price = document.getElementById("price").value;
    const createdAt = document.getElementById("createdAt").value;

    const coffee = {
        "coffeeName": coffeeName,
        "description": description,
        "imageUrl": imageUrl,
        "price": price,
        "createdAt": createdAt
    }

    toBeAdded.push(coffee);

    const coffeeInString = JSON.stringify(toBeAdded);
    localStorage.setItem("toBeAdded", coffeeInString);

}

function onPageLoad() {
    let parse = JSON.parse(localStorage.getItem("toBeAdded"));
    if (parse != null) {
        toBeAdded = parse;
    } else {
        toBeAdded = [];
        localStorage.setItem("toBeAdded", JSON.stringify([]));
    }
    return toBeAdded;
}

onPageLoad();